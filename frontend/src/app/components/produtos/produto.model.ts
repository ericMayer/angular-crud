// será exportado a interface Produto, onde
// o id será opcional, pois quando for fazer
// cadastro não será necessário e o nome
// e preço serão obrigatórios, com interface
// é possível definir quais variáveis, métodos são
// opcionais, obrigatórios, podem ser alterados
// semelhante ao freeze de object em javascript, porém
// com algumas melhorias, por exemplo, deixar uma propriedade
// opcional
export interface Produto {
  id?: number;
  nome: string;
  preco: string;
}
