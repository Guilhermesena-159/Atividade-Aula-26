import { promises } from "node:dns";
import { title } from "node:process";

interface Postagem {
    id: number;
    title: string;
    body: string;
}
//GET: Busca postagem por id
async function buscarPostagem(id: number): Promise<Postagem> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );

    const resPost = await res.json() as Promise<Postagem>;
    return resPost
}

const get = await buscarPostagem(77);
console.log(get)
console.log(get.title)

//POST: cria uma nova postagem 
async function criarPostagem(): Promise<Postagem> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/`, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                title: 'Minha primeira postagem',
                body: 'Aqui existe uma descrição',
                userId: 1
            }),
        });

    console.log('Status:')
    console.log(res.status)

    const resPost = await res.json() as Promise<Postagem>;
    return resPost
    }

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

    console.log('CORPO ENVIADO:');
    console.log(corpoEnviado)

    console.log('Status:')
    console.log(res.status)

    console.log('CORPO RECEBIDO')

    const resPut = await res.json() as Promise<Postagem>;
    return resPut

    }

    async function deletar(id:number): Promise<void> {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        });

        console.log('STATUS:');
        console.log(res.status)

    }

    async function atualizarCampo(id: number): Promise<Postagem> {
        const corpoEnviado = {
            title: 'Novo Título'
        }

        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(corpoEnviado)
        });

        console.log('STATUS:');
        console.log(corpoEnviado)

        console.log('STATUS')
        console.log(res.status)

        console.log('CORPO RECEBIDO')
        const resPatch = await res.json() as Promise<Postagem>;
        return resPatch
    }

    const patch = await atualizarCampo(56)
    console.log(patch.title);


    //const put= await atualizarPostagemcompleta(77);
    //console.log(put)
    
    //const post = await criarPostagem();
    //console.log(post)

    //const get = await buscarPostagem(77);
    //console.log(get)
    //console.log(get.title)