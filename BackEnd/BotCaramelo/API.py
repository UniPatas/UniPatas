from flask import Flask, jsonify, request
from flask_cors import CORS
from Chatbot import create_chatbot

#Flask: Um framework web para Python.
#jsonify: Uma função do Flask que converte objetos Python para JSON.
#request: Permite acessar dados enviados nas solicitações HTTP.
#CORS: Ajuda a resolver problemas de política de mesma origem quando se trata de requisições feitas a partir de navegadores.

app = Flask(__name__)
CORS(app)  #Configura o CORS para permitir solicitações de origens diferentes.

chatbot = create_chatbot() #cria o objeto chatbot

@app.route('/post_response', methods=['POST']) # Define uma rota para o endpoint /post_response que aceita solicitações POST.
def get_response():
    try:
        data = request.get_json() #Obtém os dados JSON enviados na solicitação POST.
        message = data['message'] #Extrai a mensagem do JSON.

        print('Received message:', message)

        response = str(chatbot.get_response(message)) #chama o método get_response do objeto Chatbot para obter uma resposta com base na mensagem recebida.

        print('Generated response:', response)

        return jsonify({'response': response}) #Retorna a resposta em JSON.

    except Exception as e:
        return jsonify({'error': str(e)})
    

if __name__ == '__main__': #Garante que o aplicativo só é executado se o script for o ponto de entrada principal.
    app.run(port=5000, debug=True) #Inicia o aplicativo Flask na porta 3000 em modo de depuração.
