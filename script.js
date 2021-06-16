const section2 = document.querySelector("#section-2");

// document.querySelectorAll(".link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();

//     const id = this.getAttribute("href");
//     console.log(id);
//     console.log("link");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

document.querySelector(".nav-bar").addEventListener("click", function (e) {
  e.preventDefault();
  //   matching strategy
  if (e.target.classList.contains("link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
