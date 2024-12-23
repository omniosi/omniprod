const menubtn = document.querySelector(".menubtn");
const slideout = document.querySelector(".menu-slideout");

// console.log("menu btn is "+ menu);

menubtn.addEventListener("click", (event) => {
  if (menubtn.classList.contains("open")) {
    menubtn.classList.remove("open");
    slideout.classList.remove("open");
  }else {
    menubtn.classList.add("open");
    slideout.classList.add("open");
  }
});

function shareLink(event) {

  const linkUrl = event.target.href;

  const linkTitle = event.target.textContent; // Or get title from other source

  if (navigator.canShare()) {

    navigator.share({
      url: linkUrl,
      title: linkTitle,
      // Optional: text: "Check out this great link!"
    })

    .then(() => console.log('Link shared successfully'))

    .catch(error => console.error('Error sharing link:', error));

  } else {

    // Fallback behavior, like copying to clipboard

    console.warn('Web Share API not supported');

  }

}

// Get all anchor elements on the page

const links = document.querySelectorAll('a.share');

// Add click event listener to each link

links.forEach(link => link.addEventListener('click', shareLink));
