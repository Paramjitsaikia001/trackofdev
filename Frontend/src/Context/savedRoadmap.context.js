import { createContext, useState } from "react";
import { Api } from "../utils/api";

const SavedRoadmapContext = createContext()

export const SaveRoadmapProvider = ({ children }) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const savedRoadmap = async ({ roadmapRoute }) => {
        setLoading(true)
        setError(null)
        try {
            const res = await Api.post("/saved-roadmap", { roadmapRoute })
            return res.data
        } catch (error) {
            setError(error.response?.data?.message || error.message);
        } finally {
            setLoading(false)
        }
    }

    const deleteSavedRoadmap = async ({ roadmapRoute }) => {
        setLoading(true)
        setError(null)
        try {
            const res = await Api.post(`/saved-roadmap/delete-savedRoadmap`,{roadmapRoute})
            return res.data
        } catch (error) {
            setError(error.response?.data?.message || error.message);
        } finally {
            setLoading(false)
        }
    }

    const getSavedRoadmapByUser = async () => {
        setLoading(true)
        setError(null)
        try {
            const res = await Api.get("/saved-roadmap/get-savedRoadmap-user")
            
            return res.data.data
        } catch (error) {
            setError(error.response?.data?.message || error.message);
        } finally {
            setLoading(false)
        }
    }


   

    return (
        <SavedRoadmapContext.Provider
        value={{
            loading,
            error,
            savedRoadmap,
            deleteSavedRoadmap,
            getSavedRoadmapByUser,
        }}
        >{children}</SavedRoadmapContext.Provider>
    )
}

    export default SavedRoadmapContext