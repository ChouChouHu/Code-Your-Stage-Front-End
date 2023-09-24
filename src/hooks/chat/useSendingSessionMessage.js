import useSWRPut from "../useSWRPut";

export default (sessionId) => {
  const apiUrl = `https://api.projectszero.tech/session/${sessionId}/messages`;

  const { trigger } = useSWRPut(apiUrl); // 發送 PUT 請求

  return { trigger };
};
