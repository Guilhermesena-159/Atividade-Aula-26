import {test, describe, expect} from 'vitest'

function login(Username: string, Password: string): Boolean {
    return Username === 'Guilherme' && Password === '123456';
}

test('Permitir fazer login com Username e Password válidos', () =>{
    const efetuandologin = login('Guilherme', '123456')
    expect(efetuandologin).toBe(true)
});

describe('Negar login com credenciais inválidas', () =>{

    test('Negar login com senhaincorreta', () => {
        const efetuandologin = login('Guilherme', '15554')
        expect(efetuandologin).toBe(false)

    })})

    test('Negar login com usuário incorreto', () =>{
     const efetuandologin = login('Gui', '123456')
        expect(efetuandologin).toBe(false) 
    }) 
    
        test('Negar login com usuário e senha incorreta', () =>{
     const efetuandologin = login('Guilherm', '123')
        expect(efetuandologin).toBe(false) 
    }) 

        test('Negar login com campos vazios', () =>{
     const efetuandologin = login('', '')
        expect(efetuandologin).toBe(false) 
    });
