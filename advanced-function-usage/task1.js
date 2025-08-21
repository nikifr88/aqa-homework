function handleNum(n, evenFunc, oddFunc) {
    if(n % 2 === 0) return evenFunc();
    return oddFunc();
}

const handelEven = () => console.log('number is even');
const handleOdd = () => console.log('number is odd');

handleNum(5, handelEven, handleOdd);
handleNum(6, handelEven, handleOdd);