function openPopup() {
    // Obțineți referința la elementul pop-up
    var popup = document.getElementById("myPopup");
  
    // Obțineți referința la elementul care va afișa rezultatele
    var resultElement = document.getElementById("result");
  
    // Apelați funcția getPersonalizedPlan() pentru a obține rezultatele
    var results = getPersonalizedPlan();
  
    // Adăugați rezultatele în elementul care le va afișa
    resultElement.innerHTML = results;
  
    // Deschideți pop-up-ul
    popup.style.display = "block";
  }
  
  // Adăugați un eveniment pentru butonul de închidere al pop-up-ului
  document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("myPopup").style.display = "none";
  });
  