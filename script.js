function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
  
    var bmi = weight / ((height / 100) * (height / 100));
    var result = "";
  
    if (isNaN(bmi)) {
      result = "Please enter valid height and weight";
    } else if (bmi < 18.5) {
      result = "Underweight (BMI < 18.5):<br><br>" +
               "Strength training: Focus on building muscle mass through resistance exercises like weight lifting or bodyweight exercises.<br>" +
               "Cardiovascular exercises: Engage in aerobic activities like jogging, cycling, or swimming to improve cardiovascular health.<br>" +
               "Incorporate high-calorie, nutrient-dense foods into your diet to support muscle growth and overall health.";
    } else if (bmi >= 18.5 && bmi < 25) {
      result = "Normal Weight (18.5 ≤ BMI < 25):<br><br>" +
               "Maintain a balanced exercise routine that includes both cardiovascular activities and strength training.<br>" +
               "Aim for at least 150 minutes of moderate-intensity aerobic exercise or 75 minutes of vigorous-intensity aerobic exercise per week.<br>" +
               "Include activities like brisk walking, running, dancing, or playing sports to stay active and healthy.";
    } else if (bmi >= 25 && bmi < 30) {
      result = "Overweight (25 ≤ BMI < 30):<br><br>" +
               "Focus on aerobic exercises to burn calories and improve cardiovascular health, such as brisk walking, jogging, cycling, or swimming.<br>" +
               "Incorporate strength training exercises to build muscle mass and boost metabolism, which can aid in weight loss.<br>" +
               "Include flexibility and mobility exercises like yoga or stretching to improve overall flexibility and reduce the risk of injury.";
    } else {
      result = "Obesity (BMI ≥ 30):<br><br>" +
               "Begin with low-impact activities to reduce stress on the joints, such as walking, swimming, or using an elliptical machine.<br>" +
               "Gradually increase the intensity and duration of workouts as fitness improves.<br>" +
               "Consult with a healthcare professional or certified fitness trainer to create a safe and effective exercise plan tailored to your needs and limitations.";
    }
  
    document.getElementById("result").innerHTML = result;
  }
  