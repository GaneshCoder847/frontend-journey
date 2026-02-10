document.addEventListener("DOMContentLoaded", function () {

    // ===== DOM REFERENCES =====
    const progressFill = document.getElementById("progressFill");
    const progressText = document.getElementById("progressText");
    const toggleBtn = document.getElementById("toggleBtn");
    const resetBtn = document.getElementById("resetBtn");
    const statusText = document.getElementById("statusText");
    const card = document.getElementById("card");
    const topBtn = document.getElementById("topBtn");
    const siteHeader = document.getElementById("siteHeader");
    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");

    // ===== JOURNEY INTERACTIVE CARD =====
    let isOpen = false;
    let progress = 0;

    if (toggleBtn) {
        toggleBtn.addEventListener("click", function () {
            if (!isOpen) {
                statusText.innerText = "Welcome to my Frontend Journey!";
                toggleBtn.innerText = "Hide Journey";
                card.classList.add("active");
                isOpen = true;
            } else {
                statusText.innerText = "I am learning frontend development. Click below to explore!";
                toggleBtn.innerText = "Explore My Journey";
                card.classList.remove("active");
                isOpen = false;
            }

            // Progress logic
            if (progress < 100) {
                progress += 20;
                progressFill.style.width = progress + "%";
                progressText.innerText = "Progress: " + progress + "%";
            }

            if (progress >= 100) {
                progressText.innerText = "Journey Complete!";
                toggleBtn.innerText = "Journey Completed";
                toggleBtn.disabled = true;
                toggleBtn.style.opacity = "0.6";
                toggleBtn.style.cursor = "not-allowed";
                resetBtn.style.display = "inline-flex";
            }
        });
    }

    // ===== RESET LOGIC =====
    if (resetBtn) {
        resetBtn.addEventListener("click", function () {
            progress = 0;
            isOpen = false;
            progressFill.style.width = "0%";
            progressText.innerText = "Progress: 0%";
            statusText.innerText = "I am learning frontend development. Click below to explore!";
            toggleBtn.innerText = "Explore My Journey";
            toggleBtn.disabled = false;
            toggleBtn.style.opacity = "1";
            toggleBtn.style.cursor = "pointer";
            card.classList.remove("active");
            resetBtn.style.display = "none";
        });
    }

    // ===== SCROLL REVEAL (IntersectionObserver) =====
    const reveals = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        },
        { threshold: 0.15 }
    );

    reveals.forEach(function (el) {
        revealObserver.observe(el);
    });

    // ===== BACK TO TOP BUTTON =====
    if (topBtn) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                topBtn.classList.add("visible");
            } else {
                topBtn.classList.remove("visible");
            }
        });

        topBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // ===== STICKY HEADER SHADOW ON SCROLL =====
    if (siteHeader) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 10) {
                siteHeader.classList.add("scrolled");
            } else {
                siteHeader.classList.remove("scrolled");
            }
        });
    }

    // ===== ACTIVE NAV LINK ON SCROLL =====
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    function updateActiveNav() {
        var scrollPos = window.scrollY + 100;

        sections.forEach(function (section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute("id");

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(function (link) {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === "#" + id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", updateActiveNav);

    // ===== HAMBURGER MOBILE MENU =====
    if (hamburger && navbar) {
        hamburger.addEventListener("click", function () {
            hamburger.classList.toggle("active");
            navbar.classList.toggle("open");
        });

        // Close menu on nav link click
        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                hamburger.classList.remove("active");
                navbar.classList.remove("open");
            });
        });
    }

    // ===== SMOOTH SCROLL FOR NAV LINKS =====
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            var targetId = this.getAttribute("href");
            if (targetId && targetId.startsWith("#")) {
                var target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });

    // ===== CONTACT FORM HANDLING =====
    var contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            var submitBtn = contactForm.querySelector("button[type='submit']");
            var originalText = submitBtn.innerText;
            submitBtn.innerText = "Message Sent!";
            submitBtn.style.background = "#22c55e";
            submitBtn.style.borderColor = "#22c55e";
            submitBtn.disabled = true;

            setTimeout(function () {
                submitBtn.innerText = originalText;
                submitBtn.style.background = "";
                submitBtn.style.borderColor = "";
                submitBtn.disabled = false;
                contactForm.reset();
            }, 2500);
        });
    }

});
