import { HeaderService } from "./../../components/template/header/header.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],
})
export class ContentComponent implements OnInit {
  constructor(private headerService: HeaderService) {
    // aqui os valores devem ser alterados dos dados
    // que são exibidos no header, por isso é passado
    // os valores correspondentes
    headerService.headerData = {
      titulo: "Início",
      icone: "home",
      urlRota: "/",
    };
  }

  ngOnInit(): void {}
}
