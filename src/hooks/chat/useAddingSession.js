import { useCookies } from "react-cookie";
import useSWRPost from "../useSWRPost";

export default () => {
  const [cookies] = useCookies(["studentId"]);
  const apiUrl = `https://api.projectszero.tech/session/${cookies.studentId}`;

  const { trigger } = useSWRPost(apiUrl); // 發送 POST 請求

  return { trigger };
};
