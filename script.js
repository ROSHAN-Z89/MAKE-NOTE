document.addEventListener('DOMContentLoaded', function() {
    const noteInput = document.getElementById('noteInput');
    const addNoteButton = document.getElementById('addNoteButton');
    const notesContainer = document.getElementById('notesContainer');

    addNoteButton.addEventListener('click', function() {
        const noteText = noteInput.value.trim();
        if (noteText) {
            addNoteAjax(noteText);
            noteInput.value = '';
        }
    });

    function addNoteAjax(noteText) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'index.php', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                if (response.success) {
                    addNoteToDOM(noteText);
                } else {
                    alert('Failed to add note: ' + response.message);
                }
            }
        };
        xhr.send(JSON.stringify(noteText));
    }

    function addNoteToDOM(noteText) {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note';
        noteDiv.textContent = noteText;
        notesContainer.appendChild(noteDiv);
    }
});
