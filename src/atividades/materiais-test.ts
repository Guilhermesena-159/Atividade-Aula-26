import { describe, test, expect } from "vitest";
import { buscarMaterial } from "./materiais.js";

describe("Buscar material", function() {

    test("deve encontrar um material pelo nome", async function() {

        const material = await buscarMaterial("cimento");

        expect(material.nome).toBe("cimento");
    });

    test("deve apresentar erro quando o material não existir", async function() {

        await expect(buscarMaterial("cimento"))
            .rejects
            .toThrow("Material não encontrado");
    });

});
