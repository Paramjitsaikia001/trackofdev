


import React, { createContext, useEffect, useState } from "react";
import { Api } from "../utils/api";

const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
    const [user, setUserState] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const isAuthanticate = Boolean(user)


    //get current user
    const getCurrentUser = async () => {
        setLoading(true)
        setError(null)

        try {
            const res = await Api.get("/auth/current-user")
            const fetchedUser = res.data?.data || null;

            setUserState(fetchedUser)

            console.log("user data", res.data.data.userName);


            return fetchedUser
        } catch (error) {
            // console.log(error);
            setUserState(null)
            return null
        } finally {
            setLoading(false)

        }
    }


    //send otp for register user
    // const sendOTP = async (email) => {
        
    //     try {
    //         console.log("otp is context....", email);
    //         const res = await Api.post("/auth/send-otp", { email })
    //         console.log(res.data.data);
    //     } catch (error) {
    //         setError(error?.response?.data?.message || "failed to send OTP")
    //         throw error
    //     }
    // }

    // const verifyOTP = async (email, otp) => {
    //     try {
    //         const res = await Api.post("/auth/verify-otp", { email, otp });
    //         return res.data.data.success;  // FIXED
    //     } catch (error) {
    //         setError(error?.response?.data?.message || "invalid OTP");
    //         throw error;
    //     }
    // };

    const register = async (email, fullName, userName, password, confirmPassword, Role) => {
        try {
            const res = await Api.post("/auth/register", {
                email,
                fullName,
                userName,
                password,
                confirmPassword,   // FIXED
                Role
            });

            const registeredUser = res.data?.data;
            setUserState(registeredUser);
            return registeredUser;

        } catch (error) {
            setError(error?.response?.data?.message || "registration failed");
            throw error;
        }
    };

    const login = async (email, userName, password) => {
        setLoading(true)
        setError(null)

        try {
            const res = await Api.post("/auth/login", { email, userName, password })
            const loginedUser = res.data?.data;

            setUserState(loginedUser)
            return loginedUser
        } catch (error) {
            const Errmsg = error?.response?.data?.message || "failed to login in please check credentials"
            setError(Errmsg)

            throw new Error(Errmsg)

        } finally {
            setLoading(false)
        }
    }

    const logOut = async () => {
        try {
            await Api.post("/auth/logout")
            setUserState(null)
            isAuthanticate(false)
        } catch (error) {
            console.log(error);

        }
    }

    const addImages = async (profilePicture, coverPicture) => {
        try {
            await Api.put("/auth/update-details", { profilePicture, coverPicture })


        } catch (error) {
            console.log(error);

        }
    }

    const addDetails = async (github, Linkedin, portfolio, bio) => {
        try {
            await Api.put("/auth/update-details", { github, Linkedin, portfolio, bio })
        
        } catch (error) {
            console.log(error);

        }
    }


    const updateDetails = async (fields) => {
        try {
            const payload = {};

            Object.keys(fields).forEach((key) => {
                if (fields[key] !== "" && fields[key] !== undefined && fields[key] !== null) {
                    payload[key] = fields[key];
                }
            });

            await Api.put("/auth/update-details", payload);

        

            // Update context user state with new data
            setUserState((prev) => ({
                ...prev,
                ...payload
            }));

        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        getCurrentUser()
    }, [])


    return (
        <UserContext.Provider value={{
            user,
            isAuthanticate,
            login,
            logOut,
            getCurrentUser,
            loading,
            addDetails,
            addImages,
            updateDetails,
            register,
            // sendOTP,
            // verifyOTP,
            error,
            setUser: setUserState
        }}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContext
