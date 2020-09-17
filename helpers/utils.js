import axios from "axios";
//const apiKey = "aa3ef58adc614135bbed416c2a960d11";
const apiKey = "ed21bd0c1amshf69892a2e76648ap13bff5jsn96a8c9fbee96";

export function getStats(location) {
  //const uri = `https://api.smartable.ai/coronavirus/stats/${location}`;
  const uri = `https://coronavirus-smartable.p.rapidapi.com/stats/v1/${location}/`;

  console.log(uri);
  return axios({
    method: "get",
    url: uri,
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com",
    }
    // ,
    // params: {
    //   location: location,
    // },
  });
}

export function getNews(location) {
  //const uri = `https://api.smartable.ai/coronavirus/news/${location}`;
  const uri = `https://coronavirus-smartable.p.rapidapi.com/news/v1/${location}/`;

  return axios({
    method: "get",
    url: uri,
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com",
    }
    // ,
    // params: {
    //   location: location,
    // },
  });
}
