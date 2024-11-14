const tabs = document.querySelectorAll(".tab");
const radios = document.querySelectorAll('input[name="step"]');

radios.forEach((radio, index) => {
  radio.addEventListener("change", () => {
    tabs.forEach((tab, tabIndex) => {
      if (tabIndex === index) {
        tab.style.zIndex = "10";
      } else {
        tab.style.zIndex = "1";
      }
    });
  });
});

let userName = document.getElementById("username");
let email = document.getElementById("email");
let next1 = document.getElementById("btn-1");
let next2 = document.getElementById("btn-2");

let gareDepart = document.getElementById("gareDepart");
let gareArrive = document.getElementById("gareArrive");
let dateDepart = document.getElementById("dateDepart");
let dateArrive = document.getElementById("dateArrivee");



function updateGareArrive() {
  const gareDepart = document.getElementById("gareDepart").value;
  const gareArrive = document.getElementById("gareArrive");

  for (let option of gareArrive.options) {
    option.disabled = option.value === gareDepart;
  }
}

function validateDates() {
  const dateDepart = document.getElementById("dateDepart");
  const dateArrivee = document.getElementById("dateArrivee");
  
  const today = new Date().toISOString().split("T")[0]; 
  dateDepart.min = today; 

  dateArrivee.min = dateDepart.value || ""; 
}

document.addEventListener("DOMContentLoaded", () => {
  validateDates();
  document
    .getElementById("dateDepart")
    .addEventListener("input", validateDates);
});

document.querySelectorAll(".selectable-item").forEach((item) => {
  item.addEventListener("click", function () {
    document
      .querySelectorAll(".selectable-item")
      .forEach((el) => el.classList.remove("selected"));

    // ajoute la classe "selected" a l'element clique
    this.classList.add("selected");

    // récupère les valeurs dans la div cliquée
    const values = Array.from(this.querySelectorAll("span")).map(
      (span) => span.textContent
    );
    values.push("Lufthansa");
    console.log("vol:", values);
  });
});

// Variables pour adultes
let btnIncremente = document.getElementById("btnIncrAdulte");
let span1 = document.getElementById("nbrAdulte");
let btnDecrement = document.getElementById("btnDecrAdulte");
let prixAdulte = document.getElementById("prixAdulte");
let i = 0;

// Variables pour enfants
let btnIncrEnf = document.getElementById("btnIncrEnfant");
let span2 = document.getElementById("nbrEnfant");
let btnDecrEnf = document.getElementById("btnDecrEnfant");
let prixEnfant = document.getElementById("prixEnfant");
let j = 0;

// Variable pour le prix total
let prixTotal = document.getElementById("prixTotal");

// Fonction pour mettre à jour le prix total
function updatePrixTotal() {
  const prixAdu = 500 * i;
  const prixEnf = 100 * j;
  const total = prixAdu + prixEnf;
  prixTotal.textContent = total;
  return total;
}

// Écouteurs pour adultes
btnIncremente.addEventListener("click", function () {
  i += 1;
  span1.innerHTML = i;
  prixAdulte.textContent = 500 * i;
  updatePrixTotal();
});

btnDecrement.addEventListener("click", function () {
  if (i > 0) {
    i -= 1;
    span1.innerHTML = i;
    prixAdulte.textContent = 500 * i;
    updatePrixTotal();
  }
});

// Écouteurs pour enfants
btnIncrEnf.addEventListener("click", function () {
  j += 1;
  span2.innerHTML = j;
  prixEnfant.textContent = 100 * j;
  updatePrixTotal();
});

btnDecrEnf.addEventListener("click", function () {
  if (j > 0) {
    j -= 1;
    span2.innerHTML = j;
    prixEnfant.textContent = 100 * j;
    updatePrixTotal();
  }
});

const toggleDivs = document.querySelectorAll(".toggle-button");

toggleDivs.forEach((div) => {
  div.addEventListener("click", function () {
    div.classList.toggle("checked");
  });
});

// affichage tickets
let tkNomPrenom = document.getElementById("tknomPrenom");
let tkEmail = document.getElementById("tkemail");
let tkPrix = document.getElementById("tkprix");
let dateReserv = document.getElementById("dateReservation");
let tkgareDepart=document.getElementById("tkgareDepart")
let tkgareArrive=document.getElementById("tkgareArrive")
let tknbrPlaces=document.getElementById("tknbrPlaces")

function afficherTicket() {
  tkNomPrenom.textContent = userName.value;
  tkEmail.textContent = email.value;
  tkgareDepart.textContent=gareDepart.value
  tkgareArrive.textContent=gareArrive.value
  tknbrPlaces.textContent=i+j;


  let totalPrix = updatePrixTotal();
  tkPrix.textContent = totalPrix;  

  const dateActuel=new Date().toISOString().split("T")[0]
  dateReserv.textContent = dateActuel;

  // alert("Prix total: " + tkPrix.textContent);  
}

let next4=document.getElementById("lstNext")
next4.addEventListener("click", function () {
  afficherTicket();
});
