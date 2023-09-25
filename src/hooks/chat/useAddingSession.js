// import { useCookies } from "react-cookie";
import { useUser } from '@clerk/clerk-react'

import useSWRPost from '../useSWRPost'

export default () => {
	const user = useUser()
	const apiUrl = `https://api.projectszero.tech/session/${user.id}`

	const { trigger } = useSWRPost(apiUrl) // 發送 POST 請求

	return { trigger }
}
