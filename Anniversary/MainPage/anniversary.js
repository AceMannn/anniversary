// Object containing the content data for each month
const contentData = {
    1: {
        title: "First Month",
        subtitle: "April 18, 2024",
        video: "../videos/First.mp4",
        gif: "../GIFs/First.gif",
        text: "You can count on me for everything, my love. No matter the challenge or problem, I will always be here, ready to support and love you. " +
              "Our friendship, along with my love for you, my love will always be strong. Just like the song, " +
              "“You can count on me like one, two, three, I'll be there.”😚"
    },
    2: {
        title: "Second Month",
        subtitle: "May 18, 2024",
        video: "../videos/Second.mp4",
        gif: "../GIFs/Second.gif",
        text: "I thought of you when I heard this song, my love. You don’t need to change anything because you are already so beautiful just the way you are. " +
              "It doesn’t matter what you wear or what you look like, the most important thing is that you are you, and that is the most amazing part of all, you're amazing. " +
              "“Just the way you are.”😚"
    },
    3: {
        title: "Third Month",
        subtitle: "June 18, 2024",
        video: "../videos/Third.mp4",
        gif: "../GIFs/Third.gif",
        text: "I thought of you when I heard this song, love. No matter what we go through, when I look at you, it feels like I’m staring at the whole universe. " +
              "You are my peace, my wonder, and everything I ever dreamed of. The lyrics say, “Let me fly with you… will you be forever with me?” " +
              "and that’s exactly how I feel with you—like I never want this love to end.😚"
    },
    4: {
        title: "Fourth Month",
        subtitle: "July 18, 2024",
        video: "../videos/Fourth.mp4",
        gif: "../GIFs/Fourth.gif",
        text: "The moment I met you, everything changed. It felt like the world stopped for a second, like magic. Since then, I haven’t stopped thinking about how lucky I am. " +
              "“This night is sparkling, don’t you let it go.” I’m holding on to us, doing my best every day, because I don’t want to lose you… " +
              "“Please don’t be in love with someone else.” You’re the one I was enchanted to meet.😚"
    },
    5: {
        title: "Fifth Month",
        subtitle: "August 18, 2024",
        video: "../videos/Fifth.mp4",
        gif: "../GIFs/Fifth.gif",
        text: "I don’t wanna be yours just like that first day, we've gone way past that. I wanna be your warmth when the world gets cold, your calm when things get messy. " +
              "I’ll be the little things, like your coffee pot in the morning or your heater on a rainy night. I just wanna be yours, every day, in all the ways that matter.😚"
    },
    6: {
        title: "Sixth Month",
        subtitle: "September 18, 2024",
        video: "../videos/Sixth.mp4",
        gif: "../GIFs/Sixth.gif",
        text: "No matter what comes our way, I want to be the one who stands by your side. In your happiest moments and your hardest times, " +
              "I'll be there for you, your shoulder to lean on, your biggest supporter. I love you more than words can say, and I’ll always be the greatest fan of your life.😚"
    },
    7: {
        title: "Seventh Month",
        subtitle: "October 18, 2024",
        video: "../videos/Seventh.mp4",
        gif: "../GIFs/Seventh.gif",
        text: "From the moment we met, I knew it was you. Every thought, every dream, it's you. Your eyes, your touch, they’re all I long for. It may seem crazy, " +
              "but I think they call this love. I never want to be apart from you. With every smile, I fall deeper, and I wouldn’t have it any other way.😚"
    },
    8: {
        title: "Eighth Month",
        subtitle: "November 18, 2024",
        video: "../videos/Eighth.mp4",
        gif: "../GIFs/Eighth.gif",
        text: "No matter what life throws at us, I know we can face it, just the two of us. We’ve already built something special, and every moment with you feels like a dream. " +
              "Whether it’s through sunny days or rainy nights, I just want to spend it all with you, making memories and building our future. Together, we can make anything happen.😚"
    },
    9: {
        title: "Ninth Month",
        subtitle: "December 18, 2024",
        video: "../videos/Ninth.mp4",
        gif: "../GIFs/Ninth.gif",
        text: "From the moment we met, I knew you were the one. I tried to keep my cool, but you’re so amazing that I couldn’t help falling for you. " +
              "I won’t hesitate anymore; I’m yours, and that’s all that matters to me. No more waiting, no more doubts, just you and me, " + 
              "building a beautiful love. Every moment with you is my favorite, and I can’t wait for all the ones yet to come, my love.😚"
    },
    10: {
        title: "Tenth Month",
        subtitle: "January 18, 2025",
        video: "../videos/Tenth.mp4",
        gif: "../GIFs/Tenth.gif",
        text: "From the moment I saw you, I knew you were something special, and now, every day with you feels like a beautiful adventure. " +
              "Whether it's causing a little trouble together, having secret moments, or just being ourselves, I know I’m perfect for you in every way. " +
              "You have me through all the ups and downs, and I wouldn’t change a thing. " +
              "Let’s keep making memories, exploring the world together, and living in the moment, is because with you, everything feels just right.😚"
    },
    11: {
        title: "Eleventh Month",
        subtitle: "February 18, 2025",
        video: "../videos/Eleventh.mp4",
        gif: "../GIFs/Eleventh.gif",
        text: "I could tell there was something special between us the moment we met. I came to understand that we are made to last through every obstacle, every laugh, and every quiet moment. " +
              "Nothing can ever stand in our way, no matter what. Even the gods above couldn't keep us apart." +
              "All that matters, my darling, is that you are mine and I am yours. All that matters to me is that we are stronger together than everything the world may hurl at us.😚"
    },
    12: {
        title: "Twelfth Month",
        subtitle: "March 18, 2025",
        video: "../videos/Twelfth.mp4",
        gif: "../GIFs/Twelfth.gif",
        text: "I can't even begin to express how much you mean to me as we get older and watch the sunrise together. " +
              "Every time we've spent together has been a gift, and I know that everything will work out as long as you're here. " +
              "I'll always be happy as long as I'm with you, regardless of how long it takes or where life leads us. " +
              "Every moment I spend with you seems like home, and you are my favourite memory and moment, my love.😚" 

    }
};

// Function to load content for a specific month
function loadContent(month) {
    if (month === 13) {
        window.location.href = "../SecondPage/flower.html";
        return;
    }

    // Get the content for the given month, default to empty if not found
    const data = contentData[month] || {
        title: "No Title",
        subtitle: "",
        video: "",
        gif: "",
        text: "No content yet."
    };

    // Update the page with the loaded content
    document.getElementById("month-title").innerText = data.title;
    document.getElementById("month-subtitle").innerText = data.subtitle;
    document.getElementById("video-container").innerHTML = `
        <video class="month-video" autoplay loop playsinline controls>
            <source src="${data.video}" type="video/mp4">
            Your browser does not support the video tag.
        </video>`;
    document.getElementById("gif-container").innerHTML = `<img src="${data.gif}" alt="GIF" class="month-gif">`;
    document.getElementById("text-container").innerText = data.text;
}

// Function to toggle the mobile menu (show/hide)
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("show");
}

// Function to close the mobile menu
function closeMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.remove("show");
}

// On window load, set up the initial content and event listeners
window.onload = function () {
    loadContent(1);

    // Add event listeners to all buttons inside the mobile menu
    const buttons = document.querySelectorAll(".mobile-hidden button");
    buttons.forEach(button => {
        button.addEventListener("click", closeMenu);
    });
};

