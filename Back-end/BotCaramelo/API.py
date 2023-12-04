from flask import Flask, request, jsonify
from Chatbot import create_chatbot

app = Flask(__name__)

chatbot = create_chatbot()

@app.route('/get_response', methods=['POST'])
def get_response():
    data = request.get_json()
    message = data['message']
    response = str(chatbot.get_response(message))
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)

