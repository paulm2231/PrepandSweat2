function showPlan() {
    var plan = getPersonalizedPlan();
    var calories = document.getElementById("calories");
    var protein = document.getElementById("protein");
    var carbs = document.getElementById("carbs");
    var fats = document.getElementById("fats");
    calories.textContent = plan.dailyCalorieIntake.toFixed(0);
    protein.textContent = plan.dailyProteinIntake.toFixed(0);
    carbs.textContent = plan.dailyCarbIntake.toFixed(0);
    fats.textContent = plan.dailyFatIntake.toFixed(0);
    var popupContainer = document.getElementById("popup-container");
    popupContainer.style.display = "block";
  }
  var closeBtn = document.getElementById("close-btn");
closeBtn.onclick = function() {
  var popupContainer = document.getElementById("popup-container");
  popupContainer.style.display = "none";
};
