function showImg(index) {
    for (let i = 0; i < caroImgs.length; ++i) {
        if (caroImgs[i].classList.contains('show-img')) {
            caroImgs[i].classList.remove('show-img');
        };
    };
    caroImgs[index].classList.add('show-img');
    //any time image is manually changed, timer restarts
    timerReset();
};

//left arrow calls this function
function subtractIndex() {
    if (index > 0) {
        --index;
    } else {
        index = caroImgs.length - 1;
    };
    showImg(index);
};

//right arrow calls this function
function addIndex() {
    if (index != (caroImgs.length-1)) {
        ++index;
    } else {
        index = 0;
    }
    showImg(index);
}

//function to control timer, 2000 = 2secs, 5000 = 5secs, etc
function timerReset() {
    clearInterval(myTimer);
    console.log('timer reset');
    myTimer = setInterval(addIndex, 3000);
};


//index is current image shown
let index = 0;
//timer to control auto switching
let myTimer;

//select all imgs into caroImgs array
const caroImgs = document.querySelectorAll('.caroimg');
showImg(index);
//adding funtionality to left and right arrow buttons
const leftArrow = document.querySelector('#l-arrow');
const rightArrow = document.querySelector('#r-arrow');

leftArrow.addEventListener('click', () => {
    subtractIndex();
});

rightArrow.addEventListener('click', () => {
    addIndex();
})