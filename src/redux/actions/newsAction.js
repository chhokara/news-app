export const FETCH_ARTICLES = "FETCH_ARTICLES";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";

export const fetchArticles = () => async (dispatch) => {
  const result = await fetch(
    "https://newsapi.org/v2/everything?q=apple&from=2021-05-09&to=2021-05-09&sortBy=popularity&apiKey=c0d10f1c7f474692bc9af094f96a87c5"
  );

  const resultData = await result.json();
  dispatch({
    type: FETCH_ARTICLES,
    payload: resultData,
  });
};

export const toggleFavorites = (url) => {
  return { type: TOGGLE_FAVORITES, payload: url };
};
