import axios from 'axios';
import config from '../config';

/**
 * Axios Utility Client for making 'promise-based' HTTP calls
 */
export default class AxiosUtil {
  static get(url, token) {
    return this.getInstance({ token }).get(url);
  }

  static post(url, token, data = {}) {
    return this.getInstance({ token }).post(url, data);
  }

  static postForm(url, token, formFields) {
    const data = new window.FormData();
    for (const prop in formFields) {
      data.set(prop, formFields[prop]);
    }

    return this.getInstance({ token, contentType: 'multipart/form-data' }).post(url, data);
  }

  static put(url, token, data = {}) {
    return this.getInstance({ token }).put(url, data);
  }

  static delete(url, token) {
    return this.getInstance({ token }).delete(url);
  }

  static getInstance({
    timeout = config.api.defaultTimeout,
    token = '',
    contentType = 'application/json',
  }) {
    const headers = {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*', // IDEA: Configure this depending on use case
    };

    if (token !== null) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const apiInstance = axios.create({
      baseURL: `${config.api.baseUrl}`,
      timeout,
      headers,
    });

    return apiInstance;
  }
}
