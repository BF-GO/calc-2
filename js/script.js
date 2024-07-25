let a = ''; //first number
let b = ''; //second number
let sign = ''; //operation sign
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

//display
const out = document.querySelector('.calc-screen p');

function clearALL() {
	a = ''; //first number end result
	b = ''; //second number
	sign = ''; //sign
	finish = false;
	out.textContent = 0;
}

document.querySelector('.ac').onclick = clearALL;

document.querySelector('.buttons').onclick = event => {
	//no button pressed
	if (!event.target.classList.contains('btn')) return;
	//ac button pressed
	if (event.target.classList.contains('ac')) return;

	out.textContent = '';
	//get a button pressed
	const key = event.target.textContent;

	//if the button is pressed 0-9 or .
	if (digit.includes(key)) {
		if (b === '' && sign === '') {
			a += key;
			out.textContent = a;
		} else if (a !== '' && b !== '' && finish) {
			b = key;
			finish = false;
			out.textContent = b;
		} else {
			b += key;
			out.textContent = b;
		}
		console.table(a, b, sign);
		return;
	}

	//if the button is pressed + - / *
	if (action.includes(key)) {
		sign = key;
		out.textContent = sign;
		console.table(a, b, sign);
		return;
	}

	//pressed =
	if (key === '=') {
		if (b === '') b = a;
		switch (sign) {
			case '+':
				a = +a + +b;
				break;
			case '-':
				a = b - b;
				break;
			case 'X':
				a = a * b;
				break;
			case '/':
				if (b === '0') {
					out.textContent = 'ERR';
					a = '';
					b = '';
					sign = '';
					return;
				}
				a = a / b;
				break;
		}
		finish = true;
		out.textContent = a;
		console.table(a, b, sign);
	}
};
