from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
from spacy.cli import download

download("en_core_web_sm")

class ENGSM:
    ISO_639_1 = 'en_core_web_sm'

def create_chatbot():
    chatbot = ChatBot("BotCaramelo", tagger_language=ENGSM)

    conversa = [
"Olá, BotCaramelo!",
"Olá, em que posso ajudar?",
"Eu adotei um filhote de cachorro recentemente e estou um pouco perdido.",
"Parabéns pela sua adoção! De que assuntos você tem interesse em saber? Posso te ajudar com dicas de vacinação, alimentação, higiene e etc.",
"Eu adotei um cachorro recentemente e estou um pouco perdido.",
"Parabéns pela sua adoção! De que assuntos você tem interesse em saber? Posso te ajudar com dicas de vacinação, alimentação, higiene e etc.",
"Eu adotei um filhote de gato recentemente e estou um pouco perdido.",
"Parabéns pela sua adoção! De que assuntos você tem interesse em saber? Posso te ajudar com dicas de vacinação, alimentação, higiene e etc.",
"Eu adotei um gato recentemente e estou um pouco perdido.",
"Parabéns pela sua adoção! De que assuntos você tem interesse em saber? Posso te ajudar com dicas de vacinação, alimentação, higiene e etc.",
"Como devo alimentá-lo e com que frequência?",
"Para filhotes, é importante alimentá-los com ração própria para a idade deles. Geralmente, segue-se a orientação na embalagem, mas é ideal consultar um veterinário para determinar a quantidade e o tipo ideal de ração para o seu filhote. Normalmente, recomenda-se alimentar filhotes pequenos de 3 a 4 vezes ao dia.",
"Entendi. E quanto aos cuidados de higiene e banho?",
"Banho: Use shampoo suave e específico para filhotes, evitando os olhos, nariz e ouvidos. Não é necessário banhá-los com muita frequência. Escovação: Escove o pelo regularmente para prevenir emaranhados e estimular a circulação sanguínea. Higiene dental: Escove os dentes do filhote com pasta de dente própria para cães para prevenir problemas dentários. Corte de unhas: Mantenha as unhas curtas para evitar machucados. Se não souber como cortar, peça orientação ao veterinário. Limpeza das orelhas: Verifique as orelhas regularmente e use uma solução de limpeza recomendada pelo veterinário para higienizá-las. Ambiente limpo: Mantenha a área do filhote limpa, lavando a cama e os brinquedos regularmente. Vacinação e desparasitação: Siga o calendário recomendado pelo veterinário para prevenir infestações por parasitas e doenças.",
"E sobre doenças comuns em gatos e cachorros?",
"É importante ficar atento a algumas doenças comuns. Para cachorros, a parvovirose e a cinomose são preocupações, enquanto em gatos, a rinotraqueíte e a leucemia felina são comuns. Se notar sinais como falta de apetite, letargia, ou sintomas respiratórios, consulte imediatamente um veterinário. A prevenção por meio de vacinas é essencial.",
"Quais são os sintomas comuns da parvovirose em cachorros?",
"A parvovirose em cachorros pode causar vômitos, diarreia com sangue, febre, letargia e perda de apetite. Consulte um veterinário imediatamente se notar esses sintomas.",
"E quais são os sintomas da cinomose em cachorros?",
"A cinomose pode apresentar sintomas como febre, secreção nasal e ocular, tosse, diarreia e convulsões. Se suspeitar de cinomose, busque ajuda veterinária imediatamente.",
"E em gatos, quais são os sintomas da rinotraqueíte?",
"A rinotraqueíte em gatos pode causar espirros frequentes, secreção nasal e ocular, febre, falta de apetite e letargia. Consulte um veterinário ao observar esses sinais.",
"E quais são os sintomas da leucemia felina em gatos?",
"A leucemia felina pode apresentar sintomas como perda de peso, letargia, problemas respiratórios e infecções recorrentes. Se notar esses sinais, procure um veterinário.",
"E se meu filhote apresentar sintomas, como devo tratá-lo?",
"Se suspeitar de qualquer sintoma, consulte um veterinário imediatamente. O tratamento varia conforme a doença, mas em geral, um diagnóstico precoce é crucial. Para as doenças mencionadas, o veterinário poderá prescrever medicamentos, fluidoterapia e cuidados específicos para garantir a recuperação do seu filhote.",
"Como posso evitar que meu filhote contraia parvovirose ou cinomose?",
"A melhor forma de prevenir parvovirose e cinomose é através da vacinação. Certifique-se de seguir o cronograma de vacinação recomendado pelo veterinário para garantir a imunização adequada do seu filhote.",
"E para evitar a rinotraqueíte e a leucemia felina em gatos?",
"A vacinação também é essencial para prevenir rinotraqueíte e leucemia felina em gatos? Consulte o veterinário para determinar o melhor plano de vacinação para o seu gato, levando em consideração o estilo de vida e os riscos específicos.",
"Obrigado, BotCaramelo!",
"Fico feliz em ajudar! Se surgir mais alguma dúvida, não hesite em me chamar. E lembre-se, o amor e a atenção são sempre essenciais para o bem-estar do seu filhote. Ah, e obrigado por escolher a adoção responsável! A Unipatas está sempre aqui para auxiliá-lo no processo de cuidar do seu novo amigo.",
]

    trainer = ListTrainer(chatbot)
    trainer.train(conversa)

    return chatbot
