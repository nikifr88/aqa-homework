function checkOrder(available, ordered) {
	if (ordered <= 0) {
		return 'Your order is empty';
	} else if (available < ordered) {
		return 'Your order is too large, we don’t have enough goods.';
	} else {
		return 'Your order is accepted';
	}
}

console.log(checkOrder(55, 0)); //проверка на ordered = 0
console.log(checkOrder(23, -4)); //проверка на отрицательное значение ordered
console.log(checkOrder(2, 3)); //проверка на ordered больше available
console.log(checkOrder(2, 2)); //позитивный сценарий
