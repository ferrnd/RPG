//Definições básicas.
let nome = "Radagon";
let tipoHeroi = "Guerreiro";
let nivel = 1;
let pontosDeVida = 100;
let moedas = 0; //Runas.
let exeperiencia = 0;

console.log(`Nome: ${nome}`);
console.log(`Classe Atual: ${tipoHeroi}`);
console.log(" ")

//Status.
console.log(`O começo da sua história, ${nome}. você vem ao mundo como um maculado.`);
console.log("----------------------------------------------------------------------");
console.log("Seu Status Iniciais:");
console.log(`Nível: ${nivel}.`);
console.log(`Pontos de vida: ${pontosDeVida}`);
console.log(`Runas: ${moedas}`); //Runas é uma recompensa que você acumula matando inimigos. Servem para comprar itens e trasformar runas em força.
console.log(`Experiência: ${exeperiencia}`);
console.log("----------------------------------------------------------------------");
console.log("Seu objetivo é se tornar lorde das Terras Intermédias e vencer a Vontade Maior. Use da terra sua escada para se tornar o maculado mais forte.");

//Definições que nunca vão mudar.
const DANOBASE = 10; // (Punhos)
const DEFESABASE = 40;

//Jornada.
console.log("----------------------------------------------------------------------");
console.log("- Eu saio para explorar o local onde nasci, Lingrave. Durante o meu trajeto, Tive que matar alguns esquisitóides que vieram para cima de mim.");
console.log("----------------------------Lingrave----------------------------------");
console.log("Inimigo morto. +200 Runas.");
moedas += 200;
exeperiencia += 200;
console.log(" ");
console.log("- Durante meu caminho eu encontro uma Igreja, Igreja de Ellen. Nela possuia uma lágrima sagrada, que tomando-a, me concedia Vida.")
pontosDeVida += 200;
console.log(" ");
console.log("- Nessa mesma igreja, havia um mercador nômade, Strauss. Ele me contou do que devo fazer adiante, e me vendeu algus items em troca de runas.");
console.log(" ");
console.log("Intens a venda:");
console.log("~~-------/-------~~");
console.log("Poção de Vida - 100 Runas");
console.log("Poção de cura - 300 Runas");
console.log("Banjo - 1400 Runas");
console.log("~~-------/-------~~");
console.log(" ");
console.log("- Levei uma poção de Vida, Pagando 100 Runas. Em seguida, uso-a.");
moedas -= 100;
pontosDeVida += 200;
console.log(" ")
console.log("- Na igreja, eu vou para um canto e treino com meus punhos alguns movimentos.")
exeperiencia += 500;
console.log("------------------");
console.log("Subiu de nível.");
console.log("------------------");
nivel++;
console.log("- Calejei meus punhos.");
let danoTotal = DANOBASE * 2;
console.log(" ")
console.log("- Preciso descançar. Faço uma fogueira e pego no sono.")
console.log(" ")
console.log(".")
console.log("..")
console.log("...")
console.log("Status Atual:")

//Status.
console.log("----------------------------------------------------------------------");
console.log(`Nível: ${nivel}.`);
console.log(`Pontos de vida: ${pontosDeVida}`);
console.log(`Runas: ${moedas}`);
console.log(`Experiência: ${exeperiencia}`);
console.log("----------------------------------------------------------------------");

let ataqueTotal = nivel + danoTotal;
let defesaTotal = DEFESABASE + (nivel / 2);

//Condições.
let vidaSuficiente = true;
let ataqueForte = true;
let nivelAvancado = false;
let podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado);
console.log("- De manhã, segui o caminho que Strauss me disse. De longe avistei um humanoide Gigante guardando o portão da próxima área. Eu precisava mata-lo. Eu consigo?");
console.log(podeEnfrentarGuardiao);

console.log("- Mato o guardião e avanço.");
console.log("-------------------------Platos Altus-------------------------------");
console.log("- De longe vejo a térvore que a Vontade Maior guarda e proteje. Preciso entrar dentro dela, e matar o defensor do anel pristino.");
console.log("Preciso ficar mais forte para isso.");
console.log(" ");
console.log("-------------------")
console.log("9 meses se passaram.")
console.log("-------------------")
console.log(" ")

