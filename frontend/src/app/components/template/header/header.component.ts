import { HeaderService } from "./header.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {}

  // no header, onde é exibido os dados,
  // está pegando os valores dos dados
  // no html é usado a interpolação double mustache
  // para acessar esses valores
  get titulo(): string {
    return this.headerService.headerData.titulo;
  }

  get icone(): string {
    return this.headerService.headerData.icone;
  }

  get urlRota(): string {
    return this.headerService.headerData.urlRota;
  }
}
