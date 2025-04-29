class Produto {
    nome;
    marca;
    preco;

    adicionar(nome, marca, preco) {
        this.nome = nome;
        this.marca = marca;
        this.preco = preco;
        console.log("O produto " + this.nome + " da marca " + this.marca + " foi adicionado ao estoque no valor de " + this.preco + " reais.");
    
    }
}

var produto1 = new Produto();
produto1.adicionar("Hidratante Labial", "Nívea", 5);

var produto2 = new Produto();
produto2.adicionar("Body Splash", "Victoria Secrets", 170);