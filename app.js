var buttonTranslate = document.querySelector("#translate-button");
var inputTranslate = document.querySelector("#translate-input");
var outputTranslate = document.querySelector("#translate-output");

var serverUrl = "	https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text) {
  return serverUrl + "?" + "text=" + text;
}
function errorHandler() {
  alert("something wrong with server, try again after some time");
}

function clickHandler() {
  var inputText = inputTranslate.value;
  fetch(getTranslationUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputTranslate.innerText = translatedText;
    })
    .catch(errorHandler);
}

buttonTranslate.addEventListener("click", clickHandler);