
/*>>> It first selects all the images with the class lazy. 

>>>It then checks if the IntersectionObserver API is supported. If it is, it creates an 
observer that will observe each lazy image. When an image enters the viewport 
(i.e., intersects with the viewport), it replaces the data-src and data-srcset attributes 
with src and srcset, respectively, effectively loading the image.

>>>If the browser does not support IntersectionObserver, it just loads all images immediately*/
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        var lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.srcset = lazyImage.dataset.srcset;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // For browsers that don't support IntersectionObserver
        // You can load all images immediately
        lazyImages.forEach(function(lazyImage) {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");
        });
    }
});
/* DISCOVER - LAST VISIT */
document.addEventListener("DOMContentLoaded", function() {
    const now = new Date();
    const lastVisit = localStorage.getItem('lastVisit');
    const messageElement = document.getElementById('lastVisitP');

    if (!lastVisit) {
      messageElement.textContent = "Welcome! Let us know if you have any questions.";
    } else {
      const daysBetween = Math.floor((now - new Date(lastVisit)) / (1000 * 60 * 60 * 24));
      if (daysBetween === 0) {
        messageElement.textContent = "Back so soon! Awesome!";
      } else {
        const message = daysBetween === 1 ? `You last visited 1 day ago.` : `You last visited ${daysBetween} days ago.`;
        messageElement.textContent = message;
      }
    }

    localStorage.setItem('lastVisit', now);
  });