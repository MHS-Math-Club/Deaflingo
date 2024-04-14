const videoElement = document.getElementById('videoElement');
    const canvasElement = document.getElementById('canvasElement');
    const photoElement = document.getElementById('photoElement');
    let currentLetterIndex = 0; // To keep track of the letter being typed
    let holdTimer = null; // Timer for holding the same letter
    const holdDuration = 150; // Duration in milliseconds for holding the same letter

    let stream;

    async function startWebcam() {
        try {
            stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoElement.srcObject = stream;
            updateStream(); // Automatically capture photo on page load
        } catch (error) {
            console.error('Error accessing webcam:', error);
        }
    }

    function updateStream() {
        canvasElement.width = videoElement.videoWidth;
        canvasElement.height = videoElement.videoHeight;
        canvasElement.getContext('2d').drawImage(videoElement, 0, 0);
        const photoDataUrl = canvasElement.toDataURL('image/jpeg');
        photoElement.src = photoDataUrl;
        photoElement.style.display = 'block';

        const base64String = photoDataUrl.split(',')[1];

        // Set base64 string in the form input field
        document.getElementById("imageString").value = base64String;

        // AJAX form submission
        $.ajax({
            type: 'POST',
            url: '/',
            data: $('#sendImage').serialize(), // Serialize form data
        });

        photoElement.src = 'images/processed.jpg?' + new Date().getTime(); // Adding timestamp to force image reload

        const predictedCharacterElement = document.getElementById('predictedCharacter');

        fetch('/json/output.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Get the value of predicted_character
                const predictedCharacter = data.predicted_character.toLowerCase();

                // Update the content of the element with the predicted character
                predictedCharacterElement.textContent = predictedCharacter;

                // Select all the spans in the quote
                const wordSpans = document.querySelectorAll('.word span');

                // Check if the current letter index is valid
                if (currentLetterIndex < wordSpans.length) {
                    // Get the current letter span
                    const currentLetterSpan = wordSpans[currentLetterIndex];

                    // Compare the current predicted character with the letter of the word
                    if (predictedCharacter === currentLetterSpan.textContent.toLowerCase()) {
                        // Start or reset the hold timer
                        if (holdTimer === null) {
                            holdTimer = setTimeout(() => {
                                currentLetterSpan.style.color = 'green'; // Turn the letter green
                                currentLetterSpan.style.textDecoration = 'underline'; // Add underline to the letter
                                currentLetterIndex++; // Move to the next letter
                                holdTimer = null; // Reset the timer
                            }, holdDuration);
                        }
                    } else {
                        // Reset the hold timer if the predicted character changes
                        clearTimeout(holdTimer);
                        holdTimer = null;
                    }
                }
            })
            .catch(error => {
                console.error('Error fetching JSON:', error);
            });

        // Capture photo repeatedly
        setTimeout(updateStream, 50); // we can make this less slow but too fast = problems
    }

    // Start webcam when the page loads
    startWebcam();