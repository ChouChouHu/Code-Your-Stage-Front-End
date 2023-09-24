import { useCookies } from "react-cookie";
import useSWRFetch from "../useSWRFetch";

export default () => {
  const [cookies] = useCookies(["studentId"]);
  const apiUrl = `https://api.projectszero.tech/session/user/${cookies.studentId}`;

  const { data } = useSWRFetch(apiUrl); // 發送 GET 請求

  return data;
};
