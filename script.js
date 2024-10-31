function hisobla(amallash) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let natija;

    switch (amallash) {
        case '+':
            natija = num1 + num2;
            break;
        case '-':
            natija = num1 - num2;
            break;
        case '*':
            natija = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                natija = num1 / num2;
            } else {
                natija = "Nolga bo'lish mumkin emas!";
            }
            break;
        default:
            natija = "Noto'g'ri amal!";
    }

    document.getElementById("natija").textContent = natija;
}
