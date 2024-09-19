// Tipo (iniciar com letra maiuscula)
type Idade = number
type Pessoa = { // NÃO É O VALOR, é o uma "forma" (contrato)
    nome: string,
    idade: Idade // Usando o TIPO criado anteriormente
    corPreferida?: CorPreferida
}

type CorRGB = 'Vermelho' | 'Verde' | 'Azul'
type CorCMP = 'Ciano' | 'Magenta' | 'Preto'
type CorPreferida = CorRGB | CorCMP // Union type (CorPreferida é união de tudo que tiver em RGB e CMP)

const pessoa: Pessoa = { // Type Annotation (Estou mostrando que seja do tipo Pessoa)
    nome: 'Mimi',
    idade: 1
}

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
    return { ...pessoa, corPreferida: cor } // Spread Operator para não alterar o objeto original e setar a corPreferida, sendo a cor recebida
}

console.log(setCorPreferida(pessoa, 'Magenta'))
console.log(pessoa)