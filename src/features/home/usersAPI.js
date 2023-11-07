import axios from 'axios';
import {BASE_URL} from 'utils/constant';
// const BASE_URL = 'http://localhost:8082';
//======Fetch all user ==================

const getUser = async id => {
  const response = await axios.get(`${BASE_URL}/users/?id=${id}`);
  const data = await response.data[0];

  return data;
};

//======Fetch all user ==================
const updateUser = async obj => {
  const response = await axios.patch(BASE_URL + '/users/' + obj.id, obj, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.data;

  return data;
};

const usersAPI = {getUser, updateUser};

export default usersAPI;
