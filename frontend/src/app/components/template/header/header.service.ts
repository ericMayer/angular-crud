import { HeaderData } from "./header.data.model";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HeaderService {
  constructor() {}

  // criado uma váriavel privada acessível apenas nessa classe
  // é utilizado o Behavior para fazer a troca de informações
  // entre os componentes, será trocado o título da página
  // o ícone e a url da rota
  private _headerData = new BehaviorSubject<HeaderData>({
    titulo: "",
    icone: "",
    urlRota: "",
  });

  // como o método é privado, é necessário usar o getter e
  // e o setter para pegar o valor e alterar
  // pegando valor
  get headerData(): HeaderData {
    return this._headerData.value;
  }

  // alterando valor
  set headerData(novosDados: HeaderData) {
    this._headerData.next(novosDados);
  }
}
