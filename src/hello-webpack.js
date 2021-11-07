export const helloWebpack = (pageName) => {
  const title = document.createElement("h1");
  title.textContent = "Hello From Webpack. This is " + pageName + " page";
  title.classList.add("container__title");
  document.querySelector(".container").append(title);
};
