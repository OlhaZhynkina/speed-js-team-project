import axios from 'axios';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

export async function getReviews() {
  try {
    const response = await axios.get('/reviews');
    return response;
  } catch (err) {
    console.log(err);
  }
}

export async function submitWorkTogetherForm(data) {
  try {
    const response = await axios.post('/work-together', data);
    return response;
  } catch (err) {
    throw err;
  }
}
