const container = document.querySelector('.container');
const signupButton = document.querySelector('.signup-section header');
const loginButton = document.querySelector('.login-section header');

loginButton.addEventListener('click', () => {
    container.classList.add('active');
});

signupButton.addEventListener('click', () => {
    container.classList.remove('active');
});

const teamInfo = {
    teamName: "CIPHER-EDU",
    members: ["Oybek Abduraimov"],
    project: "ResPonsive Music dashboard",
    year: 2024,
  };
  
  // Log team information to the console
  console.log("Team Information:");
  console.log("Team Name:", teamInfo.teamName);
  console.log("Team Members:", teamInfo.members.join(", "));
  console.log("Project:", teamInfo.project);
  console.log("Year:", teamInfo.year);
  