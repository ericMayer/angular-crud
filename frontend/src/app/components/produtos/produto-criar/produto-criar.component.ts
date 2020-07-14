import { Router } from "@angular/router";
import { ProdutoService } from "./../produto.service";
import { Component, OnInit } from "@angular/core";
import { Produto } from "../produto.model";

@Component({
  selector: "app-produto-criar",
  templateUrl: "./produto-criar.component.html",
  styleUrls: ["./produto-criar.component.css"],
})
export class ProdutoCriarComponent implements OnInit {
  constructor(private rota: Router, private produtoService: ProdutoService) {}

  // Produto que será cadastrado
  produto: Produto = {
    nome: "",
    preco: null,
  };

  ngOnInit(): void {}

  // quando for clicado no botão cadastrar,
  // será executado o método de service que faz
  // o cadastro do produto, como ele retorna um observable
  // é usado o subscribe para que seja avisado quando finalizar,
  // assim será exibido a mensagem de sucesso após o cadastro
  sucesso(): void {
    this.produtoService.cadastrar(this.produto).subscribe(() => {
      this.produtoService.mensagem("Cadastrado com sucesso!!!");
    });
  }

  // quando clicado em cancelar volta para produtos
  cancelar(): void {
    this.rota.navigate(["produtos"]);
  }
}
