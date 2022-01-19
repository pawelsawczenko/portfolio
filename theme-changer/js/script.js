const background = document.querySelector("[data-theme=background]");
const buttonMain = document.querySelector("[data-theme=btn]");
const buttonsSecondary = document.querySelectorAll("[data-theme=btn-outline]");
const buttonsSubmit = document.querySelectorAll("[data-theme=btn-submit]");
const text = document.querySelectorAll("[data-theme=text]");
const cardHeader = document.querySelectorAll(".card-header");
const cardBody = document.querySelectorAll(".card-body");

function themeChanger(item, theme1, theme2) {
  item.classList.remove(theme1);
  item.classList.add(theme2);
}

function themeSelector(item, theme1, theme2) {
  if (item.classList.contains(theme1)) {
    themeChanger(item, theme1, theme2);
  } else if (item.classList.contains(theme2)) {
    themeChanger(item, theme2, theme1);
  } else {
    console.log(`Can't change theme for ${item}`);
  }
}

function changeTheme() {
  //Change Background
  themeSelector(background, "background-light", "background-dark");

  // Change Main Button
  themeSelector(buttonMain, "btn-dark", "btn-light");

  // Change Secondary Buttons
  buttonsSecondary.forEach((btn) =>
    themeSelector(btn, "btn-outline-dark", "btn-outline-light")
  );

  // Change Submit Buttons
  buttonsSubmit.forEach((btn) => themeSelector(btn, "btn-primary", "btn-info"));

  // Change Text
  text.forEach((text) => themeSelector(text, "text-dark", "text-light"));

  // Change Card Header
  cardHeader.forEach((card) =>
    themeSelector(card, "card-light", "card-header-dark")
  );

  // Change Card Body
  cardBody.forEach((card) => themeSelector(card, "card-light", "card-dark"));
}
