
// let titleProject = 'Оценка стоимости'
// let screenValue = 'шаблонные, с уникальным дизайном, с анимациями'
let screenPrice = 10000
let percentage = 10
// let fullPrice = 1000
// let responsive = true

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
