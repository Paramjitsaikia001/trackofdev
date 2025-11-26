import { useEffect, useState } from "react"
import axios from "axios"

export default function Development() {
    const [data, setData] = useState({roadmapSteps:[]})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/development/`)
               
                setData(response.data)
                
                
                
            } catch (error) {
            
                
                setError(error)
            } finally {
                
                
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    return ({ data, loading, error })

}