const booksData = [
  {
    id: 0,
    title: 'O gene egoísta',
    subtitle: null,
    author: 'Richard Dawkins',
    summary: 'O gene egoísta foi publicado em 1976. Propunha-se a condensar o enorme corpo teórico já produzido para compreender como espécies surgem e se diversificam, como indivíduos se relacionam e colaboram entre si - e a ir além. Richard Dawkins inovou de muitas maneiras. Introduziu uma linguagem informal e metafórica numa área dominada por reflexões densas e fórmulas matemáticas. Subverteu a percepção intuitiva da importância dos organismos e dos grupos: o gene é quem comanda, quem busca perpetuar-se.',
    keywords: ['Evolução', 'Biologia', 'Genética', 'Hereditariedade', 'Transmissão'],
    coverIllustration: require('../img/o-gene-egoista.jpg')
  },
  {
    id: 1,
    title: 'O gene',
    subtitle: 'Uma história íntima',
    author: 'Siddhartha Mukherjee',
    summary: 'Nesta aclamada obra, Siddhartha Mukherjee, vencedor do prêmio Pulitzer de não ficção de 2011, combina ciência, história social e relatos pessoais para nos contar a extraordinária narrativa de uma das mais importantes descobertas dos tempos modernos. Ao investigar a hereditariedade, Mukherjee irá mostrar como a genética influencia nossas vidas, personalidades, identidades, destinos e escolhas.',
    keywords: ['Medicina', 'História', 'Genética', 'Autobiografia', 'Pesquisa'],
    coverIllustration: require('../img/o-gene.jpg')
  },
  {
    id: 2,
    title: 'Herança',
    subtitle: 'Como os genes transformam nossas vidas e como nossas vidas transformam os genes',
    author: 'Sharon Moalem',
    summary: 'Médico e cientista premiado, Sharon Moalem desconstrói a ideia de que a genética é algo imutável neste livro de leitura acessível e atraente. Analisando casos de pacientes e as mais recentes pesquisas na área, o autor mostra que o genoma humano é muito mais dinâmico do que pensamos e que alimentação, hábitos e comportamentos podem, sim, modificar nossa herança genética (e tais mudanças podem ser transmitidas para as gerações seguintes).',
    keywords: ['Evolução', 'Biologia', 'Genética', 'Hereditariedade', 'Transmissão'],
    coverIllustration: require('../img/heranca.jpg')
  },
  {
    id: 3,
    title: 'Epigenética',
    subtitle: 'Como a ciência está revolucionando o que sabemos sobre hereditariedade',
    author: 'Richard C. Francis',
    summary: 'A ideia de que hábitos cotidianos e o ambiente em que vivemos podem alterar o "comportamento" dos genes sem modificar o código genético tem nome: epigenética. E nos últimos anos o tema vem se tornando uma das áreas mais intrigantes e promissoras da ciência. Estudos recentes mostram, por exemplo, que homens que começaram a fumar antes da puberdade tiveram filhos obesos. Mas a obesidade é só a ponta do iceberg. Pesquisadores acreditam que a epigenética seja a chave para desvendar a doença de Alzheimer, a esquizofrenia, o autismo e a diabetes, e sua compreensão dará grande impulso à cura de determinados tipos de câncer. Epigenética é a primeira obra para leigos sobre esse tema-chave do século XXI.A ideia de que hábitos cotidianos e o ambiente em que vivemos podem alterar o "comportamento" dos genes sem modificar o código genético tem nome: epigenética. E nos últimos anos o tema vem se tornando uma das áreas mais intrigantes e promissoras da ciência. Estudos recentes mostram, por exemplo, que homens que começaram a fumar antes da puberdade tiveram filhos obesos. Mas a obesidade é só a ponta do iceberg. Pesquisadores acreditam que a epigenética seja a chave para desvendar a doença de Alzheimer, a esquizofrenia, o autismo e a diabetes, e sua compreensão dará grande impulso à cura de determinados tipos de câncer. Epigenética é a primeira obra para leigos sobre esse tema-chave do século XXI.',
    keywords: ['Mudanças', 'Epigenética', 'Transmissão'],
    coverIllustration: require('../img/epigenetica.jpg')
  },
  {
    id: 4,
    title: 'O polegar do violinista',
    subtitle: 'E outras histórias da genética sobre amor, guerra e genialidade',
    author: 'Sam Kean',
    summary: 'O renomado jornalista Sam Kean conta a história da genética até os dias de hoje, em que exames de ponta são capazes de detectar doenças que poderemos desenvolver. Ele mostra como, em algum ponto no emaranhado de fitas do DNA, se encontra a solução de muitos mistérios da espécie humana. Tudo isso entremeado a fantásticas narrativas protagonizadas pelo DNA: as mulheres grávidas que transmitiam câncer aos filhos ainda não nascidos; os sobreviventes de bombas nucleares; a morte precoce dos primeiros exploradores do ártico; o cientista russo que teria criado um híbrido de homem e chimpanzé; e até mesmo casos em que, como o do violinista virtuose Paganini, a ciência esclarece a arte.',
    keywords: ['História', 'Genética', 'Pesquisa'],
    coverIllustration: require('../img/o-polegar-do-violinista.jpg')
  },
  {
    id: 5,
    title: 'DNA',
    subtitle: 'O segredo da vida',
    author: 'James D. Watson',
    summary: 'Nesse livro, Watson resume os principais acontecimentos que marcaram a biologia, desde os experimentos pioneiros de Mendel e da busca pela eugenia, até as pesquisas mais recentes sobre o funcionamento da molécula de DNA e a intervenção genética. A interferência no genoma de outros organismos abre as portas para a biotecnologia e para o advento dos transgênicos, mas também para a terapia gênica e a medicina do futuro. Em linguagem simples e com dezenas de fotos e esquemas ilustrativos, Watson apresenta os principais personagens dessa história, aponta as perspectivas que podemos esperar do estudo do DNA e discute suas implicações éticas.',
    keywords: ['Medicina', 'História', 'Genética', 'Pesquisa'],
    coverIllustration: require('../img/dna-o-segredo-da-vida.jpg')
  },
  {
    id: 6,
    title: 'As sete filhas de Eva',
    subtitle: null,
    author: 'Bryan Sykes',
    summary: 'Bryan Sykes, um dos mais prestigiados geneticistas mundiais, desenvolve a correlação genética para a teoria dos seis graus de separação ― entre quaisquer duas pessoas do planeta existem no máximo seis intermediários. Depois de analisar um elemento do DNA herdado pela linha materna, Sykes fez o caminho de volta aos tempos pré-históricos e descobriu que 95% de todos os europeus modernos descendem das mesmas mães ancestrais: Úrsula, Xênia, Helena, Velda, Tara, Katrine e Jasmine. As sete filhas de Eva.',
    keywords: ['História', 'Genética', 'Pesquisa', 'Pré-história'],
    coverIllustration: require('../img/as-sete-filhas-de-eva.jpg')
  },
  {
    id: 7,
    title: 'A grande história da evolução',
    subtitle: null,
    author: 'Richard Dawkins',
    summary: 'A grande história da evolução é uma peregrinação ao longo da árvore genealógica da vida. Partindo de onde estamos hoje, passamos por quarenta entroncamentos onde nos deparamos com ancestrais e peregrinos que vêm de outros ramos. O ponto de chegada situa-se há 4 bilhões de anos, na origem da vida. Ao longo do trajeto, peregrinos contam suas histórias e descortinam as maravilhas da diversidade biológica que habita este planeta e os mistérios da evolução que ainda hoje desafiam biólogos. O humano ancestral "Little Foot" investiga como surgiu a possibilidade de andarmos sobre dois pés; o gibão ajuda a entender por que não temos que fazer calças com um furo para a cauda; o camundongo deixa claro que o que torna um organismo diferente do outro não são exatamente os genes, mas como sua atividade é regulada; castores explicam o conceito de fenótipo estendido, em que a represa é uma extensão do próprio castor; e o gafanhoto discute se existem raças.',
    keywords: ['Evolução', 'Biologia', 'Genética', 'Hereditariedade'],
    coverIllustration: require('../img/a-grande-historia-da-evolucao.jpg')
  },
  {
    id: 8,
    title: '10% Humano',
    subtitle: 'Como os micro-organismos são a chave para a saúde do corpo e da mente',
    author: 'Alanna Collen',
    summary: 'Há muito mais coisas em seu corpo do que você poderia imaginar. Cerca de 100 trilhões delas, para ser mais exato. Para cada célula humana em nosso organismo, há outras nove impostoras, pegando carona. Você não é formado apenas de carne e osso, sangue e músculo, mas também de bactérias e fungos. Não é um indivíduo, mas uma colônia – um ecossistema. Somos apenas 10% humanos. Neste livro instigante e revolucionário, a bióloga Alanna Collen apresenta as últimas pesquisas científicas e mostra de que forma os micróbios que habitam o corpo determinam nosso peso, o funcionamento de nosso sistema imunológico e até mesmo nossa saúde mental.',
    keywords: ['Biologia', 'Pesquisa', 'Ser humano', 'Microorganismos'],
    coverIllustration: require('../img/10-humano.jpg')
  },
  {
    id: 9,
    title: 'O segredo está nos telômeros',
    subtitle: null,
    author: 'Elissa Epel',
    summary: 'Todos desejam uma vida longa e satisfatória, viver melhor e sentir-se jovem por mais tempo, mas como a saúde das células influencia o processo de envelhecimento e a longevidade? Genes e meio ambiente. Criação, mente e natureza. A bióloga molecular Elizabeth Blackburn, premiada com o Nobel de Fisiologia e Medicina em 2009, e a psicóloga da saúde Elissa Epel uniram-se com a proposta de apresentar um novo modo de se pensar em saúde. Em O segredo está nos telômeros receita revolucionária para manter a juventude, viver mais e melhor, as pesquisadoras levam essa questão a nível celular, apresentando ao leitor os telômeros, cujo comprimento tem relação direta com a saúde. Telômeros saudáveis evitam até mesmo o câncer, e algumas práticas regulares, os Laboratórios de Renovação propostos ao final de cada capítulo, são capazes de aprimorar a saúde dessas estruturas e, consequentemente, o bem-estar cotidiano. Best-seller do The New York Times, este livro é um mergulho fascinante no coração genético das células os cromossomos e leitura imprescindível para quem deseja combater o envelhecimento prematuro, revertê-lo ou simplesmente agir na manutenção de sua vitalidade. Ou seja: é a tão aguardada receita para manter-se jovem por mais tempo.',
    keywords: ['Genes', 'Meio ambiente', 'Saúde', 'Cromossomos'],
    coverIllustration: require('../img/o-segredo-esta-nos-telomeros.jpg')
  },
  {
    id: 10,
    title: 'O livro dos humanos',
    subtitle: 'A história de como nos tornamos quem somos',
    author: 'Adam Rutherford',
    summary: 'Em O livro dos humanos, Rutherford analisa as semelhanças e diferenças entre nós e os outros animais quando se trata de código genético, fala, habilidades cognitivas e até o conceito de arrependimento.Com uma abordagem original e bem-humorada a respeito da vida na Terra, Adam Rutherford explora uma série de características outrora consideradas exclusivamente humanas, mas que hoje sabemos que não são: diversos animais confeccionam e utilizam ferramentas para facilitar suas atividades diárias; falcões australianos pegam gravetos em chamas de incêndios florestais e os derrubam propositalmente em áreas de grama seca, criando novos focos de fogo que provocam evacuações frenéticas de presas com as quais se banqueteiam; golfinhos foram observados adotando hábitos por meio da transmissão cultural; o sexo sem fins reprodutivos certamente ocupa uma grande parcela do interesse e do tempo de muitos humanos, mas não nos torna únicos: os bonobos são ainda mais motivados, tendo relações sexuais várias vezes ao dia, com diferentes parceiros, inclusive do mesmo gênero; macacos são capazes de aprender linguagem de sinais, e o gene FOXP2, conhecido como o “gene da linguagem”, tampouco é uma exclusividade humana, estando presente no DNA de pássaros canoros e até mesmo no de ratos.',
    keywords: ['Código genético', 'Animais', 'Ser humano', 'Descobertas'],
    coverIllustration: require('../img/o-livro-dos-humanos.jpg')
  },
];

export default booksData;