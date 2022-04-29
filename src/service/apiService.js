import axios from 'axios';

axios.defaults.baseURL = 'https://626a414a53916a0fbdf7e48a.mockapi.io/api/v1';

export async function fetchContacts() {
  try {
    const { data } = await axios.get('/contacts');

    console.log('data', data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
