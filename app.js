const resultNumber = document.querySelector(".result-number");
const status1 = document.querySelector(".status");
const bodyText = document.querySelector(".body-text");
let x = 0;
const id = setInterval(() => {
	resultNumber.innerHTML = x;
	x++;
	if (x == 77) {
        status1.style.opacity = "1";
		setTimeout(() => {
            bodyText.style.opacity = "1";
		}, 200);
		clearInterval(id);
		return;
	}
}, 20);
