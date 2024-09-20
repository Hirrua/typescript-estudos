const nome: string = 'Mimi' // Type Annotations
const nome_ = 'Mimizinha' // Literal (Aqui o TS inferiu a tipagem 'string')

const idade: number = 20 // 10.4, -5.67, 0xf00d, 0b1010
const adulto: boolean = true

const arraysNumeros: Array<number> = [5,8,7] // Generic types (quase como uma função, preciso passar o tipo entre <T>)
const arraysNumeros_: number[] = [5,8,7]

const pessoa: { // Type Annotation
    nome: string
    idade: number
} = { // Aqui atribuindo os valores de fato
    nome: 'Mimi',
    idade: 2
}

export function soma(x: number, y: number): number { // Aqui eu mostro o tipo do retorno
    return x + y // Aqui ele já infere que o retorno é um number
}

export function voltaString(x: number, y: number): string { // Aqui eu mostro o tipo do retorno
    return 'Aqui eu retorno string'
}