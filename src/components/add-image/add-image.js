import "./add-image.css";

import image from "../../assets/img/image.jpg";

export const addImage = () => {
  const img = document.createElement("img");
  img.src = image;
  img.alt =
    'Photo by <a href="https://unsplash.com/@jontyson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jon Tyson</a> on <a href="https://unsplash.com/t/arts-culture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
  img.classList.add("image");
  document.querySelector(".container").append(img);
};
