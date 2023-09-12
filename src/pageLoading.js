document.addEventListener("DOMContentLoaded", () => {
  const images = Array.from(document.images);
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
