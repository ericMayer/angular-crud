import { ProdutoService } from "./../produto.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Produto } from "../produto.model";

@Component({
  selector: "app-produto-deletar",
  templateUrl: "./produto-deletar.component.html",
  styleUrls: ["./produto-deletar.component.css"],
})
export class ProdutoDeletarComponent implements OnInit {
  constructor(
    private produtoService: ProdutoService,
    private rotaId: ActivatedRoute,
    private rota: Router
  ) {}

  produto: Produto = {
    nome: "",
    preco: null,
  };

  // carregando dados iniciais na tela para ser feita
  // a confirmação de exclusão
  ngOnInit(): void {
    const id = this.rotaId.snapshot.paramMap.get("id");
    this.produtoService.pesquisaPorId(id).subscribe((item) => {
      this.produto = item;
    });
  }

  // chamando método de deleção quando for clicado no botão
  deletar(): void {
    const id = this.rotaId.snapshot.paramMap.get("id");
    this.produtoService.deletar(id).subscribe(() => {
      this.produtoService.mensagem("Produto deletado com sucesso!!!");
      this.rota.navigate(["/produtos"]);
    });
  }

  // cancelando deleção
  cancelar(): void {
    this.rota.navigate(["/produtos"]);
  }
}
