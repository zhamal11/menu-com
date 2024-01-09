import axios from 'axios';

const instance = axios.create({
  baseURL: 'YOUR_API_BASE_URL',
});

export const login = async (credentials) => {
  try {
    const response = await instance.post('/login', credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  
};