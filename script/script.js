


class Produto {

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
        this.editId = null;
    }

    salvar() {
        let produto = this.lerDados();

        if (this.validaCampos(produto)) {
            if (this.editId == null) {
                this.adicionar(produto);
            } else {
                this.atualizar(this.editId, produto);
            }
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
            imgEdit.setAttribute("onclick", "produto.preparaEditacao(" + JSON.stringify(this.arrayProdutos[i]) + ")");



            let imgExcluir = document.createElement("img");
            imgExcluir.src = "style/excluir.png";
            imgExcluir.setAttribute("onclick", "produto.deletar(" + this.arrayProdutos[i].id + ")");

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgExcluir);

            console.log(this.arrayProdutos);

        }

    }


    // Função criada para adicionar o elemento no Array sendo chamado na função salvar
    adicionar(produto) {
        produto.preco = parseFloat(produto.preco);
        this.arrayProdutos.push(produto);
        this.id++;

    }

    // Método criado para atualizar o produto e retornar na tabela limpando o anterior e sobrepondo com o novo dado.
    atualizar(id, produto){
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
                this.arrayProdutos[i].preco = produto.preco;
            }
        }

    }

    // Função criada para editar os dados do produto via imagem e retornar no input para edição dos dados
    preparaEditacao(dados) {
        this.editId = dados.id;

        document.getElementById("produto").value = dados.nomeProduto;
        document.getElementById("preco").value = dados.preco;

        document.getElementById("btn1").innerText = "Atualizar";

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

        document.getElementById("btn1").innerText = "Salvar";
        this.editId = null;

    }

    //Método criado para dar funcionalidade a imagem de deletar/excluir.
    deletar(id) {

        if (confirm("Deseja realmente deletar o produto do ID " + id)) {

            let tbody = document.getElementById("tbody");

            for (let i = 0; i < this.arrayProdutos.length; i++) {
                if (this.arrayProdutos[i].id == id) {
                    this.arrayProdutos.splice(i, 1); // Acessa o indice da tabela e exclui apenas 1
                    tbody.deleteRow(i); // Atualiza a tabela de forma dinâmica
                }

            }
            console.log(this.arrayProdutos)
        }

    }

}

var produto = new Produto();














































































