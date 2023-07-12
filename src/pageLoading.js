document.addEventListener("DOMContentLoaded", () => {
  const images = Array.from(document.images);
  const background = new Image();
  background.src = "../img/background.jpg";
  images.push(background);
  Promise.all(
    images.map((img) => {
      if (img.complete) return Promise.resolve(true);
      return new Promise((resolve) => {
        img.addEventListener("load", () => resolve(true));
        img.addEventListener("error", () => resolve(false));
      });
    })
  ).then(() => {
    setTimeout(() => {
      document.querySelector(".spinner-wrapper").remove();
      document.querySelector(".container").style.opacity = "1";
    }, 200);
  });
});
