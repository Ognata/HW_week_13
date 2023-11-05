//Если пользователь не ввёл дату рождения, под полем ввода будет появляться красное сообщение с просьбой ввести дату. Если пользователь введёт дату или изменит её, сообщение об ошибке будет скрыто.

//- Добавьте на страницу инпут, который позволит пользователю выбрать дату рождения в текущем году, и кнопку, при нажатии на которую, на страницу будет выводиться значение количества дней до дня рождения.


const birthdateInput = document.querySelector('.bdate');
const calculateButton = document.querySelector('.btn');
const resultContent = document.querySelector('.result');
const errorMessage = document.getElementById('error-message');


const daysResult = () => {
    const today = new Date();
    const birthdate = new Date(birthdateInput.value);

    birthdate.setFullYear(today.getFullYear()); // Устанавливаем текущий год
        if (birthdate < today) {
            birthdate.setFullYear(today.getFullYear() + 1); // Если день рождения уже прошел в текущем году, устанавливаем следующий год
        }

        const timeDifference = birthdate - today;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); //Конвертируем разницу в миллисекундах в дни

    if (!birthdateInput.value) { //выводим ошибку, если дата не выбрана
        errorMessage.style.display = 'block';
        resultContent.style.display = 'none';

    }else {
        errorMessage.style.display = 'none'; //скрываем ошибку и выводим результат
        resultContent.style.display = 'block';
        // resultContent.textContent = `До дня рождения осталось дней: ${daysDifference}`; // вариант без склонения слова "день"
        updateDayWord(daysDifference);

        function updateDayWord(days){  // Функция для склонения слова "день"
            if (days % 10 === 1 && days % 100 !== 11) {
                resultContent.textContent = 'До вашего дня рождения ' + days + ' день.'
            } else if (days % 10 >= 2 && days % 10 <= 4 && (days % 100 < 10 || days % 100 >= 20)) {
                resultContent.textContent = 'До вашего дня рождения ' + days + ' дня.'
            } else {
                resultContent.textContent = 'До вашего дня рождения ' + days + ' дней.'
            }
        }

        birthdateInput.addEventListener('change', function () { //функция для скрытия ошибки, когда в импут произошло изменение
                    errorMessage.style.display = 'none';
                });
}
}
calculateButton.addEventListener('click', daysResult);

