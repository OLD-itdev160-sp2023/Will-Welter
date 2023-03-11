//welcome message
var user = 'Will';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest Dr Pepper reviews.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//prices
var price = 2,
    studentDiscount = .50,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price')

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);