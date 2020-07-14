import { Observable } from "rxjs";
import { Produto } from "./../produto.model";
import { Router, RouterLink, ActivatedRoute } from "@angular/router";
import { ProdutoService } from "./../produto.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-produto-atualizar",
  templateUrl: "./produto-atualizar.component.html",
  styleUrls: ["./produto-atualizar.component.css"],
})
export class ProdutoAtualizarComponent implements OnInit {
  constructor(
    private produtoService: ProdutoService,
    private rota: Router,
    private rotaId: ActivatedRoute
  ) {}

  produto: Produto;

  // quando for iniciado o componente, seré pego o parâmtero id
  // que foi passado na url e depois será feito uma pesquisa por id
  // utilizando o service, depois disso será esperado a resposta
  // dai será substituído o produto pelo item da respota, depois
  // no html será puxado os parâmetros para exibir no input
  ngOnInit(): void {
    const id = this.rotaId.snapshot.paramMap.get("id");
    this.produtoService.pesquisaPorId(id).subscribe((item) => {
      this.produto = item;
    });
  }

  // quando clicado em cancelar volta para produtos
  cancelar(): void {
    this.rota.navigate(["produtos"]);
  }

  // realizando atualização do produtos
  // os dados já estão salvos na variável produto, então é
  // só fazer a atualização e voltar para a tela de listagem
  // dos produtos
  atualizar(): void {
    this.produtoService.atualiza(this.produto).subscribe(() => {
      this.produtoService.mensagem("Alterado com sucesso!!!");
      this.rota.navigate(["produtos"]);
    });
  }
}
