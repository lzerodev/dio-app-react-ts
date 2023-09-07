const conta = {
  email: 'leo@dio.bank',
  password: '1234',
  name: 'Leandro Neves',
  balance: 2000.00
}

export const api = new Promise<any>((resolve, reject) => {
  setTimeout(() => {
    resolve(conta)
}, 3000)
})
