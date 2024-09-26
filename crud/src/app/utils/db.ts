import { Pool } from 'pg';

var conn: any

if(!conn){
    conn = new Pool({
        user: 'postgres',
        password: 'admin',
        host: 'localhost',
        port: 5432,
        database: 'crud',
    })
}

export { conn };