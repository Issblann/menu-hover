const list = document.querySelectorAll(".list");
const navigation = document.querySelector(".navigation");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

list.forEach((item) => item.addEventListener("click", activeLink));
