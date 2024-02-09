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
    try {
        
        const insertTableQuery = `
            INSERT INTO users (username, password, name) VALUES ($1, $2, $3)
        `; 
        const insertData = await client.query(insertTableQuery, [username, password, name]);
        // await client.end();
        return insertData.rows[0];
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
    const sqlQuery = `SELECT * FROM users WHERE ID = $1`;
    const getQuery = await client.query(sqlQuery, [userId]);
    return getQuery.rows[0];
}
