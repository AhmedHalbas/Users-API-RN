import axios from 'axios';

const baseURL = 'https://reqres.in/api/users';

export const getUsers = async (page) => {
  let payload = null;
  let totalPages = null;
  try {
    const response = await axios.get(`${baseURL}?page=${page}`);
    payload = response.data;
    totalPages = response.data.total_pages;
  } catch (err) {
    console.log(err);
  }

  return {
    type: 'USERS_LIST',
    payload: payload.data,
    totalPages: totalPages,
  };
};

export const getUserDetailsByID = async (id) => {
  let payload = null;
  try {
    const response = await axios.get(`${baseURL}/${id}`);
    payload = response.data;
  } catch (err) {
    console.log(err);
  }

  return {
    type: 'USER_DETAILS',
    payload: payload.data,
  };
};

export async function addUser(user = {}) {
  console.log('user: ', user);
  let payload = null;

  try {
    let response = await axios.post(baseURL, user);
    payload = response.data;
    console.log('posted payload: ', payload);
  } catch (error) {
    console.log('posted ERROR: ', error);
  }

  return {
    type: 'ADD_USER',
    payload,
  };
}

export function clearUserDetails() {
  return {
    type: 'CLEAR_DETAILS',
    payload: null,
  };
}
