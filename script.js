// Dark / Light Mode Toggle

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme","dark");
    }else{
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme","light");
    }

});

// Load Saved Theme

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";

}

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }

    });

});

// Fade-in Animation

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

cards.forEach(card=>{

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s";

    observer.observe(card);

});

// Newsletter Button

const subscribeBtn = document.querySelector(".newsletter button");

if(subscribeBtn){

subscribeBtn.addEventListener("click",()=>{

const email = document.querySelector(".newsletter input").value;

if(email === ""){

alert("Please enter your email.");

}else{

alert("Thank you for subscribing!");

}

});

}