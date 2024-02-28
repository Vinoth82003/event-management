let from = document.querySelector(".signup");
let signupBtn = document.querySelector(".signup-btn");
let signinBtn = document.querySelector(".signin-btn");

signinBtn.addEventListener("click", ()=>{
    from.classList.add("active");
})

signupBtn.addEventListener("click", ()=>{
    from.classList.remove("active");
})