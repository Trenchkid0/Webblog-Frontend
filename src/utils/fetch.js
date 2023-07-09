import axios from 'axios';
import handleError from './handleError';
import { config } from '../config';

export async function getData(url, params) {
  try {
    const  {token}  = localStorage.getItem('auth')
      ? JSON.parse(localStorage.getItem('auth'))
      : {};


    return await axios.get(`${config.api_host_dev}${url}`, {
      params,
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    });
  } catch (err) {
    return handleError(err);
  }
}

export async function postData(url, payload, formData) {
  try {
    const { token } = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth'))
    : {};

      

    return await axios.post(`${config.api_host_dev}${url}`, payload, {
      headers: {
        Authorization: `Bearer ${token.token}`,
        'Content-Type': formData ? 'multipart/form-data' : 'application/json',
      },
    });
  } catch (err) {
    return handleError(err);
  }
}

export async function deleteData(url) {
  try {
    const { token } = localStorage.getItem('auth')
      ? JSON.parse(localStorage.getItem('auth'))
      : {};

      console.log(token.token)

    return await axios.delete(`${config.api_host_dev}${url}`, {
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    });
  } catch (err) {
    return handleError(err);
  }
}
