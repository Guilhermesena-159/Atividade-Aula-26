interface Postagem {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// GET /posts
async function buscarPostagens(): Promise<Postagem[]> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
    );

    console.log('GET /posts');
    console.log('STATUS:');
    console.log(res.status);

    const resPost = await res.json() as Postagem[];
    return resPost;
}

const posts = await buscarPostagens();
console.log(posts);


// GET /posts/1
async function buscarPostagem(): Promise<Postagem> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/1`
    );

    console.log('GET /posts/1');
    console.log('STATUS:');
    console.log(res.status);

    const resPost = await res.json() as Postagem;
    return resPost;
}

const post = await buscarPostagem();
console.log(post);


// GET /posts/1/comments
async function buscarComentarios() {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/1/comments`
    );

    console.log('GET /posts/1/comments');
    console.log('STATUS:');
    console.log(res.status);

    const comentarios = await res.json();
    return comentarios;
}

const comentarios = await buscarComentarios();
console.log(comentarios);


// POST /posts
async function criarPostagem(): Promise<Postagem> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Minha primeira postagem',
                body: 'Aqui existe uma descrição',
                userId: 1
            }),
        });

    console.log('POST /posts');
    console.log('STATUS:');
    console.log(res.status);

    const resPost = await res.json() as Postagem;
    return resPost;
}

const novoPost = await criarPostagem();
console.log(novoPost);