function generatePassword(length = 12) {
    let password = '';
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password
}

function saveAndShowPassword() {
    let name = document.getElementById('passwordName');
    if (!name.value) return alert("Enter a name for your password!")

    let password = generatePassword();
    localStorage.setItem(name.value, password);

    let newElement = document.createElement('p');
    newElement.textContent = `Saved: ${name.value} - ${password}`;
    document.body.appendChild(newElement);
}
