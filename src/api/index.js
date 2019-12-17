// Would never do this in an actual application
// Instead, would use back end service to proxy requests
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

async function fetchJson(url) {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch(e) {
    console.log(e);
    return { data: [] };
  }
}

export const PAGE_SIZE = 25;

export async function search(query = 'ryan gosling', pageNumber = 0) {
  const offset = pageNumber * PAGE_SIZE;
  query = encodeURIComponent(query);
  const json = await fetchJson(`http://api.giphy.com/v1/gifs/search?q=${query}&offset=${offset}&api_key=${API_KEY}`);
  return json;
}