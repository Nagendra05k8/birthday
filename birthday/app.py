from flask import Flask, render_template, request, redirect, url_for, session
from backend.auth import check_birthday_details

app = Flask(__name__)

# Used for the session
app.secret_key = "birthday-surprise-secret-key"


@app.route("/")
def login():
    return render_template("login.html")


@app.route("/surprise", methods=["POST"])
def surprise():

    roll_no = request.form.get("roll_no", "").strip()
    birthday = request.form.get("birthday", "").strip()

    if check_birthday_details(roll_no, birthday):

        session["verified"] = True

        return redirect(url_for("birthday"))

    return render_template(
        "login.html",
        error="Oops! Those details don't match 😄"
    )


@app.route("/birthday")
def birthday():

    if not session.get("verified"):
        return redirect(url_for("login"))

    return render_template("birthday.html")


if __name__ == "__main__":
    app.run(debug=True)