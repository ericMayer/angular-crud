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
  // está sendo o [(ngModel)] que é bidirecional, ou seja
  // altera do typescript para o html e do html para o typescript,
  // assim é pegado os valores de nome e preco, depois de cadastrado
  // na api e feito a limpeza dos dois campos
  sucesso(): void {
    this.produtoService.cadastrar(this.produto).subscribe(() => {
      this.produtoService.mensagem("Produto cadastrado com sucesso!!!");
      this.produto.nome = "";
      this.produto.preco = "";
    });
  }

  // quando clicado em cancelar volta para produtos
  cancelar(): void {
    this.rota.navigate(["produtos"]);
  }
}
