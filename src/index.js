function generateCountryInformation(event) {
  event.preventDefault();

  new Typewriter("#country-information", {
    strings: "<h2>Country Overview</h2>",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
  new Typewriter("#wishings", {
    strings: `<strong>
            Miss Malory's AI Travel Guide wishes you safe and unforgettable
            travels! ✈️ Bon Voyage!
          </strong>`,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let countryInformationFormElement = document.querySelector(
  "#country-information-generator-form"
);
countryInformationFormElement.addEventListener(
  "submit",
  generateCountryInformation
);
