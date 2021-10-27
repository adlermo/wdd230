let imagesToLoad = document.querySelectorAll("[data-src]");

const loadImages = (img) => {
  const src = img.getAttribute("data-src");

  img.setAttribute("src", src);
  img.removeAttribute("data-src");
};

const observer = new IntersectionObserver(
  (items, observer) => {
    items.forEach((item) => {
      if (!item.isIntersecting) return;
      else {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  },
  {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px",
  }
);

imagesToLoad.forEach((img) => {
  observer.observe(img);
});