//Status.
nome = "Radagon, O maculado Sem renome."
nivel += 711;
pontosDeVida += 1290;
moedas += 67000;
exeperiencia += 99976;
let arma = "Martelo Sagrado Imbuído com chama frenética"

console.log("Status Atuais:")
console.log(`Nome: ${nome}`);
console.log("----------------------------------------------------------------------");
console.log(`Nível: ${nivel}.`);
console.log(`Pontos de vida: ${pontosDeVida}`);
console.log(`Runas: ${moedas}`);
console.log(`Experiência: ${exeperiencia}`);
console.log(`Arma: ${arma}`)
console.log("----------------------------------------------------------------------");
ataqueTotal = nivel + danoTotal;
defesaTotal = DEFESABASE + (nivel / 2);

console.log("- Muito tempo se passou. Estou dentro da térvore, de cara a cara com Marika, Consorte da vontade Maior. Consigo matar-la?");

let possoMatarMarika = true;
console.log(possoMatarMarika);

console.log("Luto com Marika, matando-a e pegando a posse do anel pristino, virando o novo consorte da vontade maior e o Deus do novo mundo.");

//Status.
nome = "Ragadon, Lord do novo mundo.";
console.log(" ")
console.log("------------------------------------------")
console.log("Status:");
console.log(nome);
console.log("------------------------------------------")
console.log(" ")
console.log("Fim.")
console.log("---------------------------------------------------------")
console.log("Continuação da jornada nível 1");
console.log("---------------------------------------------------------")
nome = "Radagon, lord do novo mundo";
let classe = "Guerreiro";
let vidaAtual = 1390;
let vidaMaxima = 1390;
let manaAtual = 500;
let manaMaxima = 500;
nivel = 713;
moedas = 67000;
let experiencia = 999067;
arma = "Martelo Sagrado Imbuído com chama frenética";

//Novos atributos para batalha
let forca = 40; //Punhos
let defesa = 100;
let agilidade = 30;
let combateVencidos = 1346;

//Estado atual da história
let localAtual = "Platô Altus";
let missaoAtual = "Matar miquella, consort de Radhan";
console.log("---------------------------------------------------------")
console.log("Prólogo");
console.log("---------------------------------------------------------")
console.log("Status Atuais:");
console.log(`Nome: ${nome}`);
console.log("----------------------------------------------------------------------");
console.log(`Nível: ${nivel}.`);
console.log(`Pontos de vida: ${vidaAtual}`);
console.log(`Runas: ${moedas}`);
console.log(`Experiência: ${experiencia}`);
console.log(`Arma: ${arma}`);
console.log("----------------------------------------------------------------------");

console.log("Radagon, um guerreiro nascido ao mundo manchado em sem renome, acreditava que um dia poderia se tornar um Deus. Sozinho, sem donzela e equipamentos, segue seu caminho em busca de força e runas. Passando por inimigos para ao fim alcançar o objetivo, matar Deusa Marika.")
console.log("----------------------------------------------------------------------");

console.log("Seu objetivo é se tornar lorde das Terras Intermédias e vencer a Vontade Maior. Use da terra sua escada para se tornar o maculado mais forte.");
console.log("----------------------------------------------------------------------");
console.log(" ");

console.log("- De longe vejo a térvore que a Vontade Maior guarda e proteje. Preciso entrar dentro dela, e matar o defensor do anel pristino.");

console.log(" ");

console.log("- Muito tempo se passou. Estou dentro da térvore, de cara a cara com Marika, Consorte da vontade Maior. Consigo matar-la?");

console.log(" ");

console.log("Luto com Marika, matando-a e pegando a posse do anel pristino, virando o novo consorte da vontade maior e o Deus do novo mundo.");
console.log("----------------------------------------------------------------------");

console.log("Radagon, agora Lord do novo mundo, se tornou um Deus. Mas para ele, não é o suficiente. Ele não quer ser Deus apenas das terras intermédias. Ele quer mais. Para onde ele vai agora?")
console.log("----------------------------------------------------------------------");

console.log("Capítulo 1");
nome = "Radagon, lord do novo mundo";
classe = "Guerreiro";
vidaAtual = 1390;
vidaMaxima = 1390;
manaAtual = 500;
manaMaxima = 500;
nivel = 713;
moedas = 67000;
experiencia = 999067;
arma = "Martelo Sagrado Imbuído com chama frenética";
console.log("----------------------------------------------------------------------");

