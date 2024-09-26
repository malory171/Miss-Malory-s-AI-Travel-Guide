function displayCountryInformation(response) {
  new Typewriter("#country-information", {
    strings:
      response.data.answer +
      `<div class="wishes"><strong>
          🌺Miss Malory's AI Travel Guide wishes you safe and unforgettable
          travels! ✈️ Bon Voyage!
        </strong></div>
        </br>
        <a href="/">New search</a>`,
    autoStart: true,
    delay: 15,
    cursor: "",
  });
}
function generateCountryInformation(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions-input");
  let apiKey = "a3ab2befb0aeo33880eb42d02209d3et";
  let prompt = `Please tell me about ${instructionsInput.value}?`;
  let context = `You are a very structured AI-Assistant and you know a lot about countries, their population, languages spoken, cuisine, famous places to visit. You always answer in the same structured way like travel agent would do. Please make the country in the first line bold. Please submit always the response in basic html format without h1 starting with h2 with no other text around it, starting with h2 en ending with a paragraph, in a way that I could just add the answer of the prompt inside a div.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let countryInformationElement = document.querySelector("#examples");

  countryInformationElement.innerHTML = `<div class="generating"><strong>Generating country information about ${instructionsInput.value}</strong></div>`;

  axios.get(apiUrl).then(displayCountryInformation);
}

let countryInformationFormElement = document.querySelector(
  "#country-information-generator-form"
);
countryInformationFormElement.addEventListener(
  "submit",
  generateCountryInformation
);
