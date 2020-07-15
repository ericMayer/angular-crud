import { HeaderService } from "./../../components/template/header/header.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-produto-crud",
  templateUrl: "./produto-crud.component.html",
  styleUrls: ["./produto-crud.component.css"],
})
export class ProdutoCrudComponent implements OnInit {
  constructor(private rota: Router, headerService: HeaderService) {
    // aqui os valores devem ser alterados dos dados
    // que são exibidos no header, por isso é passado
    // os valores correspondentes
    headerService.headerData = {
      titulo: "Produtos",
      icone: "store",
      urlRota: "/produtos",
    };
  }

  ngOnInit(): void {}

  // navegando até a rota de criação de produtos
  navegando(): void {
    this.rota.navigate(["produto/criar"]);
  }
}
