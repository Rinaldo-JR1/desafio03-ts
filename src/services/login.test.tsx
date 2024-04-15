import { login } from "./login"

describe('login', () => {

    const mockEmail = 'nath@dio.bank'
    it('Deve exibir um alert com boas vindas caso o email seja válido', async () => {
        const password = '123456';
        const response = await login(mockEmail, password)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        const password = '1234567';
        const response = await login('email@invalido.com', password)
        expect(response).toBeFalsy()
    })
})