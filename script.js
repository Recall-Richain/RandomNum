document.getElementById('generateBtn').addEventListener('click', function() {
    var min = parseInt(document.getElementById('min').value);
    var max = parseInt(document.getElementById('max').value);
    
    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    
    document.getElementById('output').textContent = '= ' + randomNum;
});