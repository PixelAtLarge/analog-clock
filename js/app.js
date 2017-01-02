const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const secondsInDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsInDegrees}deg)`;

	const minutes = now.getMinutes();
	const minutesInDegrees = ((minutes / 60) * 360) + 90;
	minuteHand.style.transform = `rotate(${minutesInDegrees}deg)`;

	const hours = now.getHours();
	const hoursInDegrees = ((hours / 60) * 360) + 90;
	hourHand.style.transform = `rotate(${hoursInDegrees}deg)`;
}

setInterval(setDate, 1000);