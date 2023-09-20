document.querySelector('.menu').addEventListener('click',()=>{
    document.querySelector('.header').classList.add('active');
})

document.querySelector('.close').addEventListener('click',()=>{
    document.querySelector('.header').classList.remove('active');
})

//to add functionality in button placed in navbar
document.getElementById("signupButton").addEventListener("click", function() {
    window.location.href = "/signup";
});