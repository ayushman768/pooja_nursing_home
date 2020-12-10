function my_btn() {
    window.open("contact_us.html");
}



var y = document.getElementById('my_nav');

var sticky = y.offsetTop;

var nav = function mynav() {

    if (window.pageYOffset > sticky) {
        y.classList.add('sticky');


    } else {
        y.classList.remove('sticky');

    }

};

function my_menu(){
	var nav = document.querySelector('.navigation');
	if(nav.style.display==="none"){
		nav.style.display = "block";
	}else{
		nav.style.display = "none";
	}
}