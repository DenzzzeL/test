let screenPrice
let percentage = 10
let allServicePrices
let modifiedTitle = ''
let titleProject
let screenValue
let responsive
let service1
let service2

const checkIsNumber = function (number) {
  return !isNaN(parseFloat(number)) && isFinite(number)
}

const asking = function () {
  titleProject = prompt('Название проекта?', 'КальКУлЯтОр')
  screenValue = prompt(
    'шаблонные, с уникальным дизайном, с анимациями',
    'с анимациями'
  )

  screenPrice = prompt('Сколько это будет стоить?', 12000)

  while (
    !checkIsNumber(screenPrice) ||
    screenPrice.trim() === '' ||
    screenPrice === null
  ) {
    screenPrice = prompt('Сколько это будет стоить?', 12000)
  }
  screenPrice = Number(screenPrice)

  responsive = prompt('Нужен ли респонсив на сайте?', 'нужен')
}

// Объявление функций

const getAllServicePrices = function () {
  let num = 0

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?', 'Услуга 1')
    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?', 'Услуга 2')
    }

    let textFromPromt = ''

    while (
      !checkIsNumber(textFromPromt) ||
      textFromPromt.trim() === '' ||
      textFromPromt === null
    ) {
      textFromPromt = prompt('Сколько это будет стоить?')
    }
    num += Number(textFromPromt)
  }

  return num
}

function getFullPrice() {
  return screenPrice + allServicePrices
}

const getServicePercentPrices = function () {
  return fullPrice - +(fullPrice * (percentage / 100))
}

const getTitle = function () {
  const trimmedTitle = titleProject.trim()
  if (trimmedTitle[0] === ' ') {
    return trimmedTitle[0].toLowerCase() + trimmedTitle.slice(1)
  } else {
    return trimmedTitle[0].toUpperCase() + trimmedTitle.slice(1).toLowerCase()
  }
}

// Функция для получения сообщения о скидке
const getPercentMessage = function (price) {
  if (price > 50000) {
    return 'Делаем скидку 10%'
  } else if (price > 40000 && price < 50000) {
    return 'Делаем скидку 7%'
  } else if (price > 20000 && price < 40000) {
    return 'Делаем скидку 5%'
  } else if (price < 20000 && price > 0) {
    return 'Скидка не предусмотрена'
  } else if (price === 0 || price === 20000 || price === 50000) {
    return 'Проверка на строгое равенство'
  } else if (price < 0) {
    return 'Что-то пошло не так'
  }
}

// Вызов функций
asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrices()
modifiedTitle = getTitle()

console.log(modifiedTitle) //Калькулятор
console.log(allServicePrices) // 3000
console.log(fullPrice) // 12000 + 3000 = 15000
console.log(Math.ceil(servicePercentPrice)) // 13500
console.log(getPercentMessage(fullPrice)) //Скидка не предусмотрена
