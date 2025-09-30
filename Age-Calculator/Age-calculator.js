const inputbtn = document.querySelector(".age-dob-input");
const calculatebtn = document.querySelector(".calculate-btn");
const ageresult = document.querySelector(".age-result");

calculatebtn.addEventListener("click", () => {
    if (inputbtn.value === "") {
        alert("Please enter your date of birth");
    } else {
        const dob = new Date(inputbtn.value);
        const now = new Date();

        let years = now.getFullYear() - dob.getFullYear();
        let months = now.getMonth() - dob.getMonth();
        let days = now.getDate() - dob.getDate();

        // Adjust if days are negative
        if (days < 0) {
            months--;
            days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        }

        // Adjust if months are negative
        if (months < 0) {
            years--;
            months += 12;
        }

        ageresult.innerHTML = `Your age is ${years} years, ${months} months, and ${days} days.`;
    }
});
