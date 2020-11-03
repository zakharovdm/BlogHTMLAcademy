let buttonLike = document.querySelector(".js-like");
let amountLike = document.querySelector(".js-like-counter");

buttonLike.onclick = function () {
	if (buttonLike.classList.contains("added")) {
		amountLike.textContent--;
	}else {
		amountLike.textContent++;
	}
	buttonLike.classList.toggle("added");
};
