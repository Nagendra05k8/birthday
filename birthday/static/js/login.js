// ==========================================
// BIRTHDAY SURPRISE LOGIN
// ==========================================

const CORRECT_ROLL_NUMBER = "25A81A05K1";

function checkRollNumber() {

    const rollInput = document.getElementById("rollNo");

    if (!rollInput) {
        return false;
    }

    // Remove spaces and convert to uppercase
    const enteredRollNumber =
        rollInput.value.trim().toUpperCase();

    // Put the uppercase value back into the input
    rollInput.value = enteredRollNumber;

    // Check the roll number
    if (enteredRollNumber === CORRECT_ROLL_NUMBER) {

        return true;

    } else {

        alert("Oops! That roll number is not correct 😄");

        return false;
    }
}