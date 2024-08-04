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
        
        innerDiv.appendChild(img);
        div.appendChild(innerDiv);
    
        div.addEventListener('click', () => {
            openModal(img.src);
        });
    
        return div;
    }

    function openModal(imgSrc) {
        modalImg.src = imgSrc;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }

    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
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
        const containerWidth = menuContainer.offsetWidth;
        const buttonWidth = menuButton.offsetWidth;
        const buttonMargin = (containerWidth - buttonWidth) / 2;
        menuContainer.style.width = `${containerWidth}px`;
        menuButton.style.marginLeft = `${buttonMargin}px`;
    }

    function expandMenu() {
        menuContainer.style.width = `${menu.offsetWidth}px`;
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

    function toggleMenu() {
        menu.classList.toggle('show');
        menuButton.classList.toggle('active');
    }

    menuContainer.addEventListener('mouseenter', expandMenu);
    menuContainer.addEventListener('mouseleave', () => {
        contractMenu();
        console.log('menuContainer size = ', menuContainer.style.width);
        menuButton.textContent = menuButton.textContent; // Trigger reflow to ensure correct size calculation
    });

    menuButton.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
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
            
            if (window.innerWidth <= 768) {
                toggleMenu();
            } else {
                updateMenuSize();
            }
        });
    });

    closeButton.onclick = closeModal;
    modal.onclick = (event) => {
        if (event.target === modal) {
            closeModal();
        }
    };

    // Close modal on swipe down (for mobile)
    let touchstartY = 0;
    let touchendY = 0;

    modal.addEventListener('touchstart', (e) => {
        touchstartY = e.changedTouches[0].screenY;
    }, false);

    modal.addEventListener('touchend', (e) => {
        touchendY = e.changedTouches[0].screenY;
        if (touchendY > touchstartY) {
            closeModal();
        }
    }, false);

    loadPortfolioItems();
    updateMenuSize();

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            updateMenuSize();
            menu.classList.remove('show');
            menuButton.classList.remove('active');
        } else {
            menuContainer.style.width = '100%';
            menuButton.style.marginLeft = '0';
        }
    });
});