import axios from 'axios';
import {BASE_URL} from 'utils/constant';

//======Fetch all catagory ==================

const getCategory = async () => {
  const response = await axios.get(BASE_URL + '/category');
  const data = await response.data;
  return data;
};

const categoryAPI = {getCategory};

export default categoryAPI;
