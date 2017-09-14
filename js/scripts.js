//menu

var link = document.querySelectorAll('.main-nav li');
var contentClass = document.querySelector('.main-nav-submenu')



var enterShow = function() {
    contentClass.style.visibility="visible";
    console.log("enter");
}

var leaveShow = function() {
    contentClass.style.visibility="hidden";
    console.log("leave");
}

link[0].addEventListener('mouseenter', enterShow);
link[0].addEventListener('mouseleave', leaveShow);


//blocks


var box = document.querySelectorAll('.picture-cnt');



for(var i=0; i<box.length; i++) {
    
    box[i].addEventListener('mouseenter', function() {
        this.children[1].style.visibility="hidden";
        console.log("hid");
    });
    box[i].addEventListener('mouseleave', function() {
        this.children[1].style.visibility="visible";
        console.log("show");
    });
}






//slider

var nextButton = document.querySelector('#nextPicture');
var prevButton = document.querySelector('#prevPicture');

var imageIndex = document.querySelector('.slide-image ul').children;
var counter = 0;

console.log(nextButton, prevButton, imageIndex);

imageIndex[0].classList.add('visible');

nextButton.addEventListener('click', function() {
    console.log('click');
    imageIndex[counter].classList.remove('visible');
    counter++;
    if(counter > imageIndex.length-1){
        counter = 0;
    }
    imageIndex[counter].classList.add('visible');
    console.log(counter);
})

prevButton.addEventListener('click', function() {
    console.log('click');

    imageIndex[counter].classList.remove('visible');
    counter--;
    if(counter < 0){
        var lastIndex = imageIndex.length -1;
        counter = lastIndex;
    }
    imageIndex[counter].classList.add('visible');
})
