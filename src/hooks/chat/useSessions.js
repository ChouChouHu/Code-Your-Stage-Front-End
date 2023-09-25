// import { useCookies } from "react-cookie";
import { auth } from '@clerk/clerk-react'
import useSWRFetch from '../useSWRFetch'

export default () => {
	// const [cookies] = useCookies(["studentId"]);
	const { userId } = auth()
	const apiUrl = `https://api.projectszero.tech/session/user/${userId}`

	const { data } = useSWRFetch(apiUrl) // 發送 GET 請求

	return data
}
