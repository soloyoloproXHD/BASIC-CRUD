import { conn } from "@/app/utils/db";


export async function POST(req: Request) {
    try {
        const { usuario, contrasena } = await req.json()
        const query = `SELECT id_user FROM usuario WHERE nombre_usuario = '${usuario}' AND contrasena = '${contrasena}'`;

        const sesion = await conn.query(query);
        const response = sesion.rows[0]
        console.log(response)
        
        if (response){
            return new Response(JSON.stringify({message: 'Usuario Encontrado', user: response}), {status: 200})
        } else {
            return new Response('Usuario No Encontrado', {status: 404})
        }

    } catch (error) {
        console.log(error)
        return new Response(`Error interno del Servidor: ${error}`, {status: 500})
    }
};