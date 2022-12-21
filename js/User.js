export class User {
    nome;
    personalidade;
    idade;
    preferenciaDeCor;
    preferenciaDeGenero;

    match(gatinho) {
        if(this.personalidade == gatinho.personalidade){

            // DEU MATCH!
            console.log("DEU MATCH entre " + this.nome + " " + this.personalidade + " e o gatinho " + gatinho.nome + " " + gatinho.personalidade);
        } else {
            // NÃO DEU.......
            console.log("Não rolou match entre " + this.nome + " " + this.personalidade + " e o gatinho " + gatinho.nome + " " + gatinho.personalidade);
        }

        
    }

}