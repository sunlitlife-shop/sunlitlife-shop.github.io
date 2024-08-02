document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const toggleBtn = document.querySelector('.toggle-btn');
    const japaneseElements = document.querySelectorAll('.japanese');
    const englishElements = document.querySelectorAll('.english');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const formObject = Object.fromEntries(formData.entries());
        
        console.log('Form data:', formObject);
        
        alert('Thank you for contacting us. We will review your message and get back to you shortly.');
        form.reset();
    });
    
    toggleBtn.addEventListener('click', () => {
        const serviceSelect = document.getElementById('service');
        const isEnglish = englishElements[0].style.display === 'block';
    
        japaneseElements.forEach(el => el.style.display = isEnglish ? 'block' : 'none');
        englishElements.forEach(el => el.style.display = isEnglish ? 'none' : 'block');
    
        // Update the select element options visibility
        const options = serviceSelect.querySelectorAll('option');
        options.forEach(option => {
            if (option.classList.contains('japanese')) {
                option.style.display = isEnglish ? 'block' : 'none';
            } else if (option.classList.contains('english')) {
                option.style.display = isEnglish ? 'none' : 'block';
            }
        });
    
        // Force re-render of the select element
        serviceSelect.style.display = 'none';
        setTimeout(() => {
            serviceSelect.style.display = 'block';
        }, 0);
    });
    
    // Ensure that English is visible and Japanese is hidden initially
    japaneseElements.forEach(el => el.style.display = 'none');
    englishElements.forEach(el => el.style.display = 'block');
    
    // Set the correct display for select options initially
    const serviceSelect = document.getElementById('service');
    const options = serviceSelect.querySelectorAll('option');
    options.forEach(option => {
        if (option.classList.contains('japanese')) {
            option.style.display = 'none';
        } else if (option.classList.contains('english')) {
            option.style.display = 'block';
        }
    });
});