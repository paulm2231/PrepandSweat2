function createMealPlan() {
    var button = document.querySelector('button');
    button.classList.add('loading');
  
    // codul pentru crearea planului de masă
    // poate fi adăugat aici
  
    setTimeout(function() {
      button.classList.remove('loading');
    }, 3000);
  }
  