const conta = {
    email: 'nath@dio.bank',
    password: '123456',
    name: 'Nathaly Souza',
    balance: 2000.00,
    id: '1'
}


export const api = (email:string,senha:string) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (conta.email !== email || conta.password !== senha) { 
                resolve(false)
            }
            resolve(conta)
        }, 3000)
    })
}
