/*const h2 = document.createElement('h2')
h2.innerText = "mera!"
document.body.appendChild(h2)*/

let yesBtn = document.getElementById('btn1');
let noBtn = document.getElementById('btn2');
let cat = document.getElementById('cat-icon');
let btn1IsYes = true;

yesBtn.addEventListener('click', function() {
    deleteQustionState();
    createLoveYouState();
});

noBtn.addEventListener('mouseenter', function() {
    swapBtns();
});



function deleteQustionState() {
    yesBtn.remove();
    noBtn.remove();
}

function createLoveYouState() {
    const h1 = document.getElementById('h1');
    h1.innerText = "I love you too";
    h1.style.color = 'red'; 
    h1.style.fontSize = '350%';
    h1.style.fontFamily = 'Dancing Script, cursive'; 
    h1.style.textAlign = 'center'; 
    h1.style.alignItems = 'center';
    h1.style.marginTop = '12%';
    h1.style.padding = '1%';
    
    const loveIcon = cat; 
    loveIcon.src = "https://cdn-icons-mp4.flaticon.com/512/17357/17357883.mp4";
    loveIcon.style.width = '30vh';
    loveIcon.style.height = 'auto';
}

function swapBtns() {
    if(btn1IsYes) {
        yesBtn.parentElement.insertBefore(noBtn, yesBtn);
        yesBtn.parentElement.insertBefore(cat, yesBtn);
    } else {
        yesBtn.parentElement.insertBefore(yesBtn, noBtn);
        yesBtn.parentElement.insertBefore(cat, noBtn);
    }

    btn1IsYes = !btn1IsYes;
}
