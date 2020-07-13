import {
  Directive,
  Input,
  ViewContainerRef,
  TemplateRef,
  OnInit,
} from "@angular/core";

@Directive({
  selector: "[for]",
})
export class ForDirective implements OnInit {
  @Input("forEm") numeros: Number[];

  // Diretiva de estrutura, onde será criado um container
  // para adicionar os dados
  // o template será a estrutura do dado,
  // li, a, tr, td
  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  // no ngOnInit da classe OnInit que está sendo implementada
  // na classe ForDirective, está sendo um for na lista
  // de números que foi pega do html usando a diretiva estrutural
  // com isso é criado um novo elemento e adicionado o seu respectivo
  // número no argumento implicit para exibir no html
  ngOnInit(): void {
    for (let n of this.numeros) {
      this.container.createEmbeddedView(this.template, { $implicit: n });
    }
  }
}
