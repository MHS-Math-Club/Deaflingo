from flask import Flask, render_template, request, send_from_directory
import numpy as np
from PIL import Image, ImageEnhance
import cv2
import io
import base64

app=Flask(__name__)

def update():
    # Open the raw image
    try:
        raw_image = Image.open("images/raw.jpg")
    except FileNotFoundError:
        print("Error: The file 'raw.jpg' was not found.")
        return
    
    # Convert PIL image to numpy array
    raw_np = cv2.cvtColor(np.array(raw_image), cv2.COLOR_RGB2BGR)
    
    # Add text to the image
    font = cv2.FONT_HERSHEY_SIMPLEX
    text = "Processed"
    org = (50, 50)  # Coordinates to place the text
    font_scale = 1
    color = (0, 255, 0)  # Green color in BGR format
    thickness = 2
    cv2.putText(raw_np, text, org, font, font_scale, color, thickness, cv2.LINE_AA)
    
    # Convert numpy array back to PIL image
    processed_with_text = Image.fromarray(cv2.cvtColor(raw_np, cv2.COLOR_BGR2RGB))
    
    # Save the processed image with text as "processed.jpg"
    processed_with_text.save("images/processed.jpg")


@app.route('/', methods=['GET', 'POST'])    
def camera():
    if request.method == 'POST' and request.form.get("photo") != None:
        base64_string = request.form.get("photo")

        image_bytes = base64.b64decode(base64_string)
        
        in_memory_file = io.BytesIO(image_bytes)
        data = np.frombuffer(in_memory_file.getvalue(), dtype=np.uint8)
        color_image_flag = 1
        img = cv2.imdecode(data, color_image_flag)

        cv2.imwrite("images/raw.jpg", img)

        update()

        return render_template('index.html')
    else:
        return render_template('index.html')
    
@app.route('/images/<path:path>')
def static_proxy(path):
    return send_from_directory('images', path)
    
if __name__ == "__main__":
   app.run(debug=True, port=8001)