import { Produto } from "./produto.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

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
  // sucesso a mensagem de erro será setada como falsa
  // é só será alterada em caso de erro para true
  mensagem(msg: string, erro: boolean = false): void {
    this.snackBar.open(msg, "x", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: erro ? ["erro"] : ["sucesso"],
    });
  }

  // será feita uma requisição http
  // no backend, essa requisição retorna um Observable,
  // nesse caso um que será do tipo Produto
  // na requisição está sendo passada a url e o produto
  // que deve ser cadastrado
  // é feito uma verificação se funcionou a requisição ou não
  cadastrar(produto: Produto): Observable<Produto> {
    // return this.http.post<Produto>(this.url, produto);
    return this.http.post<Produto>(this.url, produto).pipe(
      map((objeto) => {
        return objeto;
      }),
      catchError((erro) => {
        return this.pegandoErro(erro);
      })
    );
  }

  // método que faz uma requisição na api para pegar
  // os dados, esse método retorna um Observable que será
  // uma lista de Produto
  carregar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
  }

  // método responsável por fazer a pesquisa do produto
  // pelo id
  // é feito uma verificação se funcionou a requisição ou não
  pesquisaPorId(id: string): Observable<Produto> {
    const url = `${this.url}/${id}`;
    return this.http.get<Produto>(url).pipe(
      map((objeto) => {
        return objeto;
      }),
      catchError((erro) => {
        return this.pegandoErro(erro);
      })
    );
  }

  // método responsável por fazer a atualização
  // do produto
  // é feito uma verificação se funcionou a requisição ou não
  atualiza(produto: Produto): Observable<Produto> {
    const url = `${this.url}/${produto.id}`;
    return this.http.put<Produto>(url, produto).pipe(
      map((objeto) => {
        return objeto;
      }),
      catchError((erro) => {
        return this.pegandoErro(erro);
      })
    );
  }

  // método responsável por fazer a deleção do produto
  // é feito uma verificação se funcionou a requisição ou não
  deletar(id: string): Observable<Produto> {
    const url = `${this.url}/${id}`;
    return this.http.delete<Produto>(url).pipe(
      map((objeto) => {
        return objeto;
      }),
      catchError((erro) => {
        return this.pegandoErro(erro);
      })
    );
  }

  // return um Observable vazio é passa a mensagem de erro e informa
  // que ocorreu um erro
  pegandoErro(erro: any): Observable<any> {
    this.mensagem(
      "Ocorreu um erro na aplicação, por favor tente mais tarde",
      true
    );
    return EMPTY;
  }
}
