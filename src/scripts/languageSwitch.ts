let currentLang = 'ES';

function changeLanguage(lang: string) {
  currentLang = lang;
  document.querySelectorAll("[data-lang]").forEach((element) => {
    element.setAttribute("data-lang", lang);
  });
}