console.log("Radagon, depois de dominar as terras intermédias parte para uma ilha tão, tão distante, A ilha sombra da térvore.Chegando na ilha, Radagon senta e faz uma fogueira na entrada de uma caverna. Utiliza alguns gravetos espalhados por ali e com seu poder de chama frenética ele produz o próprio fogo e descança.");
console.log("----------------------------------------------------------------------");
console.log(" ");
console.log("z");
console.log("zz");
console.log("zzz");
console.log("zzzz");
console.log("zzzzzzzzzz...");
console.log("----------------------------------------------------------------------");

 console.log("De manhã Radagon acorda cedo de mais. Ele olha para os lados e vê o motivo. Um mercador estava montando sua barraca ao lado.");
 console.log(" ")

console.log("Boa tarde! vi que dormiu e não quis incomodar. Onde você está é onde eu fico.🧔🏽"); //Diz o mercador.
console.log("- Ah, perdão, eu não sabia. Utilizei seus gravetos para a fogueira."); //Diz radagon. 
console.log("Não tem problema. Já que está aqui, quer dar uma olhada no que eu trouxe?🧔🏽"); //Mercador.
console.log("Adoraria."); //Radagon.
console.log(" ")

console.log("Radagon vai até a carroça do mercador e dá uma olhada.");

console.log(" ");
console.log("--------//--------");
console.log("Elmo Crisol, usado por um Mongol. Perfeito estado. - 40000 Runas");
console.log("Anel de Dedo, Brilho Eterno. Produz luz a todo momento enquando equipado. - 2000 Runas");
console.log("Livro de magia de rellana - 70000 Runas.");
console.log("--------//--------");
console.log(" ");
console.log("- Não possuo muitas Runas. Nnenhum item me interessa."); //Diz Radagon.
console.log("Hmmm, mas e se... Eu te vender um mapa?🧔🏽");//Diz o mercador.
let mapaMagico = 67000;
console.log("- Que tipo de mapa?");//Diz Radagon.
console.log("Um mapa com magia que pode te guiar até seus objetivos... Você não tem cara que conhce muito aqui.🧔🏽");//Diz o mercador.
console.log("- Bom, tudo bem. Realmente não possuo conhecimento nenhum daqui.");//Diz Radagon.
console.log("Eu te vendo por 67 mil Runas.🧔🏽");//Diz o mercador.
console.log("- 50 mil?");//Diz Radagon.
console.log("Nem mais, nem menos.🧔🏽");//Diz o mercador.
console.log("- Me dê um tempo para pensar.");//Diz Radagon.

if (moedas >= mapaMagico) {
    moedas -= 67000;
    console.log("- Vou comprar.")
    console.log("Boa troca! hehehehehe.🧔🏽");
    console.log(" ");
    console.log(`Runas totais: ${moedas}`);
} else {
    console.log("Você não tem condições de ter isso. 🧔🏽");
}
console.log("----------------------------------------------------------------------");

console.log("O mercador fica no local, Radagon veste sua armadura, pega sua arma e segue o caminho que o mapa guia. o Mapa diz que ele deve passar pelo Castelo Tempesvéu e matar Messmer, O homem cobra. Messmer também é um maculado, mas perdeu a orientação da térvore e foi para a a ilha.");
console.log("----------------------------------------------------------------------");

console.log("Capítulo 2");
console.log("----------------------------------------------------------------------");

console.log("Radagon segue caminho Até o castelo Tempesvéu. Durante a jornada muitos inimigos fracos tentam roubar e matar Radagon, porém, Radagon era forte de mais para eles. Ele oblitera todos e ganha runas.");
console.log("----------------------------------------------------------------------");
moedas += 30000;

console.log("Na porta do castelo, tem um enorme portão. Olhando pelos furos, existia milhares de cata-pulta e soldados bem posicionados protegendo o portão. Radagon vai dar a volta?");
console.log("----------------------------------------------------------------------");

console.log(" ")

if (nivel >= 670 && agilidade >= 10 && forca >= 20) {
    console.log("Vou pelo portão. Posso desviar e matar eles por trás.");
} else if (nivel < 670 || agilidade < 10 || forca < 20) {
    console.log("Vou por outro caminho.");
} else {console.log("Preciso treinar por mais um tempo.");

}

console.log(" ");

