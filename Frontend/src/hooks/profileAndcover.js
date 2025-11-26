import { useEffect, useState } from 'react'
import axios from 'axios'
const ProfileAndcover = () => {

    const [ProfilePics, setProfilePics] = useState([])
    const [CoverPics, setCoverPics] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchingProfile = async () => {
            try {
                const response = await axios.get(`/profileAndCover/profile-pics`)
                console.log(response.data)
                setProfilePics(response.data)
            } catch (error) {
                console.log("error in fetching the profile pics")

            } finally {
                setLoading(false)
            }
        }

        const fetchingCoverImage = async () => {
            try {
                const response = await axios.get(`/profileAndCover/cover-pics`)
                console.log(response)
                setCoverPics(response.data)
            } catch (error) {
                console.log("error in fetching the cover pics")

            } finally {
                setLoading(false)
            }
        }
        fetchingProfile()
        fetchingCoverImage()
    },[])

    return { ProfilePics, CoverPics, loading }
}

export default ProfileAndcover