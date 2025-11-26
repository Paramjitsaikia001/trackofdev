import { createContext, useEffect, useState } from "react";
import { Api } from "../utils/api";

const RoadmapDetailContext = createContext()

export const RoadmapDetailsProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)



    const getRoadmapdetails = async (roadmaproute) => {
        setLoading(true)
        setError(null)
        try {
            const res = await Api.post("/development/route-details", { roadmaproute });
           
            
            return res.data
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }

    }

  

    return (
        <RoadmapDetailContext.Provider
        value={{
            loading,
            error,
            getRoadmapdetails,
        }}
        >{children}</RoadmapDetailContext.Provider>
    )
}

    export default RoadmapDetailContext