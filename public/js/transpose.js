const noteMap = {
    "A": 0, "A#": 1, "Bb": 1, "B": 2, "C": 3, "C#": 4, "Db": 4, 
    "D": 5, "D#": 6, "Eb": 6, "E": 7, "F": 8, "F#": 9, "Gb": 9, 
    "G": 10, "G#": 11, "Ab": 11
};

const positionMap = {
    0: "A", 1: ["A#", "Bb"], 2: "B", 3: "C", 4: ["C#", "Db"], 5: "D", 
    6: ["D#", "Eb"], 7: "E", 8: "F", 9: ["F#", "Gb"], 10: "G", 11: ["G#", "Ab"]
};

function transpose(position, distance) {
    let newPosition = (position + distance) % 12;
    if (newPosition < 0) newPosition += 12;
    return newPosition;
}

function transposeNotes() {
    let inputNotes = document.getElementById('notes').value;
    let distance = parseInt(document.getElementById('distance').value);
    let accidental = parseInt(document.getElementById('accidental').value);
    let output = document.getElementById('output');

    // Match notes, words, and spaces separately
    let notesArray = inputNotes.match(/(\s+)|(?<![A-Za-z0-9#b])([A-G](?:#|b)?)(?=(m)?(?![A-Za-z0-9#b]))|([^\w\s])|(\w+)/g);
    let transposedNotes = [];

    console.log(notesArray)

    for (let note of notesArray) {
        if (note.trim() === "") {
            // Preserve spaces as they are
            transposedNotes.push(note);
            continue;
        }

        let position = noteMap[note];

        if (position === undefined) {
            // If it's not a note (likely a word), keep it as is
            transposedNotes.push(note);
            continue;
        }

        let newPosition = transpose(position, distance);
        let newNote = positionMap[newPosition];

        if (Array.isArray(newNote)) {
            newNote = accidental === 1 ? newNote[0] : newNote[1];
        }

        transposedNotes.push(newNote);
    }

    output.value = transposedNotes.join("");
}

// Copy to clipboard function
function copyToClipboard() {
    let outputText = document.getElementById("output");

    // Select the text inside the output textarea
    outputText.select();
    outputText.setSelectionRange(0, 99999); // For mobile devices

    // Copy to clipboard
    document.execCommand("copy");

    // Provide feedback to the user
    let copyButton = document.getElementById("copyButton");
    copyButton.textContent = "Copied!";
    setTimeout(() => {
        copyButton.textContent = "Copy";
    }, 1500);
}

// Attach event listener for copy button when DOM loads
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("copyButton").addEventListener("click", copyToClipboard);
});