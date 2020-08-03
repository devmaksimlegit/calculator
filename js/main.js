const database = {
  "iPhone SE": {
    "memory64": ["39 990", "3 000", "2 400"],
    "memory128": ["44 990", "3 400", "2 700"],
    "memory256": ["59 990", "4 100", "3 300"]
  },
  "iPhone 11": {
    "memory64": ["59 990", "4 500", "3 600"],
    "memory128": ["64 990", "4 900", "3 900"],
    "memory256": ["73 990", "5 600", "4 500"]
  },
  "iPhone 11 Pro": {
    "memory64": ["79 990", "6 000", "4 800"],
    "memory256": ["96 990", "7 300", "5 800"],
    "memory512": ["116 990", "8 800", "6 800"]
  },
  "iPhone 11 Pro Max": {
    "memory64": ["89 990", "6 800", "5 400"],
    "memory256": ["106 990", "8 100", "6 300"],
    "memory512": ["126 990", "9 600", "7 300"]
  }
};

const modelName = document.querySelector('.form-card__title').dataset.value;
const memoryes = document.querySelector('.form-card__memory').querySelectorAll('.form-card__block');
const tariffs = document.querySelectorAll('.form-card__block-rate');
const checkboxes = [memoryes, tariffs];
const cost = document.querySelector('#cost');
const creditPrice = document.querySelector('.rub');
const dataBaseModel = database[modelName];

for (let arr of checkboxes) {
  arr.forEach(function (input) {
    input.onchange = function () {
      prices(modelName);
    }
  });
}

function prices(modelName) {
  let memoryChecked = 'memory';
  let tariffChecked = '';
  for (let memory of memoryes) {
    if (memory.querySelector('input').checked) {
      memoryChecked += memory.querySelector('label').textContent;
    }
  }
  const data = dataBaseModel[memoryChecked];
  cost.textContent = data[0];
  for (let tariff of tariffs) {
    if (tariff.querySelector('input').checked) {
      tariffChecked = tariff.querySelector('label').textContent;
    }
  }
  if (tariffChecked === 'Гибкий') {
    creditPrice.textContent = data[1];
  } else {
    creditPrice.textContent = data[2];
  }
}