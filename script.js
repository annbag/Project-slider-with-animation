let activeElement = 0;
let timeChange = 6000;

const colorImgHtml = document.querySelector('.color');
const greyImgHtml = document.querySelector('.grey');
const h1Html = document.querySelector('.member h1');
const h2Html = document.querySelector('.member h2');

const colorImages = ['img/s1.png', 'img/s2.png', 'img/s3.png'];
const greyImages = ['img/s1a.png', 'img/s2a.png', 'img/s3a.png'];
const names = ['Anna Nowak', 'Jan Kowalski', 'Adam Sosna'];
const professions = ['programista JS', 'UX i UI designer', 'Front-End Developer'];

function changeElement() {
	activeElement++;
	if (activeElement == colorImages.length) {
		activeElement = 0;
	}
	colorImgHtml.src = colorImages[activeElement];
	greyImgHtml.src = greyImages[activeElement];
	h1Html.textContent = names[activeElement];
	h2Html.textContent = professions[activeElement];
}
setInterval(changeElement, timeChange)