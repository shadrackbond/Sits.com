document.addEventListener("DOMContentLoaded", function () {
    console.log("Sitter platform loaded!");
});


function findSitter() {
    alert("Redirecting to available sitters...");
}


function becomeSitter() {
    alert("Redirecting to sitter sign-up...");
}


document.getElementById("locationFilter").addEventListener("change", function () {
    let selectedLocation = this.value;
    let sitters = document.querySelectorAll(".sitter");

    sitters.forEach(sitter => {
        if (selectedLocation === "all" || sitter.dataset.location === selectedLocation) {
            sitter.style.display = "block";
        } else {
            sitter.style.display = "none";
        }
    });
});


document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;

    if (name.length < 3) {
        alert("Name must be at least 3 characters.");
        return;
    }
    
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    alert("Sign-up successful!");
});


document.querySelectorAll(".create-plan").forEach(button => {
    button.addEventListener("click", function () {
        alert("Redirecting to plan customization...");
    });
});


function subscribeOffer() {
    alert("You've subscribed to the 10% discount offer!");
}

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    if (message.length < 5) {
        alert("Message must be at least 5 characters long.");
        return;
    }

    alert("Message sent successfully!");
});
