let lastUpdated = document.querySelector("#last_updated");

/**
 * Adds the left zero given a value with length 1
 * 
 * @param {*} value 
 * @returns {string} with length 2
 */
const addLeftZero = (value) => (value < 10 ? "0" + value : value);

// Getting document last modified date
let dM = new Date(document.lastModified);

// Formats final date
let dateFormatted = `${addLeftZero(dM.getMonth())}/${addLeftZero(dM.getDate())}/${dM.getFullYear()}
 ${addLeftZero(dM.getHours())}:${addLeftZero(dM.getMinutes())}:${addLeftZero(dM.getSeconds())}`;

lastUpdated.innerHTML = "Last Updated: " + dateFormatted;
