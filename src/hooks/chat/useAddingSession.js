// import { useCookies } from "react-cookie";
import { auth } from '@clerk/clerk-react'
import useSWRPost from '../useSWRPost'

export default () => {
	// const [cookies] = useCookies(["studentId"]);
	const { userId } = auth()
	const apiUrl = `https://api.projectszero.tech/session/${userId}`

	const { trigger } = useSWRPost(apiUrl) // 發送 POST 請求

	return { trigger }
}
