// index.js

// Define the currentUser variable
const currentUser = "Grace Hopper";

// Define the welcomeMessage variable
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Define the excitedWelcomeMessage variable
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// Define the shortGreeting variable
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

// Export variables
module.exports = {
  currentUser,
  welcomeMessage,
  excitedWelcomeMessage,
  shortGreeting,
};
