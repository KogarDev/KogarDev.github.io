/*
  Navbar.js
  Copyright 2026 Kogar (dilloco)
*/
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");

  if (!nav) {
    console.warn("No .nav element");
    return;
  }

  const links = [
    { href: "https://kogardev.github.io/", text: "Home" },
    { href: "https://kogardev.github.io/blog", text: "Blog" }
  ];

  links.forEach(linkData => {
    const a = document.createElement("a");
    a.href = linkData.href;
    a.textContent = linkData.text;
    nav.appendChild(a);
  });
});

document.querySelector("header").innerHTML = `<style>
@import url('https://fonts.googleapis.com/css2?family=Special+Gothic+Condensed+One&display=swap');
</style><h1 style="font-family: 'Special Gothic Condensed One';display: inline-block;" class="logo">kogar</h1><img src="https://dilloco.neocities.org/ba.png" style="height: 40px; display: inline-block; transform: scale(2)"><small style="font-family: 'Special Gothic Condensed One';display: inline-block;" id="sentence">knows this website is horrible</small>`;
