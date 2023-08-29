// script.js
const illnesses = [
  "Cold",
  "Flu",
  "Headache",
  "Fever",
  "Allergies",
  "Stomachache",
  "Cough",
  "SoreThroat",
  "Fatigue",
  // Add more illnesses to the list
];
const medicines = {
  Cold: "ColdMedicine",
  Flu: "FluMedicine",
  Fever: "FeverMedicine",
  Headache: "HeadacheMedicine",
  Cough: "CoughMedicine",
  Allergies: "AllergyMedicine",
  Stomachache: "StomachacheMedicine",
  SoreThroat: "SoreThroatMedicine",
  Fatigue: "FatigueMedicine",
  // Add more medicine recommendations here
};


const illnessInput = document.getElementById("illnessInput");
const suggestionList = document.getElementById("suggestionList");
const submitButton = document.getElementById("submitButton");
const medicineRecommendation = document.getElementById("medicineRecommendation");


function showSuggestions() {
  const inputText = illnessInput.value.toLowerCase();
  const filteredIllnesses = illnesses.filter(illness =>
    illness.toLowerCase().includes(inputText)
  );

  suggestionList.innerHTML = "";
  if (filteredIllnesses.length > 0) {
    const ul = document.createElement("ul");
    filteredIllnesses.forEach(illness => {
      const li = document.createElement("li");
      li.textContent = illness;
      li.addEventListener("click", () => {
        illnessInput.value = illness;
        hideSuggestions();
      });
      ul.appendChild(li);
    });
    suggestionList.appendChild(ul);
    suggestionList.style.display = "block";
  } else {
    hideSuggestions();
  }
}

function hideSuggestions() {
  suggestionList.style.display = "none";
}

// Hide suggestions when clicking outside the input and suggestion list
document.addEventListener("click", event => {
  if (
    !illnessInput.contains(event.target) &&
    !suggestionList.contains(event.target)
  ) {
    hideSuggestions();
  }
});
// Function to compare symptoms with illnesses
function selectSuggestion(illness) {
  illnessInput.value = illness;
  suggestionList.style.display = "none";
}

function submitForm() {
  const selectedIllness = illnessInput.value;
  const recommendedMedicine = medicines[selectedIllness] || "No specific medicine recommendation.";
  medicineRecommendation.textContent = `Recommended Medicine: ${recommendedMedicine}`;
}

illnessInput.addEventListener("input", showSuggestions);
submitButton.addEventListener("click", submitForm);
