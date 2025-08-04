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
pontosDeVida += 38524563;
moedas += 67000;
exeperiencia += 545435639367;
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

//Continuação da jornada nível 1
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

//Prólogo

console.log("Status Atuais:");
console.log(`Nome: ${nome}`);
console.log("----------------------------------------------------------------------");
console.log(`Nível: ${nivel}.`);
console.log(`Pontos de vida: ${vidaAtual}`);
console.log(`Runas: ${moedas}`);
console.log(`Experiência: ${experiencia}`);
console.log(`Arma: ${arma}`);
console.log("----------------------------------------------------------------------");

/* Radagon, um guerreiro nascido ao mundo manchado em sem renome, acreditava que um dia poderia se tornar um Deus. Sozinho, sem donzela e equipamentos, segue seu caminho em busca de força e runas. Passando por inimigos para ao fim alcançar o objetivo, matar Deusa Marika. */

console.log("Seu objetivo é se tornar lorde das Terras Intermédias e vencer a Vontade Maior. Use da terra sua escada para se tornar o maculado mais forte.");

console.log(" ");

console.log("- De longe vejo a térvore que a Vontade Maior guarda e proteje. Preciso entrar dentro dela, e matar o defensor do anel pristino.");

console.log(" ");

console.log("- Muito tempo se passou. Estou dentro da térvore, de cara a cara com Marika, Consorte da vontade Maior. Consigo matar-la?");

console.log(" ");

console.log("Luto com Marika, matando-a e pegando a posse do anel pristino, virando o novo consorte da vontade maior e o Deus do novo mundo.");

/* Radagon, agora Lord do novo mundo, se tornou um Deus. Mas para ele, não é o suficiente. Ele não quer ser Deus apenas das terras intermédias. Ele quer mais. Para onde ele vai agora? */

//Capítulo 1
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

/* Radagon, depois de dominar as terras intermédias parte para uma ilha tão, tão distante, A ilha sombra da térvore.
Chegando na ilha, Radagon senta e faz uma fogueira na entrada de uma caverna. Utiliza alguns gravetos espalhados por ali e com seu poder de chama frenética ele produz o próprio fogo e descança. */

console.log(" ");
console.log("z");
console.log("zz");
console.log("zzz");
console.log("zzzz");
console.log("zzzzzzzzzz...");

/* De manhã Radagon acorda cedo de mais. Ele olha para os lados e vê o motivo. Um mercador estava montando sua barraca ao lado.*/

console.log("Boa tarde! vi que dormiu e não quis incomodar. Onde você está é onde eu fico.🧔🏽"); //Diz o mercador.
console.log("- Ah, perdão, eu não sabia. Utilizei seus gravetos para a fogueira."); //Diz radagon. 
console.log("Não tem problema. Já que está aqui, quer dar uma olhada no que eu trouxe?🧔🏽"); //Mercador.
console.log("Adoraria."); //Radagon.

/* Radagon vai até a carroça do mercador e dá uma olhada.*/

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

/*O mercador fica no local, Radagon veste sua armadura, pega sua arma e segue o caminho que o mapa guia. o Mapa diz que ele deve passar pelo Castelo Tempesvéu e matar Messmer, O homem cobra. Messmer também é um maculado, mas perdeu a orientação da térvore e foi para a a ilha.*/


