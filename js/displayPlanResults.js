function displayPlanResults() {
    const resultsContainer = document.getElementById("plan-results");
  
    // Apelam functia getPersonalizedPlan
    const results = getPersonalizedPlan();
  
    // Setam textul containerului cu rezultate
    resultsContainer.innerHTML = `Planul personalizat este: 
    - Calorii zilnice: ${results.dailyCalories}
    - Proteine zilnice: ${results.protein}g
    - Grăsimi zilnice: ${results.fat}g
    - Carbohidrați zilnici: ${results.carbs}g`;
  }
  