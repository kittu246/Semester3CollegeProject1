
//start of form validation

const form = document.getElementById("contactForm");
console.log(form);

form.addEventListener("submit", function(e){
    e.preventDefault();

    let isValid = true;

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let number = document.getElementById("number");
    let message = document.getElementById("message");

    if(name.value.trim()===""){
        alert("Name is required");
        isValid =false;
    }

    if(!validateEmail(email.value)){
        alert("Enter valid email");
        isValid =false;
    }

    if(/^[0-9]{10}$/.test(number.value)){
        alert("Enter valid 10 digit number");
        isValid =false;
    }

    if(message.value.trim().length<10){
         alert("Message must be atleast 10 characters");
        isValid =false;
    }

    if(isValid){
        alert("Form Submitted Successfully");
        form.reset();
    }

    
})



function validateEmail(email){

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
   

}

// end of form validation


// dark Mode application

const toggleButton = document.getElementById("toggleButton");
const eventLeftContainer = document.querySelector(".leftEvent");
const eventRightContainer = document.querySelector("#rightEvent");


toggleButton.addEventListener("click",() =>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        toggleButton.innerText ="☀️ Light Mode";
        eventLeftContainer.style.backgroundColor ="black";
        eventRightContainer.style.backgroundColor ="black";
        
    }
    else{
        toggleButton.innerText ="🌙 Dark Mode";  
        eventLeftContainer.style.backgroundColor ="white";
        eventRightContainer.style.backgroundColor ="white";
    }

})


// end of dark Mode application

//hover effect

const hoverButtons = document.querySelectorAll(".navButton");
console.log(hoverButtons);

hoverButtons.forEach((button)=>{

    button.style.transition = " all .3s ease";
    button.addEventListener("mouseover",()=>{

        button.style.background ="#007bff";
        button.style.color ="white";
        button.style.transform="scale(1.1)";
    })

    button.addEventListener("mouseout",()=>{

        button.style.background ="#f8f9fa";
        button.style.color ="#007bff";
        button.style.transform="scale(1)";
    })

})

// end of hover effect

// filter 

const eventcards = document.querySelectorAll(".event-card");
const filterSelect= document.getElementById("filterEvent");
console.log("eventcards",eventcards);
console.log("filterSelect",filterSelect);


filterSelect.addEventListener("change",function(){
    const selectedValue = this.value;
    console.log("selectedValue",selectedValue)
    eventcards.forEach((card)=>{

        console.log("card",card);

        const cardLevel = card.getAttribute("data-level");
        console.log("cardLevel",cardLevel);
        if(selectedValue === "all" || selectedValue === cardLevel ){
            card.style.display ="block";
        }
        else{
           card.style.display ="none"; 
        }


    })
    
})

// end of filter





