var slideIndex = 1;
setInterval(function(){
    document.getElementById('radio' + slideIndex).checked = true;
    slideIndex++;
    if (slideIndex > 3) {
        slideIndex = 1
    }
}, 5000);