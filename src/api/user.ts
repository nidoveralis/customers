import axios from "axios";

const BASE_URL = 'https://reqres.in/api';
const headers = {
  "Content-Type": "application/json",
};

export const getUsers = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/users`, {
      headers
    });

    localStorage.setItem('users', JSON.stringify(response.data.data));

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const addUsers = async (data: {
  first_name: string,
  role: string,
  gender: string
}
) => {
  console.log(data);
  try {
    const response = axios.post(`${BASE_URL}/users`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const deleteUsers = async (id: number) => {
  try {
    const response = axios.delete(`${BASE_URL}/users${id}`);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const editUsers = async (data: {
  first_name: string,
  role: string,
  gender: string,
  id: number
}
) => {
  try {
    const response = axios.post(`${BASE_URL}/users${data.id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};
