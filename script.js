function toggleMenu() {
  const menu = document.querySelector(".menu_links");
  const openIcon = document.querySelector(".open-icon");
  const closeIcon = document.querySelector(".close-icon");

  menu.classList.toggle("open");
  openIcon.classList.toggle("d-none");
  closeIcon.classList.toggle("d-none");
}

