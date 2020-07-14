import { Produto } from "./produto.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

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
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  url = "http://localhost:3000/produtos";

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

  // será feita uma requisição http
  // no backend, essa requisição retorna um Observable,
  // nesse caso um que será do tipo Produto
  // na requisição está sendo passada a url e o produto
  // que deve ser cadastrado
  cadastrar(produto: Produto): Observable<Produto> {
    // return this.http.post<Produto>(this.url, produto);
    return this.http.post<Produto>(this.url, produto);
  }

  // método que faz uma requisição na api para pegar
  // os dados, esse método retorna um Observable que será
  // uma lista de Produto
  carregar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
  }
}
