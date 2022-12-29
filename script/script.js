


class Produto {

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
    }

    salvar() {
        let produto = this.lerDados();
        console.log(produto)

    }

    lerDados() {
        let produto = {}

        produto.id = this.id;
        produto.nomeProduto = document.getElementById("produto").value;
        produto.preco = document.getElementById("preco").value;


        return produto;
    }

    cancelar() {


    }
}

var produto = new Produto();














































































