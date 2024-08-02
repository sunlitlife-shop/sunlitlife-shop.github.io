document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const toggleBtn = document.querySelector('.toggle-btn');
    const japaneseElements = document.querySelectorAll('.japanese');
    const englishElements = document.querySelectorAll('.english');
  
    let isEnglish = true; // Assuming English is the default language
  
    function getCurrentLanguage() {
      return isEnglish ? 'english' : 'japanese';
    }
  
    function getMessages(language) {
      const messages = {
        english: {
          success: "Thank you for your submission. We have received your inquiry and will get back to you soon.",
          error: "An error occurred. Please try again later."
        },
        japanese: {
          success: "ありがとうございます。お問い合わせを受け付けました。後ほどご連絡いたします。",
          error: "エラーが発生しました。後でもう一度お試しください。"
        }
      };
      return messages[language];
    }
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const formObject = Object.fromEntries(formData.entries());
      
      fetch('https://script.google.com/macros/s/AKfycbxZsWIFuOgnXHyjIW8Tzaj2PjMedDwia0KDQtPpaawmRHK75_DlIOcH7zeMOnyvTHAQOQ/exec', {
        method: 'POST',
        mode: 'no-cors', // Important for cross-origin requests
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
      })
      .then(() => {
        // We can't access the response due to 'no-cors', so we just assume success
        console.log('Form submitted successfully');
        const messages = getMessages(getCurrentLanguage());
        alert(messages.success);
        form.reset();
      })
      .catch((error) => {
        console.error('Error:', error);
        const messages = getMessages(getCurrentLanguage());
        alert(messages.error);
      });
    });
  
    toggleBtn.addEventListener('click', () => {
      isEnglish = !isEnglish;
      
      // Toggle visibility of all language-specific elements
      japaneseElements.forEach(el => el.style.display = isEnglish ? 'none' : 'block');
      englishElements.forEach(el => el.style.display = isEnglish ? 'block' : 'none');
  
      // Update the select element options visibility immediately
      const serviceSelect = document.getElementById('service');
      const options = serviceSelect.querySelectorAll('option');
  
      options.forEach(option => {
        if (option.classList.contains('japanese')) {
          option.style.display = isEnglish ? 'none' : 'block';
        } else if (option.classList.contains('english')) {
          option.style.display = isEnglish ? 'block' : 'none';
        }
      });
  
      // Re-render the select element to apply changes
      serviceSelect.blur();
      serviceSelect.focus();
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