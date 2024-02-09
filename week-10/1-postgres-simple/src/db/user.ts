import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    await client.connect();
    try {
        const createTableQuery = `CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            name VARCHAR(255) NOT NULL
        );`;
        await client.query(createTableQuery);
        
        const insertTableQuery = `
            INSERT INTO users (username, password, name) VALUES ($1, $2, $3);
        `; 
        const insertData = await client.query(insertTableQuery, [username, password, name]);
        return insertData;
    } catch(err) {
        console.log("Error here", err);
    } 
    
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    await client.connect();
    const sqlQuery = `SELECT * FROM users WHERE ID = $1`;
    const getQuery = await client.query(sqlQuery, [userId]);
    return getQuery;
}
