function getPersonalizedPlan() {
    // valorii din formular
    const age = parseInt(document.getElementById("age").value);
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const activityLevel = parseFloat(document.getElementById("activityLevel").value);
    const goal = document.getElementById("goal").value;
  
    // calorii
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    const tdee = bmr * activityLevel;
    let dailyCalories;
    if (goal === "lose") {
      dailyCalories = tdee - 500;
    } else if (goal === "gain") {
      dailyCalories = tdee + 500;
    } else {
      dailyCalories = tdee;
    }
  
    // macro
    const protein = Math.round(weight * 2.2);
    const fat = Math.round((dailyCalories * 0.25) / 9);
    const carbs = Math.round((dailyCalories - (protein * 4) - (fat * 9)) / 4);
  
    // valoarea Personalized Plan
    const personalizedPlan = `Planul personalizat este: 
    - Calorii zilnice: ${dailyCalories}
    - Proteine zilnice: ${protein}g
    - Grăsimi zilnice: ${fat}g
    - Carbohidrați zilnici: ${carbs}g`;
  
    const calcButton = document.getElementById('result');
    calcButton.addEventListener('click', getPersonalizedPlan);
  }
