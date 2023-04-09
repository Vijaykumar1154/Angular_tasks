var images = ["image2.jpg","image3.jpg","image1.jpg"];
        var currentIndex = 0;
        var slideshow = document.getElementById("slideshow");
        setInterval(function() {
            slideshow.src = images[currentIndex];
            currentIndex = (currentIndex + 1) % images.length;
        }, 2000);