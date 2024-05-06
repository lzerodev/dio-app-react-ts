const conta = {
  email: 'leo@dio.bank',
  password: '1234',
  name: 'Leandro Neves',
  balance: 250000.00,
  id: '1'
}

export const api = new Promise<any>((resolve, reject) => {
  setTimeout(() => {
    resolve(conta)
}, 3000)
})
