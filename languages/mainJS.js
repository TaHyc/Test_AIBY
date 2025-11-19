console.log("!!!!!!!!!!")

const select = document.querySelector("select");
const allLang = ["en", "de", "es", "fr", "ja", "pt"];

select.addEventListener("change", changeURLLanguage);


function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash)
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;
    for (let key in languages) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = languages[key][hash];
        }
    }
}
changeLanguage()