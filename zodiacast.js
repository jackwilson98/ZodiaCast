//This is my JavaScript Messaging App Project - ZodiaCast

//signs and messages
const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
const openings = ["Today brings", "You will discover", "The stars reveal", "Expect", "A new journey leads to"];
const endings = ["transformation and growth.", "unexpected insights.", "connection with an old friend.", "a chance to lead.", "clarity in chaos."];

// Function to get a random element
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Message generator
function generateZodiaMessage() {
    const sign = getRandomElement(signs);
    const opening = getRandomElement(openings);
    const closing = getRandomElement(endings);
    return `${sign}, ${opening.toLowerCase()} ${closing}`;
}

console.log(generateZodiaMessage());

// Array to store messages
const storedMessages = [];

// Generate and store a message
const message = generateZodiaMessage();
storedMessages.push(message);

console.log(message);
console.log("Stored Messages:", storedMessages);