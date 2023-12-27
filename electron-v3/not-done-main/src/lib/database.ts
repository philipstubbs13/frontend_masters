import path from 'path';
import knex from 'knex';
import { app } from 'electron';

const userDataPath = app.getPath('userData');
const dbPath = path.join(userDataPath, 'tasks.sqlite');

const database = knex({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true,
});

// const setupDatabase = async () => {
//   if (!(await database.schema.hasTable('tasks'))) {
//     await database.schema.createTable('tasks', (table) => {
//       table.increments('id').primary();
//       table.boolean('completed').defaultTo(false);
//       table.string('title', 255).notNullable();
//       table.text('notes').nullable(); // Optional field
//     });
//   }
// };

// setupDatabase().catch((error) => {
//   console.error('Failed to set up database:', error);
// });

// Create a new task
export const createTask = async (title: string) => {
  const [id] = await database('tasks').insert({ title });
  return id;
};

// Retrieve a task by ID
export const getTask = async (id: number): Promise<Task> => {
  return await database('tasks').where({ id }).first();
};

// Retrieve all tasks
export const getAllTasks = async (): Promise<Task[]> => {
  return await database('tasks').select('*');
};

// Update a task by ID
export const updateTask = async (id: number) => {
  const { completed } = await getTask(id);
  await database('tasks').where({ id }).update({ completed: !completed });
};

// Delete a task by ID
export const deleteTask = async (id: number) => {
  await database('tasks').where({ id }).delete();
};
