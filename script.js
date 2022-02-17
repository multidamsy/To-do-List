var button = document.getElementById("enter");
var input = document.getElementById("input");
var line = document.querySelectorAll("li");
var ul = document.querySelector("ul");


// line through
function lineThrough() {    
    for (i=0; i < line.length; i++) {
        line[i].addEventListener("click", function() {
            this.classList.toggle("done");
        })
    }
}
lineThrough();

// Add List by click
function addListItem() {
    button.addEventListener("click", function() {
        if (input.value.length > 0) {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(input.value));
            ul.appendChild(li);
            
            li.addEventListener("click", function(){
                li.classList.toggle("done");
            })
            
            var createButton = document.createElement("button");
            createButton.appendChild(document.createTextNode("Delete"));
            li.appendChild(createButton);
            
            createButton.addEventListener("click", function() {
                this.parentNode.remove();
            })
            input.value = "";
        }
    })
}
addListItem();

// Add list by keypress
function addListItemOnPress() {
    input.addEventListener("keypress", function() {
        if (input.value.length > 0 && event.keyCode === 13) {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(input.value));
            ul.appendChild(li);
            
            li.addEventListener("click", function(){
                li.classList.toggle("done");
            })
            
            var createButton = document.createElement("button");
            createButton.appendChild(document.createTextNode("Delete"));
            li.appendChild(createButton);
            
            createButton.addEventListener("click", function() {
                this.parentNode.remove();
            })
            input.value = "";
        }
    })
}
addListItemOnPress()

// ButtonDelete
function buttonDelete() {
    var deleter = document.getElementsByClassName("deleter");
    for (i=0; i < deleter.length; i++) {
        deleter[i].addEventListener("click", function() {
            this.parentNode.remove();
        })
    }
}
buttonDelete();
