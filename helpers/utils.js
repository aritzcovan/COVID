import axios from "axios";
const apiKey = "aa3ef58adc614135bbed416c2a960d11";

export function getStats(location) {
  const uri = `https://api.smartable.ai/coronavirus/stats/${location}`;

  return axios({
    method: "get",
    url: uri,
    headers: {
      "Subscription-Key": apiKey,
      "Cache-Control": "no-cache"
    },
    params: {
      location: location
    }
  });
}

export function getNews(location) {
  const uri = `https://api.smartable.ai/coronavirus/news/${location}`;

  return axios({
    method: "get",
    url: uri,
    headers: {
      "Subscription-Key": apiKey,
      "Cache-Control": "no-cache"
    },
    params: {
      location: location
    }
  });
}
