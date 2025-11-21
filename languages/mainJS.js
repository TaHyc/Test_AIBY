const select = document.querySelector("select");
const allLang = ["en", "de", "es", "fr", "ja", "pt"];
const userLanguage = navigator.language || navigator.userLanguage.substr(1); // Используем только первую часть
alert("Селектор языка используется только в целях проверки!")
console.log('Язык по умолчанию в системе пользователя:', userLanguage);
select.addEventListener("change", changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;

    if (hash) { // Проверяем, есть ли хэш
        hash = hash.substr(1); // Убираем символ '#'
        console.log("хэш - ", hash);

        // Устанавливаем значение select по хэшу, если он валиден
        if (allLang.includes(hash)) {
            select.value = hash;
        } else {
            // Если язык не валиден, перенаправляем на английский
            location.href = window.location.pathname + '#en';
            location.reload();
        }
    } else if (allLang.includes(userLanguage)) {
        // Устанавливаем значение select по языку пользователя, если хэша нет
        select.value = userLanguage;
    } else {
        // Если язык не валиден, переносим на английский
        location.href = window.location.pathname + '#en';
        location.reload();
    }

    // Обновляем языковые элементы
    for (let key in languages) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = languages[key][select.value]; // Используем select.value
        }
    }
}

changeLanguage();

document.addEventListener('DOMContentLoaded', function () {
    const yearlyBtn = document.getElementById('yearlyAccess');
    const weeklyBtn = document.getElementById('weeklyAccess');
    const continueBtn = document.getElementById('continue-btn');
    const bestOffer = document.getElementById('best_offer');

    // Обработчики событий для кнопок подписки
    yearlyBtn.addEventListener('click', function () {
        setActiveButton('yearly');
    });

    weeklyBtn.addEventListener('click', function () {
        setActiveButton('weekly');
    });

    // Обработчик для кнопки Continue
    continueBtn.addEventListener('click', function () {
        if (yearlyBtn.classList.contains('active')) {
            // Переход по ссылке для годовой подписки
            window.location.href = 'https://apple.com/';
            return; // Предотвращает выполнение дальнейшего кода
        } else if (weeklyBtn.classList.contains('active')) {
            // Переход по ссылке для недельной подписки
            window.location.href = 'https://google.com/';
            return; // Предотвращает выполнение дальнейшего кода
        } else {
            continueBtn.classList.add('negative');
            setTimeout(() => {
                continueBtn.classList.remove('negative'); // Удаляем класс после завершения анимации
            }, 500);
        }
    });

    // Функция для установки активной кнопки
    function setActiveButton(type) {
        if (type === 'yearly') {
            bestOffer.classList.remove('unselect');
            yearlyBtn.classList.add('active');
            weeklyBtn.classList.remove('active');
        } else {
            weeklyBtn.classList.add('active');
            yearlyBtn.classList.remove('active');
            bestOffer.classList.add('unselect');
        }
    }
}); 