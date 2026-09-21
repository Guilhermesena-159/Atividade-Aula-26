import { create } from 'node:domain';
import {expect, test} from 'vitest'

interface User {
    nome: String;
    idade: Number
}

function createUser(nome: String, idade: Number): User {
    return {nome, idade}
}

test ('Criar um usuário com nome e idade', () => {
    const User = createUser('Alice', 30)

    expect(User).toEqual({nome: 'Alice', idade: 30})
    expect(User.nome).toBe('Alice')
});