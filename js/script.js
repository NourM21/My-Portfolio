window.addEventListener("load", () => {
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    /* Page Loader */
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout (() => {
        document.querySelector(".page-loader").style.display = "none";
    }, 600);
});

// Toggle Navbar

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});

function hideSection () {
    document.querySelector("section.active").classList.toggle("fade-out");
};

function toggleNavbar () {
    document.querySelector(".header").classList.toggle("active");
};

/* Active Section */

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("link-item") && e.target.hash !== "") {
        // activate the overlay to prevent multiple clicks
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        if (e.target.classList.contains("nav-item")) {
            toggleNavbar();
        }else {
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        }, 500);
    }
});

/* About Tabs */

const tabsContainer = document.querySelector(".about-tabs");
let aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    };
});

/* Start Portfolio Item Popup */

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-project-btn")) {
        toggelPortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);
    };
});

function toggelPortfolioPopup () {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
};

document.querySelector(".pp-close").addEventListener("click", toggelPortfolioPopup);

// Hide popup when clicking outside of it

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("pp-inner")) {
        toggelPortfolioPopup();
    };
});

function portfolioItemDetails (portfolioitem) {
    document.querySelector(".pp-thumbnail img").src = portfolioitem.querySelector(".portfoilio-item-thumbnail img").src;
    document.querySelector(".pp-header h3").innerHTML = portfolioitem.querySelector(".portfolio-item-title").innerHTML;
    document.querySelector(".pp-body").innerHTML = portfolioitem.querySelector(".portfolio-item-details").innerHTML;
};

// Send Message

const btn = document.querySelector(".btn-click");
btn.addEventListener("click", sendEmail);
function sendEmail() {
    const name = document.querySelector(".name"), 
    email = document.querySelector(".email"),
	subject = document.querySelector(".subject"),
	msg = document.querySelector(".msg");

    Email.send({
        SecureToken : "616d3254-508f-4f6e-9d42-fd7303e9e0f0",
        To : 'itefouryear@gmail.com',
        From : "nourmando9322@gmail.com",
        Subject : subject.value,
        Body : "My name is " + name.value + " - My email is " + email.value + " - My message is "
        + msg.value
    }).then(
        message => alert("Message sent successfully")
    );
};
