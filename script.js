let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = {
	"burger":0,
	"fries":0,
	"pizza":0,
	"coke":0,
	"donut":0,
	"hdog":0
	};
let total = 0;

let burger = document.getElementById("burger");
let fries = document.getElementById("fries");
let pizza = document.getElementById("pizza");
let coke = document.getElementById("coke");
let donut = document.getElementById("donut");
let hdog = document.getElementById("hdog");

// Функция для создания кнопки "+"
function createPlusButton(productName) {
	var plusButton = document.createElement("button");
	plusButton.innerHTML = "+";
	plusButton.classList.add("btn_plus");
	plusButton.id = "btn_" + productName + "_plus";
	return plusButton;
  }
  
  // Функция для создания кнопки "-"
  function createMinusButton(productName) {
	var minusButton = document.createElement("button");
	minusButton.innerHTML = "—";
	minusButton.classList.add("btn_minus");
	minusButton.id = "btn_" + productName + "_minus";
	return minusButton;
  }
  
  // Функция для добавления кнопок и текста между ними
  function addButtonElements(parentElement, productName, price) {
	var plusButton = createPlusButton(productName);
	var priceSpan = document.createElement("span");
	priceSpan.classList.add("sum");
	priceSpan.innerHTML = price.toString()+" zl";
	var minusButton = createMinusButton(productName);
  
	parentElement.appendChild(minusButton);	
	parentElement.appendChild(priceSpan);
	parentElement.appendChild(plusButton);
  };
  
 function count(list) {
	var sum = 0;
	sum += list["burger"]*15.01;
	sum += list["fries"]*10.15;
	sum += list["pizza"]*25.00;
	sum += list["coke"]*9.99;
	sum += list["donut"]*5.55;
	sum += list["hdog"]*13.80;
	return sum;

 };

burger.addEventListener("click", function(){
  	var parentDiv = burger.parentElement;
	var price = 15.01;
  	burger.classList.add("hidden");
	item["burger"] += 1;
	var sum = item["burger"]*price
  	addButtonElements(parentDiv, "burger",sum);
	if (!tg.MainButton.isVisible) {
		
		tg.MainButton.setText("В корзине товаров на "+count(item)+" злотых. Оплатить");
		tg.MainButton.show();
	}
});

fries.addEventListener("click", function(){
  	var parentDiv = fries.parentElement;
	var price = 10.15;
  	fries.classList.add("hidden");
	item["fries"] += 1;
	var sum = item["fries"]*price
  	addButtonElements(parentDiv, "fries",sum);
	
	console.log(sum)
	if (!tg.MainButton.isVisible) {
		
		tg.MainButton.setText("В корзине товаров на "+count(item)+" злотых. Оплатить");
		tg.MainButton.show();
	}
});

pizza.addEventListener("click", function(){
  	var parentDiv = pizza.parentElement;
	var price = 25.00;
  	pizza.classList.add("hidden");
	item["pizza"] += 1;
  	addButtonElements(parentDiv, "pizza",price);
	var sum = item["pizza"]*price
	if (!tg.MainButton.isVisible) {
		
		tg.MainButton.setText("В корзине товаров на "+count(item)+" злотых. Оплатить");
		tg.MainButton.show();
	}
});

coke.addEventListener("click", function(){
  	var parentDiv = coke.parentElement;
	var price = 9.99;
  	coke.classList.add("hidden");
	item["coke"] += 1;
  	addButtonElements(parentDiv, "coke",price);
	var sum = item["coke"]*price
	if (!tg.MainButton.isVisible) {
		
		tg.MainButton.setText("В корзине товаров на "+count(item)+" злотых. Оплатить");
		tg.MainButton.show();
	}
});

donut.addEventListener("click", function(){
  	var parentDiv = donut.parentElement;
	var price = 5.55;
  	donut.classList.add("hidden");
	item["donut"] += 1;
  	addButtonElements(parentDiv, "donut",price);
	var sum = item["donut"]*price
	if (!tg.MainButton.isVisible) {
		
		tg.MainButton.setText("В корзине товаров на "+count(item)+"злотых. Оплатить");
		tg.MainButton.show();
	}
});

hdog.addEventListener("click", function(){
  	var parentDiv = hdog.parentElement;
	var price = 13.80;
  	hdog.classList.add("hidden");
	item["hdog"] += 1;
  	addButtonElements(parentDiv, "hdog",price);
	var sum = item["hdog"]*price
	if (!tg.MainButton.isVisible) {
		
		tg.MainButton.setText("В корзине товаров на "+count(item)+" злотых. Оплатить");
		tg.MainButton.show();
	}
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
