


class Produto {

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
    }

    salvar() {
        let produto = this.lerDados();

        if (this.validaCampos(produto)) {
            this.adicionar(produto);

        }
        this.listaTabela();
        this.cancelar();

    }


    // Função criada para adicionar os produtos em tabela, criação de classes no CSS e criação e inserção da tag/img.
    listaTabela() {
        let tbody = document.getElementById("tbody");
        tbody.innerText = "";

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].preco;

            td_id.classList.add("center");
            td_acoes.classList.add("center");

            let imgEdit = document.createElement("img");
            imgEdit.src = "style/editar.png";


            let imgExcluir = document.createElement("img");
            imgExcluir.src = "style/excluir.png";
            imgExcluir.setAttribute("onclick", "produto.deletar("+ this.arrayProdutos[i].id + ")");

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgExcluir);

            console.log(this.arrayProdutos)

        }

    }


    // Função criada para adicionar o elemento no Array sendo chamado na função salvar
    adicionar(produto) {
        this.arrayProdutos.push(produto);
        this.id++;

    }


    // Função para "Ler os Dados", criação de objeto vazio, propriedade ID, nome do produto e 
    // preço de acordo com o que o usuário digitar nos Inputs
    lerDados() {
        let produto = {}

        produto.id = this.id;
        produto.nomeProduto = document.getElementById("produto").value;
        produto.preco = document.getElementById("preco").value;


        return produto;
    }


    // Função criada para verificar se os inputs estão vazios.
    // Última condição criada para verificar se a msg é diferente de vazio
    // retornando false ou true para utilizar na função salvar
    validaCampos(produto) {
        let msg = "";


        if (produto.nomeProduto == "") {
            msg += "Informe o nome do produto \n"
        }

        if (produto.preco == "") {
            msg += "Informe o preço do produto \n"
        }

        if (msg != "") {
            alert(msg);
            return false;
        }
        return true;
    }


    // Função criada para limpar os Inputs
    cancelar() {
        document.getElementById("produto").value = "";
        document.getElementById("preco").value = "";

    }

    //Método criado para dar funcionalidade a imagem de deletar/excluir.
    deletar(id) {

        let tbody = document.getElementById("tbody");

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if (this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i, 1); // Acessa o indice da tabela e exclui apenas 1
                tbody.deleteRow(i); // Atualiza a tabela de forma dinâmica
            }

        }
        console.log(this.arrayProdutos)
    }

}

var produto = new Produto();














































































