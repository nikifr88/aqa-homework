function timerWithText(text, msec) {
	setTimeout(() => console.log(text), msec);
}

timerWithText('Время истекло', 5000);
