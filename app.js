let sideLi = document.querySelectorAll('.sideLi');
let categories = document.querySelector(' option');
let categories_icon= document.querySelectorAll('.categories_icon');


sideLi.forEach(crr=>{
    crr.addEventListener('click',()=>{
        crr.classList.toggle('active')
    })
})


categories.addEventListener('change',()=>{
if(categories.value == 'hall'){
    categories_icon[0].classList.remove('active')
}
if(categories.value == 'restaurant'){
    categories_icon[1].classList.add('active')
}
})

console.log(categories.value);