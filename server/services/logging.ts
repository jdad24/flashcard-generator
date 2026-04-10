import pool from '../db';

export default  async function logRequest(endpoint: string, requestData: any, responseData: any) {
  const query = `
    INSERT INTO request_logs (endpoint, request_data, response_data)
    VALUES ($1, $2, $3)
  `;
  try {
    await pool.query(query, [endpoint, JSON.stringify(requestData), JSON.stringify(responseData)]);
  } catch (error) {
    console.error('Error logging request:', error);
  }
}