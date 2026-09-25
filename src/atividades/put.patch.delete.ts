async function atualizarPostagemcompleta(id: number): Promise<Postagem> {
    const corpoEnviado = {
        title: 'Atualização da minha primeira postagem',
        body: 'Aqui tem uma nova descrição',
        userId: 2
    }

    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(corpoEnviado),
        })

    console.log('PUT /posts/1')

    console.log('CORPO ENVIADO:')
    console.log(corpoEnviado)

    console.log('STATUS:')
    console.log(res.status)

    console.log('CORPO RECEBIDO:')
    const resPut = await res.json()
    console.log(resPut)

    return resPut
}


async function deletar(id: number): Promise<void> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        })

    console.log('DELETE /posts/1')

    console.log('STATUS:')
    console.log(res.status)

    console.log('CORPO RECEBIDO:')
    const resDelete = await res.text()
    console.log(resDelete)
}


async function atualizarCampo(id: number): Promise<Postagem> {
    const corpoEnviado = {
        title: 'Novo Título'
    }

    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(corpoEnviado)
        })

    console.log('PATCH /posts/1')

    console.log('CORPO ENVIADO:')
    console.log(corpoEnviado)

    console.log('STATUS:')
    console.log(res.status)

    console.log('CORPO RECEBIDO:')
    const resPatch = await res.json()
    console.log(resPatch)

    return resPatch
}


const put = await atualizarPostagemcompleta(1)
console.log(put)


const patch = await atualizarCampo(1)
console.log(patch)


await deletar(1)