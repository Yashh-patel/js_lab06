document.addEventListener('keydown', function(e) {
    const keyValue = e.key;
    const keyCode = e.keyCode;

    document.getElementById('key_Value').textContent = keyValue;
    document.getElementById('key_Code').textContent = keyCode;
});