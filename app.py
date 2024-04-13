from flask import Flask, render_template, request
import numpy as np
import cv2
import io
import base64

app=Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def camera():
    if request.method == 'POST' and request.form.get("photo") != None:
        base64_string = request.form.get("photo")

        image_bytes = base64.b64decode(base64_string)
        
        in_memory_file = io.BytesIO(image_bytes)
        data = np.frombuffer(in_memory_file.getvalue(), dtype=np.uint8)
        color_image_flag = 1
        img = cv2.imdecode(data, color_image_flag)

        cv2.imwrite("image.jpg", img)

        return render_template('camera.html')
    else:
        return render_template('camera.html')