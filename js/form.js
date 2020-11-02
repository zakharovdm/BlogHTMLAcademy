let feedbackField = document.querySelector(".js-message");
let feedbackButton = document.querySelector(".js-submit");

feedbackField.oninput = function () {
	if (feedbackField.value.length > 200 || feedbackField.value.length < 10) {
		feedbackField.classList.add("warning");
		feedbackButton.disabled = true;
	}else {
		feedbackField.classList.remove("warning");
		feedbackButton.disabled = false;
	}
};

