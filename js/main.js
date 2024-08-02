document.addEventListener('DOMContentLoaded', () => {
    const portfolioGrid = document.getElementById('portfolio-grid');
    const menuContainer = document.getElementById('menu-container');
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');
    const menuItems = document.querySelectorAll('#menu li');
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const closeButton = document.querySelector('.close');

    function createPortfolioItem(item) {
        const div = document.createElement('div');
        div.className = `portfolio-item filter-${item.category}`;
        
        const innerDiv = document.createElement('div');
        innerDiv.className = 'portfolio-item-inner';
        
        const img = document.createElement('img');
        img.src = `./assets/images/${item.category}/${item.filename}`;
        img.alt = item.filename.split('.')[0];
        
        const overlay = document.createElement('div');
        overlay.className = 'portfolio-overlay';
        overlay.innerHTML = '<span>View</span>';
        
        innerDiv.appendChild(img);
        innerDiv.appendChild(overlay);
        div.appendChild(innerDiv);
    
        div.addEventListener('click', () => {
            openModal(img.src);
        });
    
        return div;
    }
    function openModal(imgSrc) {
        modalImg.src = imgSrc;
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }

    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // Wait for transition to complete
    }

    function loadPortfolioItems() {
        portfolioItems.forEach(item => {
            const portfolioItem = createPortfolioItem(item);
            portfolioGrid.appendChild(portfolioItem);
        });
    }

    function filterPortfolio(filter) {
        const items = document.querySelectorAll('.portfolio-item');
        items.forEach(item => {
            if (filter === 'all' || item.classList.contains(`filter-${filter}`)) {
                item.classList.remove('hidden');
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
                item.classList.add('hidden');
            }
        });
    }

    function updateMenuSize() {
        menuContainer.style.width = `${menuButton.offsetWidth}px`;
    }

    function expandMenu() {
        menuContainer.style.width = `${menu.offsetWidth}px`;
    }
    function updateMenuSize() {
        const containerWidth = menuContainer.offsetWidth;
        const buttonWidth = menuButton.offsetWidth;
        const buttonMargin = (containerWidth - buttonWidth) / 2;
        menuContainer.style.width = `${containerWidth}px`;
        menuButton.style.marginLeft = `${buttonMargin}px`;
    }

    function contractMenu() {
        if (menuButton.textContent == 'Menu') {
            menuContainer.style.width = `80px`;
        } else if (menuButton.textContent == 'Photography') {
            menuContainer.style.width = `180px`;
        } else if (menuButton.textContent == 'Graphic Design') {
            menuContainer.style.width = `180px`;
        } else if (menuButton.textContent == 'Photo Retouching') {
            menuContainer.style.width = `180px`;
        }

    }

    menuContainer.addEventListener('mouseenter', expandMenu);
    menuContainer.addEventListener('mouseleave', () => {
        contractMenu();
        console.log('menuContainer size = ', menuContainer.style.width);
        menuButton.textContent = menuButton.textContent; // Trigger reflow to ensure correct size calculation
    });

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const filter = item.getAttribute('data-filter');
            const filterText = item.textContent;
            
            if (filter === 'all') {
                menuButton.textContent = 'Menu';
            } else {
                menuButton.textContent = filterText;
            }
            
            filterPortfolio(filter);
            
            menuItems.forEach(i => i.classList.remove('current-filter'));
            item.classList.add('current-filter');
            
            updateMenuSize();
        });
    });

    closeButton.onclick = closeModal;
    window.onclick = (event) => {
        if (event.target === modal) {
            closeModal();
        }
    };

    loadPortfolioItems();
    updateMenuSize();

    window.addEventListener('resize', updateMenuSize);
});