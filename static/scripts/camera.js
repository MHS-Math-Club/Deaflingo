const videoElement = document.getElementById('videoElement');
const canvasElement = document.getElementById('canvasElement');
const photoElement = document.getElementById('photoElement');

let stream;

async function startWebcam() {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoElement.srcObject = stream;
        capturePhoto(); // Automatically capture photo on page load
    } catch (error) {
        console.error('Error accessing webcam:', error);
    }
}

function capturePhoto() {
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

    photoElement.src = 'images/processed.jpg?' + new Date().getTime() + 10; // Adding timestamp to force image reload
    
    // Assuming you have an element with the id 'predictedCharacter' where you want to display the predicted character
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
            const predictedCharacter = data.predicted_character;

            // Update the content of the element with the predicted character
            predictedCharacterElement.textContent = predictedCharacter;
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });

                    // Capture photo repeatedly
    setTimeout(capturePhoto, 50);  // we can make this less slow but too fast = problems
}

// Start webcam when the page loads
startWebcam();