console.log("Radagon vai pelo portão da frente, desvia das flechas e ataca os atiradores. Aproxima-se das cata-pultas antes mesmo de serem acionadas e corta a garganta do armador. Radagon segue caminho pelo castelo, só que agora, seus inimigos inferiores pelo castelo temem á ele, não se aproximam e se enrolam, com medo de Radagon.");

console.log("Radagon olha o mapa, e acha a sala de Messmer. Uma sala gigante que parecia vazia, com estantes de livros e um lustre tão grande no teto mais ou medos 150 metros acima da cabeça de radagon. Até que derrepente algo se estala e Radagon olha pra trás. Messmer, em carne e osso, encara Radagon. Após um tempo de clima frio e sem palvras ditas, Messer diz:");
console.log(" ")

console.log("Um maculado que se tornou lorde nunca poderia devorar a escuridão e trazer a luz para o Reino das sombras.🐍");
console.log("Essa será a sua última batalha, maculado sem renome.🐍");
console.log("");
console.log("---------------------------------------------------------");

console.log("Messmer avança em Radagon, com sua lança curvada em formato de cobra. Radagon desvia e segura seu martelo. Uma batalha de Veneno e Fé começa. Um quer restaurar a Luz, e outro quer se esconder na escuridão. Passam-se 30 minutos de luta, os dois estão Puramente cansados e sem fôlego. Cortes profundos, dores extremas, e Radagon com seus ogãos ardendo cada vez mais por conta do veneno no corpo. Messmer cai de joelhos, porem Radagon não tem força para alcança-lo. Messmer diz algo, olhando para o lustre, onde não há nada, e sua voz apenas profere um eco");
console.log("---------------------------------------------------------");

pontosDeVida -= 890;
console.log("Oh mãe, me perdoe. Um lorde maculado fraco está tentando me tirar daqui. E eu, não sou capaz de segura-lo.🐍");
console.log("---------------------------------------------------------");

console.log("Mesmmer arranca o olho direito, que a propósito era o olho de uma cobra. Ele esmaga e um vento forte junto com luz e gritos surgem. Uma cobra gigante aparece na lança de Mesmmer, junto com cobras enormes saindo de seus braços e cabelos. Lembrava a Medusa. Radagon, durante esse tempo, usou uma poção que ele adiquiriu de um mercador nômade há um tempo. Ela tirou o efeito negativo de veneno e aumentou o processo de cura dos cortes. Um buff.");
console.log("---------------------------------------------------------");
pontosDeVida += 5000;

console.log("Radagon se levanta, pronto para lutar de novo.");
console.log("---------------------------------------------------------");
console.log("Capítulo 3.");
console.log("Por que você continua lutando? a custo de que?🐍");
console.log("- Não é questão de querer ser mais forte. Eu quero poder trazer ordem e um mundo bom para todos.");
console.log("Desista.🐍");
console.log("---------------------------------------------------------");
console.log("Messmer ataca Ragadon. Porém, com apenas um olho e o sentimento de insuficiência e fraquesa, Messer erra. Radagon acerta um golpe crítico em Messmer e ele se ajoelha enquando cospe sangue pela boca. Tenta invocar suas cobras e não consegue, está fraco de mais. Todo esse tempo gurdando o caminho para a térvore das sombras, sendo disperdiçado por um Maculado qualquer. A única herança de sua mãe que possuia era seu olho. E Messmer o esmagou procurando poder, e obteve mágoas.");
console.log("---------------------------------------------------------");
console.log("Eu não quero morrer... Por que isso? o que eu fiz de errado? Mãe? Oh mãe, você está orgulhosa de mim?🐍");
console.log("Eu pensei que podia vencer ele, desculpa.")
console.log("---------------------------------------------------------");
console.log("Messmer cai, de frente com um quadro que pintaste, era ele junto com sua mãe. Ele fecha os olhos gradualmente, focando o seu olhar no quadro. E, seu último uspiro é feito. Messer, O guardião da térvore, foi oficialmente morto, dentre 300 anos.");
console.log("---------------------------------------------------------");
console.log("Radagon, por mais que cançado, honrou a sua batalha. ele enterra Messmer de frente ao castelo e segue o caminho até a térvore. Duas horas de caminhada de uma ponte que parecia sem fim, finalmente acabam. Radagon, em frente a térvore, vendo ela escura e com suas vinas pretas de escuridão cobrindo-a. Radagon levanta seu martelo, deixando seu poder de chama frenética para trás, para que assim possa queimar as vinas. Um enorme fogaréu começa. O céu cinza, se torna claro. A grama morta, revive. As vidas não nascidas, nascem. Radagon, agora, restaurou a ordem ao mundo. Aqueles que erraram, foram perdoados, os alamdiçoados, foram libertos, os fracos se tornaram forte e a espernça foi restabelecida ao mundo, deixando de lado toda aquela escuridão. Anos se passaram e Radagon deixa seu trono, sem ningúem para enterra-lo. Ninguém nunca soube de seu feito e o que fez por todos eles. Sem um sucessor, a térvore é selada com vinas novamente, sendo impenetrável pelo resto da eternidade. Apesar de não reconhecido, ele fez um bom trabalho. Por fim, Radagon descançou em paz, selado junto da térvore, e tornando-se parte dela.");
console.log(" ");
console.log("Fim.")
console.log(" ");
console.log("Não é porque foi dito 'Fim' que realmente terá um fim.");
console.log("--------------------------------------------------------");
console.log("Guiado pela graça, um novo maculado sem renome surge...");

