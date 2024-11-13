const tabs = document.querySelectorAll('.tab');
const radios = document.querySelectorAll('input[name="step"]');

radios.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        tabs.forEach((tab, tabIndex) => {
            if (tabIndex === index) {
                tab.style.zIndex = '10';
            } else {
                tab.style.zIndex = '1';
            }
        });
    });
});


let userName = document.getElementById('username')
let email = document.getElementById('email')
let next1 = document.getElementById('btn-1');
let next2=document.getElementById('btn-2')



let gareDepart=document.getElementById("gareDepart")
let gareArrive=document.getElementById("gareArrive")
let dateDepart=document.getElementById("dateDepart")
let dateArrive=document.getElementById("dateArrivee")


next2.addEventListener("click", function () {
    console.log("userName: " + userName.value)
    console.log("email: " + email.value)
    console.log("Gare depart: "+gareDepart.value)
    console.log("Gare d'arrive: "+gareArrive.value)
    console.log("Date debart: "+dateDepart.value)
    console.log("Date Arrive: "+dateArrive.value)


})

function updateGareArrive() {
    const gareDepart = document.getElementById('gareDepart').value;
    const gareArrive = document.getElementById('gareArrive');

    for (let option of gareArrive.options) {
      option.disabled = (option.value === gareDepart);
    }
  }


  function validateDates() {
    const dateDepart = document.getElementById('dateDepart');
    const dateArrivee = document.getElementById('dateArrivee');
    const today = new Date().toISOString().split('T')[0]; // Date actuelle au format YYYY-MM-DD
  
    dateDepart.min = today; // La date de départ doit être aujourd'hui ou plus tard
  
    // Mettre à jour la date minimum d'arrivée selon la date de départ choisie
    dateArrivee.min = dateDepart.value || ""; // Si aucune date de départ, pas de restriction
  }
  
  // Initialiser la validation et écouter les changements de date
  document.addEventListener('DOMContentLoaded', () => {
    validateDates();
    document.getElementById('dateDepart').addEventListener('input', validateDates);
  });

  
  // les resultats de recherche,, selectionner le vol
  document.querySelectorAll('.selectable-item').forEach(item => {
    item.addEventListener('click', function () {
      // Supprime la classe "selected" de tous les éléments
      document.querySelectorAll('.selectable-item').forEach(el => el.classList.remove('selected'));
  
      // Ajoute la classe "selected" a l'element cliqué
      this.classList.add('selected');
  
      // Récupère les valeurs dans la div cliquée
      const values = Array.from(this.querySelectorAll('span')).map(span => span.textContent);
      values.push("Lufthansa")
  
      // Affiche les valeurs (ou les utilisez selon votre besoin)
      console.log('vol:', values);
    });
  });
  
//nobre des adulte et le prix de tickets
  let btnIncremente=document.getElementById('btnIncrAdulte')
  let span1=document.getElementById('nbrAdulte')
  let btnDecrement=document.getElementById("btnDecrAdulte")
  let i=0; 
  let prixAdulte=document.getElementById('prixAdulte')

  btnIncremente.addEventListener("click",function(){
    i+=1
    span1.innerHTML=i
    prixAdulte.textContent=(1000*i)
  })

  btnDecrement.addEventListener("click",function(){
    if(i>0){
      i-=1
    span1.innerHTML=i

    var prixAdu=(1000*i)
    prixAdulte.textContent=prixAdu
    }
  })
  

//nobre des enfants et le prix de tickets
let btnIncrEnf=document.getElementById('btnIncrEnfant')
let span2=document.getElementById('nbrEnfant')
let btnDecrEnf=document.getElementById("btnDecrEnfant")
let j=0; 
let prixEnfant=document.getElementById('prixEnfant')

btnIncrEnf.addEventListener("click",function(){
  j+=1
  span2.innerHTML=j

  var prixEnf=(500*j)
  prixEnfant.textContent=prixEnf
})

btnDecrEnf.addEventListener("click",function(){
  if(j>0){
    j-=1
  span2.innerHTML=j
  prixEnfant.textContent=(500*j)
  }
})

let prixTotal=document.getElementById('prixTotal')

prixTotal.innerHTML=prixAdu+prixEnf






  


