import useSWRFetch from "../useSWRFetch";

export default (sessionId) => {
  const apiUrl = `https://api.projectszero.tech/session/${sessionId}`;

  const { data } = useSWRFetch(apiUrl); // 發送 GET 請求

  return data && data.messages;
};
