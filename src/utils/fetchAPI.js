import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  //   url: BASE_URL,
  params:{
    // q: 'music',
    // part: 'snippet,id',
    regionCode: 'NG',
    maxResults: '10000',
    // order: 'date',
  },
  headers: {
    "X-RapidAPI-Key": '0584bcddf8msh73822e17c600852p17f319jsn08803886e8a1',
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`,options);
  return data;
// console.log(data) ;
};
const exp = '31068d680cmshd80b954efa430c5p1d7b8bjsn34ff62722862'

