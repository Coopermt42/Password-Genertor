function generatePassword(len) {
    var text = '';

    var charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$*';

    for (var i = 0; i < len; i++) 
        text += charset.charAt(Math.floor(Math.random() * charset.length));

    return text;
}

function showPassword() {
    var newElement = document.createElement('p');
    newElement.append(generatePassword(10));
    document.getElementById("passwords").append(newElement);
}