let nomePersonagem = "Thorfinn";
let classePersonagem = "Ladino";
let nivelPersonagem = 10;
let vidaPersonagem = 100;
let ouroPersonagem = 50;

console.log("~~//--Status--//~~");
console.log(`Nome: ${nomePersonagem}
    Classe: ${classePersonagem}
    Nível: ${nivelPersonagem}
    Vida: ${vidaPersonagem}
    Ouro: ${ouroPersonagem}`);
console.log("~~//---//----//~~")
console.log("Diferente de Radagon, thorfinn procura benefícios próprios. e essa, é sua história:");
let inventario = ["Adaga", "Adaga", "Pano", "Maçã"];
console.log("--------------------------------------------------------");
console.log("Droga, onde estou? parece um tipo de caverna... Acabei me perdendo quando vim pra essas terras estranhas... Preciso checar meu inventário");
console.log(" ")
console.log(`Inventário: ${inventario}`);
console.log(" ")
console.log("Como assim eu só tenho uma maçã? acho que já comi as outras... Vou comer essa. Meu estômago está embrulhando.");

inventario.pop();

console.log(`Inventário atual: ${inventario}`);
console.log("");
console.log("agora eu preciso ir. Quero ficar mais forte e ganhar mais dinheiro.");
console.log("");
console.log("--------------------------------------------------------");
console.log("No caminho, thorfinn acha alguns gnomos orelhudos, mas não sabe se são inimigos ou aliados.");
console.log("--------------------------------------------------------");
console.log("");
console.log("Ei, por que vem em minha direção??");
console.log("Acalme-se rapaz, só estamos aqui para te fazer uma proposta");
console.log("Que proposta?");
console.log("Queremos te chamar pra invadir o castelo dos ARRAYS com a gente. Você parece forte. Ganhariamos uma boa quantidade de dinheiro com isso. A propósito, sou Berk. Ele é Rashk, ele alí é o Yesra e aquele alí é o Cherek");
console.log("Prazer, todos vocês. Sou Thorfinn e aceito a proposta. Seremos bom aliados.");
console.log("");
let aliados = ["Berk", "Rashk", "Yesra", "Cherek"]
console.log(`Aliados: ${aliados}`);
console.log("");
console.log("--------------------------------------------------------");
console.log("Thorfinn parte em uma jornada até o castelo ARRAYS com seus aliados, planejando roubar todo o ouro para si. Era um caminho grande, distante, demorado, difícil. Passaram horas, dias, semanas e meses.");
console.log("--------------------------------------------------------");
console.log("");
console.log("Finalmente. Eu posso finalmente ver o castelo.");
console.log("Berk ficaria orgulhoso da gente.");
console.log("Sim.");
console.log("");

aliados.shift();
console.log(`Aliados: ${aliados}`);
console.log("");
console.log("Vamos descançar aqui. Precisamos de energia amanhã.");
console.log("--------------------------------------------------------");
console.log("Thorfinn e seus aliados montam uma barraca e descançam. Esperam chegar amanhã cedo para finalmente atacar. Thorfinn não conseguia dormir direito, pois eles são apenas em 4, e o castelo é denfendido por mais de 200 soldados de Forss.");






