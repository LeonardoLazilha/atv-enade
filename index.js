class No {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
  }
}

class ListaEncadeada {
  constructor() {
    this.topoLista = null;
    this.FimLista = null;
    this.tamanho = 0;
  }

  inserirPorPrioridade(valor, cor) {
    const novoNo = new No(valor);
    if (cor === "amarelo") {
      if (!this.topoLista || cor === "amarelo") {
        novoNo.proximo = this.topoLista;
        this.topoLista = novoNo;
        if (!this.FimLista) {
          this.FimLista = novoNo;
        }
        this.tamanho++;
        return this;
      } else {
        let atual = this.topoLista;
        while (atual.proximo && atual.proximo.cor !== "amarelo") {
          atual = atual.proximo;
        }
        novoNo.proximo = atual.proximo;
        atual.proximo = novoNo;
        this.tamanho++;
        return this;
      }
    } else {
      if (!this.topoLista || this.topoLista.cor === "verde") {
        novoNo.proximo = this.topoLista;
        this.topoLista = novoNo;
        if (!this.FimLista) {
          this.FimLista = novoNo;
        }
        this.tamanho++;
        return this;
      } else {
        let atual = this.topoLista;
        while (atual.proximo && atual.proximo.cor !== "verde") {
          atual = atual.proximo;
        }
        novoNo.proximo = atual.proximo;
        atual.proximo = novoNo;
        this.tamanho++;
        return this;
      }
    }
  }
}
