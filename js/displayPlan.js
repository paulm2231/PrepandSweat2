function displayPlan() {
    const plan = getPersonalizedPlan();
    document.getElementById("plan").innerHTML = plan;
  }