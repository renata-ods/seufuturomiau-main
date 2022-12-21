import {Cat} from "./Cat.js"
import {User} from "./User.js"

const gatinhoUm = new Cat();
gatinhoUm.nome = "Camafeu";
gatinhoUm.cor = "Preta";
gatinhoUm.idade = "Filhote";
gatinhoUm.genero = "Macho";
gatinhoUm.personalidade = "Carinhoso";

const gatinhoDois = new Cat();
gatinhoDois.nome = "Joaquim";
gatinhoDois.cor = "Preto e branco";
gatinhoDois.idade = "Filhote";
gatinhoDois.genero = "Macho";
gatinhoDois.personalidade = "Tagarela";

const gatinhoTres = new Cat();
gatinhoTres.nome = "Vicente";
gatinhoTres.cor = "Cinza e branco";
gatinhoTres.idade = "Adulta";
gatinhoTres.genero = "Macho";
gatinhoTres.personalidade = "Manso";

const pessoaUm = new User();
pessoaUm.nome = "Renata";
pessoaUm.personalidade = "Tagarela";
pessoaUm.idade = "Adulta";
pessoaUm.preferenciaDeCor = "Preto e Branco";
pessoaUm.preferenciaDeGenero = "Macho";

let personalidade = "Tagarela";
pessoaUm.match(gatinhoDois);

console.log("match", gatinhoDois);
console.log(personalidade);

const pessoaDois = new User();
pessoaDois.nome = "Bruno";
pessoaDois.personalidade = "Carinhoso";
pessoaDois.idade = "Adulta";
pessoaDois.preferenciaDeCor = "Laranja";
pessoaDois.preferenciaDeGenero = "Sem preferência";