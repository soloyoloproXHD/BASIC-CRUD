import { conn } from "@/app/utils/db";


export async function GET() {
    try {
        const query = `SELECT * FROM usuario`;

        const users = await conn.query(query);
        const response = users.rows
        console.log(response)
        
        if (response){
            return new Response(JSON.stringify({usuarios: response}), {status: 200})
        } else {
            return new Response('No hay nada', {status: 404})
        }

    } catch (error) {
        console.log(error)
        return new Response(`Error interno del Servidor: ${error}`, {status: 500})
    }
};