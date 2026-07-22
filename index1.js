const form = document.getElementById("reservationForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const time = document.getElementById("time").value;
    const date = document.getElementById("date").value;
    const guests = document.getElementById("guests").value;

    if(name === "" || email === "" || phone === "" || time === "" || date === "" || guests === ""){
        alert("Please fill in all fields.");
    }else{
        alert("Table reserved successfully!");
        form.reset();
    }

});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


emailjs.init("czTbs9co8SHs3rH96");


document.getElementById("reservationForm")
.addEventListener("submit", function(event){

event.preventDefault();


emailjs.sendForm(
"service_to3eqc8",
"template_zlphqsu",
this

).then(function(){

alert("Thank you! Your table has been reserved.");

}).catch(function(error){

alert("Something went wrong.");

console.log(error);

});

});
