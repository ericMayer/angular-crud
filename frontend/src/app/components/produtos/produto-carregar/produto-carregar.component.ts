import { Produto } from "./../produto.model";
import { ProdutoService } from "./../produto.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-produto-carregar",
  templateUrl: "./produto-carregar.component.html",
  styleUrls: ["./produto-carregar.component.css"],
})
export class ProdutoCarregarComponent implements OnInit {
  constructor(private produtoService: ProdutoService) {}

  produtos: Produto[];
  colunas: Array<String> = ["id", "nome", "preco", "acoes"];

  // foi criado um array de Produto e injetado a
  // classe do service de produto, é executado
  // o método de carregar de service e usado o subscribe
  // para pegar a resposta, semelhante ao then de promises
  // com o valor da respota é alterado a lista de produtos
  ngOnInit(): void {
    this.produtoService.carregar().subscribe((produto) => {
      this.produtos = produto;
    });
  }
}
