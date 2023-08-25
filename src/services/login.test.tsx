import { login } from './login'


describe ('login', () => {

    const mockAlert= jest.fn()
    window.alert = mockAlert

  it('Deve exibir um alert com boas vindas', () => {
    login()
    expect(window.alert).toBeCalled()
  })

  it('Deve exibir um alert com boas vindas 2', () => {
    login()
    expect(mockAlert).toHaveBeenCalledWith('Bem vindo!')
  })
})