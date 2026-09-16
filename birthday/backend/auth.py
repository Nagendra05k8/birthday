# ==========================================
# BIRTHDAY SURPRISE LOGIN DETAILS
# ==========================================

CORRECT_ROLL_NO = "25A81A05K1"

CORRECT_BIRTHDAY = "2007-09-10"


def check_birthday_details(roll_no, birthday):

    # Remove spaces and convert entered roll number to uppercase
    entered_roll_no = roll_no.strip().upper()

    # Check both roll number and birthday
    return (
        entered_roll_no == CORRECT_ROLL_NO
        and birthday == CORRECT_BIRTHDAY
    )