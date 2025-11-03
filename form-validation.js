// Валидация формы контактов
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();
            
            if (contactForm.checkValidity()) {
                // Имитация отправки формы
                const submitButton = contactForm.querySelector('button[type="submit"]');
                const originalText = submitButton.innerHTML;
                
                submitButton.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Отправка...';
                submitButton.disabled = true;
                
                setTimeout(() => {
                    // Показываем уведомление об успешной отправке
                    showAlert('Сообщение успешно отправлено!', 'success');
                    contactForm.reset();
                    contactForm.classList.remove('was-validated');
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                }, 2000);
            }
            
            contactForm.classList.add('was-validated');
        }, false);
    }
});

// Функция показа уведомлений
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const container = document.querySelector('.container.my-5.pt-5');
    container.insertBefore(alertDiv, container.firstChild);
    
    // Автоматическое скрытие через 5 секунд
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 5000);
}

// Дополнительная валидация email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Обработка изменения полей формы
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            if (this.value && !validateEmail(this.value)) {
                this.setCustomValidity('Пожалуйста, введите корректный email адрес');
            } else {
                this.setCustomValidity('');
            }
        });
    }
});
