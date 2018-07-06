
//1.What is the average price of all items?
var price = 0
items.forEach(function(item){
	price += Number(item.price)
})
avg = price / items.length
document.getElementById('answer1').innerHTML =`The average price is $${avg.toFixed(2)}` 

//1.What is the average price of all items?
const avgPrice = (items.reduce(function(a, b){
	return a + b.price
},0) / items.length).toFixed(2)
//2. Show me an array of items that cost between $14.00 and $18.00 USD?
var innerHTML = ""
items.filter(function(item){
	if(item.price > 14 && item.price < 18){
		return true
	}else{
		return false
	}
}).forEach(function(item){
		innerHTML += '\n'+item.title+'\n'
	})
document.getElementById('answer2').innerHTML = innerHTML
//2. Show me an array of items that cost between $14.00 and $18.00 USD?
const reangedPrice = items.filter(function(item){
	return item.price > 14 && item.price < 18
}).map(function(item){
	return item.title
}).join('\n')
//3. Which item has a "GBP" currency code? Display it's name and price.
var GBP = ""
items.filter(function(item){
	if(item.currency_code === "GBP"){
		GBP += item.title + " " + item.price
	}
})

//3. Which item has a "GBP" currency code? Display it's name and price.
const gbpItem = items.filter(function(item){
	return item.currency_code === 'GBP'
})[0]
const gbpHtml = gbpItem.title + ' costs &pound;' + gbpItem.price
document.getElementById('answer3').innerHTML = gbpHtml
//4. Display a list of all items who are made of wood.
const woodItems = items.filter(function(item){
	return item.materials .indexOf("wood") !== -1
}).map(function(item){
	return item.title
}).join('\n')
document.getElementById('answer4').innerHTML = woodItems
//5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
const eightOrMore = items.filter(function(item){
	return item.materials.length >= 8
})

let eightHTML = ''

eightOrMore.forEach(function(item){
	eightHTML += `${item.title} has ${item.materials.length} materials\n`
		eightHTML += item.materials.join('\n')
		eightHTML += '\n\n'
})
document.getElementById('answer5').innerHTML = eightHTML

//6. How many items were made by their sellers?
const madeBySeller = items.filter(function(item){
	return item.who_made == 'i_did'
}).length
document.getElementById('answer6').innerHTML = `${madeBySeller} were made by sellers`