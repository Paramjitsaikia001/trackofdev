import React, { useState, useEffect } from "react";
import UserContext from '../../Context/user.context';
import { useContext } from 'react';
import { CircleCheckBig } from 'lucide-react';
import { inputStyles } from "../../utils/styles";
import ProfileAndcover from "../../hooks/profileAndcover";
import { toast } from "sonner";
import { ROUTES } from "../../constants/routes";
import Loading from "../../utils/loading";

export default function UpdateDetails() {
    const { user, updateDetails } = useContext(UserContext);
    const { ProfilePics: profileOptions, CoverPics: coverOptions, loading } = ProfileAndcover()
    const [fullName, setFullName] = useState("");
    const [role, setRole] = useState("");
    const [selectedProfile, setSelectedProfile] = useState("");
 const [selectedCover, setSelectedCover] = useState("");
    const [bio, setBio] = useState("");
    const [github, setGithub] = useState("");
    const [portfolio, setPortfolio] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (user) {
            setFullName(user.fullName || "");
            setRole(user.role || "");
            setSelectedProfile(user.profilePicture || "");
            setSelectedCover(user.coverPicture || "");
            setBio(user.bio || "");
            setGithub(user.github || "");
            setPortfolio(user.portfolio || "");
            setLinkedin(user.Linkedin || "");
        }
    }, [user]);

    const handleSave = async () => {
        setSaving(true);
        try {
            const payload = {
                fullName,
                Role: role,
                profilePicture: selectedProfile,
                coverPicture:selectedCover,
                github,
                Linkedin: linkedin,
                portfolio,
                bio,
            };

            await updateDetails(payload);
            toast.success("Profile updated successfully!");
            window.location.href = ROUTES.PROFILE;
        } catch (err) {
            console.error("Update failed", err);
            toast.error(err?.message || "Failed to update profile");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
          <Loading />
        );
    }
    return (
        <div className="min-h-screen bg-primary-bg flex items-center lg:w-[80%] w-[100%]  justify-center px-4 py-10">
            <div className="w-full px-12 text-white flex flex-col gap-4">

                <div className="border-b-2 pb-4 border-gray-500">
                    <h2 className=' text-5xl font-bold text-white'>Update Profile Details</h2>
                </div>

                {/* Full Name */}
                <div className="mb-5">
                    <label className={`block  font-medium mb-1`}>Full Name</label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className={`${inputStyles.primary} w-full px-4 py-2 focus:border-0 focus:ring focus:ring-blue-300`}
                        placeholder="Your full name"
                    />
                </div>

                {/* Role */}
                <div className="mb-5">
                    <label className="block  font-medium mb-1">Role</label>
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className={`${inputStyles.primary} w-full px-4 py-2 focus:border-0 focus:ring focus:ring-blue-300`}
                    >
                        <option value="">Select role</option>
                        <option value="Developer">Developer</option>
                        <option value="Student">Student</option>
                        <option value="Organisation">Organisation</option>
                        <option value="Employee">Employee</option>
                    </select>
                </div>

                {/* Profile Picture URL */}
                <div className="mb-5 flex justify-around">
                    {profileOptions.map((profilepic) => (
                        <div
                            onClick={() => setSelectedProfile(profilepic.url)}
                            className={`relative flex transition-transform duration-300  rounded-full images w-40 h-40`}>
                            <img
                                key={profilepic.id}
                                src={profilepic.url}
                                alt={profilepic.tittle}
                                className={`w-full h-full rounded-full object-cover cursor-pointer `}
                                onClick={() => setSelectedProfile(profilepic.url)}
                            />
                            <div className={`bg-black/50 top-0 text-white flex text-4xl font-bold rounded-full absolute w-full object-cover h-full z-20 ${selectedProfile === profilepic.url ? "" : "hidden"}`}>
                                <CircleCheckBig className='text-white font-bold w-8 h-8 m-2' strokeWidth={3.5} /> </div>
                        </div>
                    ))}
                </div>

                {/* Cover Picture URL */}
                <div className="mb-5 flex flex-col items-center justify-center gap-4">
                    {coverOptions.map((coverImage) => (
                        <div
                            onClick={() => setSelectedCover(coverImage.url)}
                            className={`relative flex transition-transform duration-300  rounded-xl images w-[70%] h-40`}>

                            <img
                                key={coverImage.id}
                                src={coverImage.url}
                                alt={coverImage.tittle}
                                className={`relative h-full w-full object-cover rounded-xl cursor-pointer `}



                            />
                            <div className={`bg-black/50 top-0 text-white flex text-4xl font-bold rounded-xl absolute w-full object-cover h-full z-20 ${selectedCover === coverImage.url ? "" : "hidden"}`}>
                                <CircleCheckBig className='text-white font-bold w-8 h-8 m-2' strokeWidth={3.5} /> </div>
                        </div>
                    ))}
                </div>

                {/* Bio */}
                <div className="mb-5">
                    <label className="block  font-medium mb-1">Bio</label>
                    <textarea
                        rows="3"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className={`${inputStyles.primary} w-full px-4 py-2 focus:border-0 focus:ring focus:ring-blue-300`}
                        placeholder="Tell something about yourself..."
                    ></textarea>
                </div>

                {/* GitHub */}
                <div className="mb-5">
                    <label className="block  font-medium mb-1">GitHub Link</label>
                    <input
                        type="text"
                        value={github}
                        onChange={(e) => setGithub(e.target.value)}
                        className={`${inputStyles.primary} w-full px-4 py-2 focus:border-0 focus:ring focus:ring-blue-300`}
                        placeholder="https://github.com/username"
                    />
                </div>

                {/* Portfolio */}
                <div className="mb-5">
                    <label className="block  font-medium mb-1">Portfolio Website</label>
                    <input
                        type="text"
                        value={portfolio}
                        onChange={(e) => setPortfolio(e.target.value)}
                        className={`${inputStyles.primary} w-full px-4 py-2 focus:border-0 focus:ring focus:ring-blue-300`}
                        placeholder="https://yourwebsite.com"
                    />
                </div>

                {/* LinkedIn */}
                <div className="mb-6">
                    <label className="block  font-medium mb-1">LinkedIn Profile</label>
                    <input
                        type="text"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                        className={`${inputStyles.primary} w-full px-4 py-2 focus:border-0 focus:ring focus:ring-blue-300`}
                        placeholder="https://linkedin.com/in/username"
                    />
                </div>

                {/* Save Button */}
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition disabled:bg-blue-300"
                >
                    {saving ? "Saving..." : "Save Changes"}
                </button>
            </div>
        </div>
    );
}