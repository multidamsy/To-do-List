var input = document.getElementById('input');
var button = document.getElementById('enter');
var li = document.getElementsByTagName('li');
var ul = document.getElementsByTagName('ul');

button.addEventListener('click', function() {
    if (input.value.length > 0) {
        var li = document.createElement('li');
        li.addTextNode('input.value');
        var ul = document.getElementsByTagName('ul');
        ul.appendChild('li');
    }
});