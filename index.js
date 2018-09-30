let data;
getDataFromServer();

let inputTextElement = document.querySelector('input[type="text"]');
let checkboxElement = document.querySelector('input[type="checkbox"]');
let resultElement = document.querySelector('#result');

document.querySelector('#buttonLength').addEventListener('click', buttonLengthHandler);
document.querySelector('#buttonSubstring').addEventListener('click', buttonSubstringHandler);

async function getDataFromServer() {
  let urlProxy = 'https://cors-anywhere.herokuapp.com/'; // 'http://localhost:5001/'
  let urlData = 'http://www.mrsoft.by/data.json';
  try {
    let response = await fetch(urlProxy + urlData);
    let info = await response.json();
    data = info.data;
    writeDataToResult(data);
  } catch (error) {
    console.log(`Can't load data from server`);
  }
}

function writeDataToResult(data) {
  let fragment = document.createDocumentFragment();
  data.forEach(word => {
    let li = document.createElement('li');
    li.textContent = word;
    fragment.appendChild(li);
  });
  resultElement.innerHTML = '';
  resultElement.appendChild(fragment);
}

function buttonLengthHandler() {
  if (!data) return;
  let text = inputTextElement.value;
  let length = +text;
  if (isNaN(length)) {
    return;
  }
  let filterData = data.filter(word => word.length > length);
  writeDataToResult(filterData);
}

function buttonSubstringHandler() {
  if (!data) return;
  let isChecked = checkboxElement.checked;
  let substring = inputTextElement.value;
  if (!isChecked) {
    substring = substring.toLowerCase();
  }
  let filterData = data.filter(word => {
    if (!isChecked) {
      word = word.toLowerCase();
    }
    return word.includes(substring);
  });
  writeDataToResult(filterData);
}
