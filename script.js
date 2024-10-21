// TODO: Implement the password generation logic based on user input

const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    let characterSet = "";
    if (options.includeUppercase) characterSet += uppercase;
    if (options.includeLowercase) characterSet += lowercase;
    if (options.includeNumbers) characterSet += numbers;
    if (options.includeSpecialChars) characterSet += specialChars;

    if (characterSet.length === 0) {
        throw new Error("No character sets selected");
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    return password;
};

document.getElementById("generateButton").addEventListener("click", () => {
    const length =
parseInt(document.getElementById("length").value);
    const options = {
        includeUppercase:
document.getElementById("uppercase").Checked,
        includeLowercase:
document.getElementById("lowercase").Checked,
        includeNumbers:
document.getElementById("numbers").Checked,
        includeSpecialChars:
document.getElementById("specialChars").Checked
    };

    const password = generatePassword(length, options);
    document.getElementById("passwordOutput").innerText =
password;
});

    // TODO: Create a variable for the character set based on selected options

    // TODO: Generate the password based on the selected criteria
   

// TODO: Add event listener to the button to call generatePassword and display the output
    
// BONUS: Implement the copy to clipboard functionality
