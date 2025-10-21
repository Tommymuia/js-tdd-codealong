// Your code here
// src/utils.js

function currentAgeForBirthYear(birthYear) {
  // Calculates age based on the current year
  return new Date().getFullYear() - birthYear;
}

// ✅ Export the function
module.exports = { currentAgeForBirthYear };
