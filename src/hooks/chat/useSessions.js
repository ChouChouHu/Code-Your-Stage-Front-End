import useSWRFetch from "../useSWRFetch";

export default () => {
  const apiUrl = "https://api.projectszero.tech/session";

  const { data } = useSWRFetch(apiUrl); // 發送 GET 請求

  return data;
};
