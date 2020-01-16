const quotesObj = [
	{
		quote:
			"If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
		author: " - Sheryl Sandberg"
	},
	{
		quote: "The way to get started is to quit talking and begin doing.",
		author: " - Walt Disney"
	},
	{
		quote:
			"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
		author: " - Steve Jobs"
	},
	{
		quote:
			"If life were predictable it would cease to be life, and be without flavor.",
		author: " - Eleanor Roosevelt"
	},
	{
		quote: "Believe you can and you’re halfway there.",
		author: " - Theodore Roosevelt"
	},
	{
		quote:
			"What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
		author: " - Bob Dylan"
	},
	{
		quote:
			"The only person you are destined to become is the person you decide to be.",
		author: " - Ralph Waldo Emerson"
	},
	{
		quote:
			"It’s not the years in your life that count. It’s the life in your years.",
		author: " - Abraham Lincoln"
	},
	{
		quote:
			"If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
		author: " - Vincent Van Gogh"
	},
	{
		quote:
			"There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
		author: " - Aristotle"
	}
];

const colorsArr = [
	"#9900cc",
	"#ffccff",
	"yellow",
	"#cc0066",
	"#ccccff",
	"red",
	"#ff9999",
	"green",
	"#000099",
	"#ccfff2",
	"blue",
	"#3399ff",
	"#ccff99"
];

const quoteBtn = document.querySelector(".quoteBtn");
const quoteAuthor = document.querySelector(".quoteAuthor");
const quote = document.querySelector("#quote");
quoteBtn.addEventListener("click", newQuote);

const colors = document.querySelector(".quoteBtn");
const body = document.querySelector("body");
quoteBtn.addEventListener("click", changeClr);

function newQuote() {
	let number = Math.floor(Math.random() * quotesObj.length);
	quoteAuthor.innerHTML = quotesObj[number].author;
	quote.innerHTML = quotesObj[number].quote;
}

function changeClr() {
	let random = Math.floor(Math.random() * colorsArr.length);
	body.style.backgroundColor = colorsArr[random];
	colors.innerHTML = colorsArr[number];
}
