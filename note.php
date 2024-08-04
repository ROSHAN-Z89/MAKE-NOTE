<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NOTES</title>
    <link rel="stylesheet" href="note.css">
</head>
<body>
    <header>
        Create Notes, Make Things Easier
    </header>
    <div class="container">
        <textarea id="noteInput" placeholder="Write your note here..."></textarea>
        <button id="addNoteButton">Add Note</button>
        <div id="notesContainer">
            <?php
                // Load notes from the file
                if (file_exists('notes.json')) {
                    $notes = json_decode(file_get_contents('notes.json'), true);
                    foreach ($notes as $note) {
                        echo "<div class='note'>" . htmlspecialchars($note) . "</div>";
                    }
                }
            ?>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
