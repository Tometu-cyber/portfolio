const menuBtn = document.querySelector(".menu-btn");
const wrapper = document.querySelector(".navbar");

menuBtn.addEventListener("click", function () {
  menuBtn.querySelector("i").classList.toggle("fa-xmark");
  wrapper.classList.toggle("open");
});

document.querySelectorAll('.link').forEach(function(link) {
  link.addEventListener('click', function() {
    menuBtn.querySelector('i').classList.remove('fa-xmark');
    wrapper.classList.remove('open');
  });
});

// Récupérer les boîtes par leur ID
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");

// Récupérer les boîtes modales
var py = document.getElementById("py");
var c = document.getElementById("c");
var html = document.getElementById("html");
var thales = document.getElementById("thales");
var routeur = document.getElementById("routeur");
var reseaux = document.getElementById("reseaux");
var bdd = document.getElementById("bdd");

// Récupérer les boutons de fermeture
var spanPy = py.getElementsByClassName("close")[0];
var spanC = c.getElementsByClassName("close")[0];
var spanHtml = html.getElementsByClassName("close")[0];
var spanThales = thales.getElementsByClassName("close")[0];
var spanRouteur = routeur.getElementsByClassName("close")[0];
var spanReseaux = reseaux.getElementsByClassName("close")[0];
var spanBdd = bdd.getElementsByClassName("close")[0];

// Ajouter des gestionnaires d'événements de clic pour chaque boîte
box1.addEventListener("click", function() {
  py.style.display = "block";
});

box2.addEventListener("click", function() {
  c.style.display = "block";
});

box3.addEventListener("click", function() {
  html.style.display = "block";
});

box4.addEventListener("click", function() {
  thales.style.display = "block";
});

box5.addEventListener("click", function() {
  routeur.style.display = "block";
});

box6.addEventListener("click", function() {
  reseaux.style.display = "block";
});

box7.addEventListener("click", function() {
  bdd.style.display = "block";
});

// Ajouter des gestionnaires d'événements de clic pour chaque bouton de fermeture
spanPy.addEventListener("click", function() {
  py.style.display = "none";
});

spanC.addEventListener("click", function() {
  c.style.display = "none";
});

spanHtml.addEventListener("click", function() {
  html.style.display = "none";
});

spanThales.addEventListener("click", function() {
  thales.style.display = "none";
});

spanRouteur.addEventListener("click", function() {
  routeur.style.display = "none";
});

spanReseaux.addEventListener("click", function() {
  reseaux.style.display = "none";
});

spanBdd.addEventListener("click", function() {
  bdd.style.display = "none";
});

// Fermer la boîte modale si l'utilisateur clique en dehors de celle-ci
window.addEventListener("click", function(event) {
  if (event.target == py) {
    py.style.display = "none";
  }

  if (event.target == c) {
    c.style.display = "none";
  }

  if (event.target == html) {
    html.style.display = "none";
  }

  if (event.target == thales) {
    thales.style.display = "none";
  }

  if (event.target == routeur) {
    routeur.style.display = "none";
  }

  if (event.target == reseaux) {
    reseaux.style.display = "none";
  }

  if (event.target == bdd) {
    bdd.style.display = "none";
  }
});