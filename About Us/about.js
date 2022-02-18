let first = document.getElementById('first');
let third = document.getElementById('third')
let fifth = document.getElementById('fifth')
window.addEventListener('scroll', ()=>{
    let scrollVal = window.pageYOffset;
    scrollVal *= 0.5;
    first.style.backgroundPositionY = "-"+ (scrollVal+139.25) +"px";
    third.style.backgroundPositionY = "-"+ (scrollVal-270.25) +"px";
    fifth.style.backgroundPositionY = "-"+ (scrollVal-270.25) +"px";
    
})