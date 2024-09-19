const objetoA = { // TS inferiu a tipagem
    chaveA: 'chaveA',
    chaveB: 'chaveB'
}
objetoA.chaveB = 'Outro valor' // Só pode ser alterado dessa forma

const objetoB: {
    chaveA: string,
    chaveB: string,
    chaveC?: string
} = {
    chaveA: 'Chave A',
    chaveB: 'Chave B',
    chaveC: 'Nova chave'
}