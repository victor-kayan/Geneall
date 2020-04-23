const booksData = [
  {
    id: 0,
    title: 'O gene egoísta',
    subtitle: null,
    author: 'Richard Dawkins',
    summary: 'O gene egoísta foi publicado em 1976. Propunha-se a condensar o enorme corpo teórico já produzido para compreender como espécies surgem e se diversificam, como indivíduos se relacionam e colaboram entre si - e a ir além. Richard Dawkins inovou de muitas maneiras. Introduziu uma linguagem informal e metafórica numa área dominada por reflexões densas e fórmulas matemáticas. Subverteu a percepção intuitiva da importância dos organismos e dos grupos: o gene é quem comanda, quem busca perpetuar-se.',
    coverIllustration: require('../img/o-gene-egoista.jpg')
  },
  {
    id: 1,
    title: 'O gene',
    subtitle: 'Uma história íntima',
    author: 'Siddhartha Mukherjee',
    summary: 'Nesta aclamada obra, Siddhartha Mukherjee, vencedor do prêmio Pulitzer de não ficção de 2011, combina ciência, história social e relatos pessoais para nos contar a extraordinária narrativa de uma das mais importantes descobertas dos tempos modernos. Ao investigar a hereditariedade, Mukherjee irá mostrar como a genética influencia nossas vidas, personalidades, identidades, destinos e escolhas.',
    coverIllustration: require('../img/o-gene.jpg')
  },
  {
    id: 2,
    title: 'Herança',
    subtitle: 'Como os genes transformam nossas vidas e como nossas vidas transformam os genes',
    author: 'Sharon Moalem',
    summary: 'Médico e cientista premiado, Sharon Moalem desconstrói a ideia de que a genética é algo imutável neste livro de leitura acessível e atraente. Analisando casos de pacientes e as mais recentes pesquisas na área, o autor mostra que o genoma humano é muito mais dinâmico do que pensamos e que alimentação, hábitos e comportamentos podem, sim, modificar nossa herança genética (e tais mudanças podem ser transmitidas para as gerações seguintes).',
    coverIllustration: require('../img/heranca.jpg')
  },
  {
    id: 3,
    title: 'Epigenética',
    subtitle: 'Como a ciência está revolucionando o que sabemos sobre hereditariedade',
    author: 'Richard C. Francis',
    summary: 'A ideia de que hábitos cotidianos e o ambiente em que vivemos podem alterar o "comportamento" dos genes sem modificar o código genético tem nome: epigenética. E nos últimos anos o tema vem se tornando uma das áreas mais intrigantes e promissoras da ciência. Estudos recentes mostram, por exemplo, que homens que começaram a fumar antes da puberdade tiveram filhos obesos. Mas a obesidade é só a ponta do iceberg. Pesquisadores acreditam que a epigenética seja a chave para desvendar a doença de Alzheimer, a esquizofrenia, o autismo e a diabetes, e sua compreensão dará grande impulso à cura de determinados tipos de câncer. Epigenética é a primeira obra para leigos sobre esse tema-chave do século XXI.A ideia de que hábitos cotidianos e o ambiente em que vivemos podem alterar o "comportamento" dos genes sem modificar o código genético tem nome: epigenética. E nos últimos anos o tema vem se tornando uma das áreas mais intrigantes e promissoras da ciência. Estudos recentes mostram, por exemplo, que homens que começaram a fumar antes da puberdade tiveram filhos obesos. Mas a obesidade é só a ponta do iceberg. Pesquisadores acreditam que a epigenética seja a chave para desvendar a doença de Alzheimer, a esquizofrenia, o autismo e a diabetes, e sua compreensão dará grande impulso à cura de determinados tipos de câncer. Epigenética é a primeira obra para leigos sobre esse tema-chave do século XXI.',
    coverIllustration: require('../img/epigenetica.jpg')
  },
  {
    id: 4,
    title: 'O polegar do violinista',
    subtitle: 'E outras histórias da genética sobre amor, guerra e genialidade',
    author: 'Sam Kean',
    summary: 'O renomado jornalista Sam Kean conta a história da genética até os dias de hoje, em que exames de ponta são capazes de detectar doenças que poderemos desenvolver. Ele mostra como, em algum ponto no emaranhado de fitas do DNA, se encontra a solução de muitos mistérios da espécie humana. Tudo isso entremeado a fantásticas narrativas protagonizadas pelo DNA: as mulheres grávidas que transmitiam câncer aos filhos ainda não nascidos; os sobreviventes de bombas nucleares; a morte precoce dos primeiros exploradores do ártico; o cientista russo que teria criado um híbrido de homem e chimpanzé; e até mesmo casos em que, como o do violinista virtuose Paganini, a ciência esclarece a arte.',
    coverIllustration: require('../img/o-polegar-do-violinista.jpg')
  },
  {
    id: 5,
    title: 'DNA',
    subtitle: 'O segredo da vida',
    author: 'James D. Watson',
    summary: 'Nesse livro, Watson resume os principais acontecimentos que marcaram a biologia, desde os experimentos pioneiros de Mendel e da busca pela eugenia, até as pesquisas mais recentes sobre o funcionamento da molécula de DNA e a intervenção genética. A interferência no genoma de outros organismos abre as portas para a biotecnologia e para o advento dos transgênicos, mas também para a terapia gênica e a medicina do futuro. Em linguagem simples e com dezenas de fotos e esquemas ilustrativos, Watson apresenta os principais personagens dessa história, aponta as perspectivas que podemos esperar do estudo do DNA e discute suas implicações éticas.',
    coverIllustration: require('../img/dna-o-segredo-da-vida.jpg')
  },
  {
    id: 6,
    title: 'As sete filhas de Eva',
    subtitle: null,
    author: 'Bryan Sykes',
    summary: 'Bryan Sykes, um dos mais prestigiados geneticistas mundiais, desenvolve a correlação genética para a teoria dos seis graus de separação ― entre quaisquer duas pessoas do planeta existem no máximo seis intermediários. Depois de analisar um elemento do DNA herdado pela linha materna, Sykes fez o caminho de volta aos tempos pré-históricos e descobriu que 95% de todos os europeus modernos descendem das mesmas mães ancestrais: Úrsula, Xênia, Helena, Velda, Tara, Katrine e Jasmine. As sete filhas de Eva.',
    coverIllustration: require('../img/as-sete-filhas-de-eva.jpg')
  },
];

export default booksData;