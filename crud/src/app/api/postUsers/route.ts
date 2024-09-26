import { conn } from "@/app/utils/db";

export async function POST(req: Request){
    const client = await conn.connect();
    try {
        const { usuario, contrasena } = await req.json()
        const query = `INSERT INTO usuario (nombre_usuario,contrasena) VALUES ('${usuario}','${contrasena}')`;

        const result = await client.query(query);
        console.log(result.rows)

        return new Response(JSON.stringify({message: 'Usuario Registrado Exitosamente'}), {status: 200});
    } catch (error) {
        console.log(error)
        return new Response(`Error interno del Servidor: ${error}`, {status: 500})
    }
};