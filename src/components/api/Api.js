const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '23308675-3bdf2416796cf281a4ef874ab';

export const fetchPicture = async (value = '', page = 1) => {
  const response = await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${value}&page=${page}&per_page=12`
  );
  const data = await response.json();
  return data;
};
