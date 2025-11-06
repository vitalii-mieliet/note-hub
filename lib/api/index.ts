import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});
