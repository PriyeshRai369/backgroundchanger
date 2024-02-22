let body = document.querySelector('.container')
let container = document.querySelector('.button-container')
let btn = document.querySelectorAll('.btn')

btn.forEach((button)=>{
    button.addEventListener('mouseover',function(e){
        container.style.background = e.target.id;
        button.style.border = '2px solid white'
    })
    button.addEventListener('mouseout',function(e){
        container.style.background = 'white';
        button.style.border = 'none'
    })
    button.addEventListener('click',function(e){
        body.style.backgroundColor = e.target.id;
    })
})