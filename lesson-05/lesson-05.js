let screenPrice = 10000
let percentage = 10

let titleProject = prompt('Название проекта?')
console.log(titleProject)

let screenValue = prompt('шаблонные, с уникальным дизайном, с анимациями')
console.log(screenValue)

let responsive = prompt('Нужен респонсивный сайт?')
console.log(responsive)

let service1 = prompt('Какой сервис нужен?')
console.log(service1)

let servicePrice1 = +prompt('Сколько это будет стоить?')
console.log(servicePrice1)

let service2 = prompt('Какой еще сервис тебе нужен?')
console.log(service2)

let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?')
console.log(servicePrice2)

let fullPrice = screenPrice + servicePrice1 + servicePrice2
console.log(fullPrice)

let percentageResult = +(fullPrice * (percentage / 100))
console.log(percentageResult, 'Процент подрядчика')

let servicePercentPrice = fullPrice - percentageResult
console.log(
  Math.ceil(servicePercentPrice),
  'Итоговая сумма проекта за вычетом % подрядчику'
)

// Объявляем функцию для подсчета суммы всех доп услуг
// (используем function expression)
let allServicePrices

const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2
}
// Результат записываем в переменную allServicePrices
allServicePrices = getAllServicePrices()
console.log(allServicePrices, 'сумма всех доп услуг')

// Создаем функцию getFullPrice
// (используем function declaration)
function getFullPrice() {
  return screenPrice + allServicePrices
}
//Результат сохраняем в переменную fullPrice
fullPrice = getFullPrice()

// Функция для изменения регистра первой буквы строки
let modifiedTitle = ''

const getTitle = function () {
  return (
    titleProject[0].toUpperCase() + titleProject.slice(1).toLocaleLowerCase()
  )
}
modifiedTitle = getTitle()
console.log(modifiedTitle)

const getServicePercentPrices = function () {
  return fullPrice - servicePercentPrice
}

servicePercentPrice = getAllServicePrices()

// Вычисление скидки
if (fullPrice > 50000) {
  console.log('Сделаем скидку в 10%')
} else if (fullPrice > 20000 && fullPrice < 40000) {
  console.log('Сделаем скидку 5%')
} else if (fullPrice < 20000 && fullPrice > 0) {
  console.log('Скидка не предусмотрена')
} else if (fullPrice === 0) {
  console.log('Даром')
} else if (fullPrice === 20000) {
  console.log('Сделаем скидку 5%')
} else if (fullPrice === 50000) {
  console.log('Сделаем скидку в 10%')
} else if (fullPrice < 0) {
  console.log('Что-то пошло не так')
}
