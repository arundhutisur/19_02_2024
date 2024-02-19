document.getElementById('name-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    document.getElementById('display').textContent = 'Hey, ' + name + '! The only way to do great work is to love what you do.';
});