from flask import Flask, render_template, request, send_from_directory
import numpy as np
from PIL import Image
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

    # Rotate the image by 90 degrees (clockwise)
    processed = raw_image.transpose(Image.FLIP_LEFT_RIGHT)

    # Save the rotated image as "processed.jpg"
    processed.save("images/processed.jpg")

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

        return render_template('camera.html')
    else:
        return render_template('camera.html')
    
@app.route('/images/<path:path>')
def static_proxy(path):
    return send_from_directory('images', path)
    
if __name__ == "__main__":
   app.run(debug=True, port=8001)