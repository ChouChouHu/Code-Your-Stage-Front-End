import useSWRPut from "../useSWRPut";

export default (sessionId) => {
  const apiUrl = `https://api.projectszero.tech/session/${sessionId}/messages`;

  const { data, trigger, isMutating } = useSWRPut(apiUrl); // 發送 PUT 請求

  return { messages: data && data.messages, trigger, isMutating };
};
