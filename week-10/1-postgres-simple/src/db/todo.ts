import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    const insertQuery = `
        INSERT INTO todos (user_id, title, description) 
        VALUES ($1, $2, $3);
    `;
    await client.query(insertQuery, [userId, title, description]);
    const get = await client.query(`SELECT * FROM todos WHERE user_id = $1`, [userId]); 
    return get.rows[0];
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    const updateQuery = `
        UPDATE todos SET done = true WHERE id = $1;
    `;
    await client.query(updateQuery, [todoId]);
    const get = await client.query(`SELECT * FROM todos WHERE id = $1`, [todoId]);
    return get.rows[0];
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    const getTodoStr = `
        SELECT * FROM todos WHERE user_id = $1;
    `;
    const resp = await client.query(getTodoStr, [userId]);
    return resp.rows;
}