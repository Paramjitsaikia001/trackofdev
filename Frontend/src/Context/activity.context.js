import { createContext, useState } from "react";
import { Api } from "../utils/api";

const ActivityContext = createContext()

export const ActivityProvider = ({ children }) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const createActivity = async ({ roadmpStepsId, roadmapId }) => {
        setLoading(true)
        setError(null)
        try {
            console.log("Activity created:", { roadmpStepsId, roadmapId });
            const res = await Api.post("/activity/create-activity", { roadmpStepsId, roadmapId })
            return res.data
        } catch (error) {
            setError(error.response?.data?.message || error.message);
        } finally {
            setLoading(false)
        }
    }

    const deleteActivity = async ({ roadmpStepsId,roadmapId }) => {
        setLoading(true)
        setError(null)
        try {
            const res = await Api.post(`/activity/delete-activity`,{roadmpStepsId,roadmapId})
            return res.data
        } catch (error) {
            setError(error.response?.data?.message || error.message);
        } finally {
            setLoading(false)
        }
    }

    const getActivityByUser = async () => {
        setLoading(true)
        setError(null)
        try {
            const res = await Api.get("/activity/get-user-activity")
            return res.data
        } catch (error) {
            setError(error.response?.data?.message || error.message);
        } finally {
            setLoading(false)
        }
    }


   

    return (
        <ActivityContext.Provider
        value={{
            loading,
            error,
            createActivity,
            deleteActivity,
            getActivityByUser,
        }}
        >{children}</ActivityContext.Provider>
    )
}

    export default ActivityContext