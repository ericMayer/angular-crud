import { Router } from "@angular/router";
import { ProdutoService } from "./../produto.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-produto-criar",
  templateUrl: "./produto-criar.component.html",
  styleUrls: ["./produto-criar.component.css"],
})
export class ProdutoCriarComponent implements OnInit {
  constructor(private rota: Router, private produtoSerice: ProdutoService) {}

  ngOnInit(): void {}

  sucesso(): void {
    this.produtoSerice.mensagem("Cadastrado com sucesso!!!");
  }

  cancelar(): void {
    this.rota.navigate(["produtos"]);
  }
}
