import { MatSnackBar } from "@angular/material/snack-bar";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})

// Criado um service provido a partir do root da aplicação,
// onde ele poderá ser injetado em outras classes,
// o angular por baixo dos panos usa o padrão de projeto singleton
// para criar apenas uma instância sempre que for chamado essa classe,
// por exemplo se tivesse uma variável x++, cada vez que fosse injetado
// esse serviço a variável iria aumentar em 1, se fosse chamado em duas
// classes x e y, o valor final seria 2
export class ProdutoService {
  constructor(private snackBar: MatSnackBar) {}

  // usando mensagem de snackbar, adicionando
  // na direita e no topo, a duração será 3s,
  // terá um botão de fechar x e é adicionado a classe
  // sucesso
  mensagem(msg: string): void {
    this.snackBar.open(msg, "x", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: "sucesso",
    });
  }
}
