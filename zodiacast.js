//This is my JavaScript Messaging App Project - ZodiaCast

//signs and messages
const signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
const openings = ["Today brings", "You will discover", "The stars revail", "Expect", "A new journey leads to"]
const endings = ["transformation and growth.", "unexpected insights.", "connection with an old friend.", "a chance to lead.", "clarity in chaos." ]

//function to generate a random message
function generateMessage() {
    const randomSign= signs(Math.floor(Math.random() * signs.length));
    const randomOpening = openings[Math.floor(Math.random() * openings.length)];
    const randomEnding = endings[Math.floor(Math.random() * endings.length)];
    const message = `${randomOpening} ${randomSign} ${randomEnding}`;
    return message;
}

