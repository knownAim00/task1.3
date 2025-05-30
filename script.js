document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const displayContainer = document.getElementById('formDataDisplay');
    
    // Функция для обновления отображения данных
    function updateFormDataDisplay() {
        const formData = new FormData(form);
        let html = '<h3>Введені дані:</h3><ul>';
        
        // Обрабатываем все поля формы
        for (const [name, value] of formData.entries()) {
            if (value) { // Пропускаем пустые значения
                html += `<li><strong>${getLabelText(name)}:</strong> ${value}</li>`;
            }
        }
        
        html += '</ul>';
        displayContainer.innerHTML = html;
    }
    
    // Функция для получения человекочитаемых названий полей
    function getLabelText(fieldName) {
        const labels = {
            'name': "Ім'я",
            'Email': "Email",
            'password': "Пароль",
            'group': "Група",
            'gender': "Стать",
            'about': "Про себе",
            'age': "Вік",
            'consent': "Згода на обробку даних"
        };
        return labels[fieldName] || fieldName;
    }
    
    // Обновляем отображение при изменении формы
    form.addEventListener('input', updateFormDataDisplay);
    form.addEventListener('change', updateFormDataDisplay);
    
    // Обработка отправки формы
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Форма відправлена!');
        updateFormDataDisplay();
    });
});
