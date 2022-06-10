let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function() {
	addStuff();
});

inputField.addEventListener('keyup', function(e) {
	if (e.which === 13) {
		addStuff();
	}
});

 function addStuff() {
	if (inputField.value === '') {
		alert('Unesi stavku za dodavanje u listu!!!')
	} else {
		var paragraph = document.createElement('p')
	paragraph.classList.add('paragraph-styling');
	paragraph.innerText = inputField.value;
	toDoContainer.appendChild(paragraph);
	inputField.value = '';
	paragraph.addEventListener('click', function() {
		paragraph.style.textDecoration = "line-through";
	})
	paragraph.addEventListener('dblclick', function() {
		paragraph.remove(paragraph);
	})
	}
}	