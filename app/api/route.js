'use server';

import pool from '../../lib/db';

export default async function handler(req, res) {
  
  if (req.method === 'GET') {
    try {
      const { rows } = await pool.query('SELECT * FROM comedor.menu_dia');
      console.log('Query result:', rows); // Log the result
      res.status(200).json(rows);
    } catch (err) {
      console.error('Database error:', err); // Log any errors
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}