const select = document.querySelector("select");
const allLang = ["en", "de", "es", "fr", "ja", "pt"];
const userLanguage = navigator.language || navigator.userLanguage.substr(1); // Используем только первую часть

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
