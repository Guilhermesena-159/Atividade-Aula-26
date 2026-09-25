import { describe, it, expect } from "vitest";

describe("Testes da API JSONPlaceholder", () => {

    it("deve atualizar uma postagem usando PUT", async () => {

        const corpoEnviado = {
            title: "Atualização da minha primeira postagem",
            body: "Aqui tem uma nova descrição",
            userId: 2
        };

        const res = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(corpoEnviado)
            }
        );

        const resposta = await res.json();

        expect(res.status).toBe(200);
        expect(resposta.id).toBe(1);
        expect(resposta.title).toBe("Atualização da minha primeira postagem");
        expect(resposta.body).toBe("Aqui tem uma nova descrição");
        expect(resposta.userId).toBe(2);
    });


    it("deve atualizar somente o título usando PATCH", async () => {

        const corpoEnviado = {
            title: "Novo Título"
        };

        const res = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(corpoEnviado)
            }
        );

        const resposta = await res.json();

        expect(res.status).toBe(200);
        expect(resposta.id).toBe(1);
        expect(resposta.title).toBe("Novo Título");
    });


    it("deve excluir uma postagem usando DELETE", async () => {

        const res = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method: "DELETE"
            }
        );

        const resposta = await res.json();

        expect(res.status).toBe(200);
        expect(resposta).toEqual({});
    });

});