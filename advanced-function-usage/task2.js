function countdown(num) {
	console.log(num);
	if (num <= 0) return 0;
	return num - countdown(num - 1);
}

countdown(5);
