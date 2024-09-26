function generateCountryInformation(event) {
  event.preventDefault();

  new Typewriter("#country-information", {
    strings: "<h2>Country Overview</h2>",
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
