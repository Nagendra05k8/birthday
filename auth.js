// ==========================================
// BIRTHDAY SURPRISE LOGIN DETAILS
// ==========================================

export const CORRECT_ROLL_NO = "25A81A05K1";
export const CORRECT_BIRTHDAY = "2007-09-10";

export function checkBirthdayDetails(rollNo, birthday) {
  if (!rollNo || !birthday) {
    return false;
  }

  // Remove spaces and convert entered roll number to uppercase
  const enteredRollNo = rollNo.trim().toUpperCase();

  // Check both roll number and birthday
  return (
    enteredRollNo === CORRECT_ROLL_NO &&
    birthday.trim() === CORRECT_BIRTHDAY
  );
}
