// 'use server';
import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
})
  
export default pool;

// import postgres from "postgres"

// const sql = postgres({
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   port: process.env.DB_PORT,
//   ssl:'require'
// })

// const getData = async () => {
//   const {args} = await sql`SELECT * FROM comedor.menu_dia;`
//   return args
// } 

// export {getData};
// export default sql;