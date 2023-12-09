from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
from spacy.cli import download

download("en_core_web_sm")

class ENGSM:
    ISO_639_1 = 'en_core_web_sm'

def create_chatbot():
    chatbot = ChatBot("BotCaramelo", tagger_language=ENGSM)

    conversa = [
"Olá",
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
"E sobre alimentação alternativa?",
"Se você estiver considerando uma dieta caseira, é recomendável consultar um veterinário ou nutricionista especializado em animais para criar um plano alimentar adequado. Eles podem orientar sobre os nutrientes essenciais, proporções corretas e ingredientes seguros para incluir na dieta caseira do seu pet, tente encontrar mais informações seguras sobre isso no nosso fórum.",
"Existem alimentos proibidos para cães?",
"Sim, é importante estar ciente de alimentos que são prejudiciais para cães. Alguns alimentos proibidos incluem chocolate, cebola, alho, uvas, passas, abacate, cafeína, álcool, alimentos com ossos pequenos que podem causar engasgamento e produtos lácteos em excesso. Certifique-se sempre de oferecer alimentos seguros e consultar o veterinário se tiver dúvidas sobre a dieta do seu cachorro.",
"Existem alimentos proibidos para gatos?",
"Sim, é crucial estar ciente de alimentos que são prejudiciais para gatos. Alguns alimentos proibidos incluem chocolate, cebola, alho, café, alimentos ricos em gordura, ossos pequenos que podem causar engasgamento, álcool, uvas, passas, produtos lácteos em excesso e alimentos adoçados com xilitol. Certifique-se sempre de oferecer alimentos seguros e consultar o veterinário se tiver dúvidas sobre a dieta do seu gato.",
"Estou pensando em adotar um cachorro. Por onde devo começar?",
"Parabéns pela decisão de adotar um cachorro! É uma escolha maravilhosa. Para começar, é bom refletir sobre alguns aspectos. Você tem alguma preferência quanto ao porte do cachorro ou ao sexo do animal?",
"Bem, não tenho certeza. Que tipo de perguntas devo considerar para decidir sobre o porte e sexo?",
"Ótimo! Aqui estão algumas perguntas que podem ajudar na decisão:  01 - Porte do Cachorro: Você mora em um espaço grande ou pequeno? Tem preferência por cachorros pequenos, médios ou grandes? Pode fornecer a quantidade adequada de exercício para um cachorro de porte grande, se for o caso? Parte 01 - Sexo do Cachorro: Alguma preferência quanto ao sexo? (macho ou fêmea) Já tem outros animais de estimação em casa? Alguma preferência para convivência entre machos e fêmeas? Essas perguntas podem ajudar a direcionar suas escolhas. Se tiver alguma preferência específica ou se precisar de mais informações, estou aqui para ajudar!",
"Hmm, interessante. Eu moro em um apartamento pequeno, talvez um cachorro de porte médio seria melhor. E quanto ao sexo, não tenho uma preferência específica."
"Entendi! Cachorros de porte médio geralmente se adaptam bem a espaços menores. Agora que temos uma ideia do porte, você gostaria de explorar algumas opções de adoção de cachorros de porte médio, sem preferência específica de sexo? Posso fornecer informações sobre abrigos locais, procedimentos de adoção e até mesmo algumas sugestões de raças que se encaixam nesse perfil. Como posso ajudar mais?",
"Estou pensando em adotar um gato. Como devo proceder?",
"Que ótima decisão! Adotar um gato é uma experiência incrível. Para começar, é bom considerar alguns fatores. Você tem alguma preferência quanto ao porte do gato ou ao sexo do animal?",
"Hmm, não tenho certeza. Que tipo de perguntas eu deveria considerar para decidir sobre o porte e sexo do gato?",
"Ótimo! Aqui estão algumas perguntas que podem ajudar na sua decisão: Parte 01 - Porte do Gato: Você mora em um espaço grande ou pequeno? Prefere gatos mais ativos ou tranquilos? Tem alguma preferência por gatos de porte pequeno, médio ou grande? Parte 02 - Sexo do Gato: Alguma preferência quanto ao sexo? (macho ou fêmea) Já tem outros animais de estimação em casa? Alguma preferência para convivência entre machos e fêmeas? Responder a essas perguntas pode ajudar a direcionar suas escolhas. Se tiver alguma preferência específica ou se precisar de mais informações, estou aqui para ajudar!",
"Bom, moro em um apartamento pequeno, talvez um gato de porte pequeno seria melhor. Quanto ao sexo, não tenho uma preferência específica.",
"Entendi! Gatos de porte pequeno geralmente se adaptam bem a espaços menores. Agora que temos uma ideia do porte, você gostaria de explorar algumas opções de adoção de gatos de porte pequeno, sem preferência específica de sexo? Posso fornecer informações sobre abrigos locais, procedimentos de adoção e até mesmo algumas características de raças que se encaixam nesse perfil. Como posso ajudar mais?",
"Oi, BotCaramelo! Estou procurando informações sobre pontos de vacinação e campanhas de castração na minha região. Você pode me ajudar?",
"Olá! Claro, ficarei feliz em ajudar. Para melhor direcionar a informação, poderia me fornecer o nome da sua cidade ou região aproximada?",
"Moro em Paulista."
"Entendi. Em Paulista, há alguns pontos de vacinação e campanhas de castração que podem ser úteis para você:  01- Clínica Veterinária Pata Amiga: Endereço: Rua das Patinhas, 123 Oferecem vacinação e campanhas de castração em determinados períodos. Recomendo entrar em contato para obter informações atualizadas. 02 - Hospital Veterinário Vida Animal: Endereço: Avenida dos Gatos, 456 Realizam campanhas de vacinação regularmente e podem fornecer informações sobre eventos de castração. 03 - ONG Peludos Felizes: Endereço: Praça dos Peludos, S/N ;Essa ONG costuma promover campanhas de castração e vacinação. Recomendo verificar o calendário de eventos deles. É sempre bom entrar em contato com o estabelecimento para ter as informações mais atualizadas possíveis.",
"Tenho suspeitas de maus-tratos a animais na minha vizinhança. Como posso denunciar isso?"
"Sinto muito ouvir isso, mas é importante tomar medidas para proteger os animais. Aqui estão algumas opções para denunciar maus-tratos a animais: 01- Sociedade Protetora dos Animais (SPA): Acesse o site nacional da SPA ou entre em contato com a unidade local em sua região. Eles geralmente têm canais específicos para denúncias. 02 - Delegacia de Proteção ao Meio Ambiente: Vá até a Delegacia de Proteção ao Meio Ambiente da sua cidade. Eles podem lidar com casos de maus-tratos a animais. 03 - Disque 100: O Disque 100 é um serviço nacional que recebe denúncias de violações aos direitos humanos, incluindo maus-tratos a animais. 04 - ONGs Locais de Proteção Animal: Entre em contato com organizações locais de proteção animal. Elas podem oferecer orientação sobre como proceder e podem até mesmo fornecer assistência direta. Lembre-se de fornecer o máximo de informações possível ao fazer a denúncia, como o endereço exato, descrição dos maus-tratos e qualquer outra informação relevante. Espero que essa informação seja útil. Se precisar de mais orientações, estou aqui para ajudar!",
"Estou tendo dificuldades para acessar alguns recursos na plataforma Unipatas, como o feed de adoção e a página de adoção. Pode me ajudar?",
"Olá! Sinto muito ouvir que você está enfrentando dificuldades. Para resolver o seu problema, sugiro que entre em contato diretamente conosco. Você pode enviar um e-mail para unipatas.plataforma@gmail.com. Nossa equipe estará mais do que feliz em ajudar a solucionar qualquer problema de acesso que você esteja enfrentando. Não hesite em compartilhar os detalhes do seu problema para que possamos oferecer a assistência necessária. Espero que possamos resolver isso para você em breve. Se precisar de mais alguma coisa, estou à disposição!",
"Preciso de informações sobre hospitais de emergência para animais, tanto públicos quanto privados. Pode me ajudar?",
"Claro, estou aqui para ajudar! Aqui estão algumas opções de hospitais de emergência para animais, tanto públicos quanto privados, que você pode considerar: Hospitais Públicos: 01- Hospital Veterinário Público de Recife: Endereço: Rua Limoeiro, 120. Oferece atendimento de emergência para animais de estimação. Recomendo entrar em contato para confirmar horários e serviços disponíveis. 02 - Centro de Controle de Zoonoses de Recife: Endereço: Rua Flor-de-sal, 145. Pode fornecer atendimento emergencial e cuidados básicos para animais. Hospitais Privados: 01 - ClinVet Emergência Animal: Endereço: Rua Caju seco, 190. Oferece serviços de emergência 24 horas para animais de estimação. Entre em contato para mais detalhes. 02 - PetCare Hospital Veterinário: Endereço: Rua Timão e Pumba, 155. Possui uma equipe especializada em atendimento de emergência para animais. Recomendo ligar com antecedência em caso de emergência. é sempre bom verificar diretamente com os hospitais para obter os detalhes mais recentes sobre serviços, horários e procedimentos de emergência. Se precisar de mais informações ou se tiver outras perguntas, estou à disposição!",
"Gostaria de saber mais sobre as ONGs de animais dispostas na plataforma. Tem alguma informação?",
"Claro, ficarei feliz em fornecer informações sobre uma das ONGs disponíveis em nossa plataforma. Conheça a ONG Anjinhos 4 Patas: A Anjinhos 4 Patas é uma organização dedicada ao resgate e cuidado de animais em situação de vulnerabilidade com o instagram @anjinhos4patas. Atualmente, eles têm 25 cachorros, sendo que 10 deles estão prontos para adoção. A organização também está necessitando de doações e apadrinhamentos para poder realizar mais resgates e cuidar desses animais. Se você estiver intereçado em contribuir com doações ou apadrinhando algum animais, consulte nossa página doe e feed de adoção, lá também dispomos da opção de apadrinhamento e se precisar de mais informações ou se tiver outras perguntas, estou à disposição!",
"E sobre alimentação em animais doentes?",
"Quando um animal está doente, a alimentação pode desempenhar um papel crucial na recuperação. Em casos de doença, consulte imediatamente o veterinário para um diagnóstico preciso e recomendações específicas. Em alguns casos, pode ser necessário oferecer uma dieta especializada, como alimentos enlatados, diets terapêuticas ou até mesmo uma alimentação por sonda, dependendo da gravidade da condição. O veterinário irá orientar sobre a melhor abordagem alimentar para atender às necessidades específicas do seu pet doente.",
"Qual seria a melhor ração para meu Labrador?",
"Para um Labrador, é recomendável escolher uma ração de alta qualidade especificamente formulada para raças grandes, com as quantidades certas de proteínas, gorduras, cálcio e fósforo para apoiar o crescimento saudável e a manutenção da saúde das articulações. Marcas que oferecem fórmulas para raças grandes, como Labrador, muitas vezes fornecem os nutrientes necessários para atender às necessidades específicas dessa raça.",
"Qual seria a melhor ração para meu Golden Retriver?",
"Golden Retrievers são conhecidos por sua energia e predisposição a problemas articulares. Portanto, sugiro uma ração de alta qualidade formulada para raças grandes e com ingredientes que promovam a saúde articular. Existem rações específicas para Golden Retrievers que podem incluir nutrientes adicionais para cuidar da pelagem densa e brilhante característica da raça.",
"Qual seria a melhor ração para meu Bulldog Francês?",
"Para Bulldogs Franceses, que podem ser sensíveis ao trato digestivo, é aconselhável escolher uma ração de alta qualidade formulada para cães de porte pequeno, levando em consideração a sensibilidade estomacal da raça. Algumas rações para Bulldogs Franceses também têm croquetes adaptados para suas mandíbulas específicas.",
"Qual seria a melhor ração para meu Pastor Alemão?",
"Pastores Alemães são cães ativos e inteligentes. Recomendo uma ração de alta qualidade formulada para raças médias a grandes, que atenda às necessidades nutricionais específicas da raça. Algumas rações para Pastores Alemães podem incluir ingredientes que promovem a saúde das articulações e o brilho da pelagem.",
"Qual seria a melhor ração para meu Poodle?",
"Para Poodles, que têm uma pelagem única e são propensos a problemas de pele, é aconselhável escolher uma ração de alta qualidade formulada para raças pequenas e médias. Algumas rações para Poodles podem incluir ingredientes que promovem uma pelagem saudável e cuidam da pele sensível.",
"Qual seria a melhor ração para meu Dachshund?",
"Dachshunds são cães de porte pequeno com predisposição a problemas de coluna. Recomendaria uma ração de alta qualidade formulada para raças pequenas, com nutrientes que cuidem da saúde da coluna e do peso. Algumas rações para Dachshunds também têm formatos de croquetes adaptados para suas mandíbulas.",
"E quanto aos cuidados de higiene e banho?",
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
