const banners = document.querySelector('nav');

function changeColor (){
	banners.style.backgroundColor = "#5EE4ED";
	banners.style.color = "#000000";
}

function changeBack () {
	banners.style.backgroundColor = "#2C6CA3";
	banners.style.color = "#FFFFFF";
}

banners.onmouseover = changeColor;
banners.onmouseout = changeBack;