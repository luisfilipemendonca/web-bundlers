export const helloWebpack = () => {
  const title = document.createElement("h1");
  title.textContent = "Hello From Webpack";
  title.classList.add("container__title");
  document.querySelector(".container").append(title);
};
