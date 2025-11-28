import { useContext, useEffect, useState } from 'react'
import Logo from '../ui/Logo';
import { Link, useNavigate } from 'react-router-dom';
import { buttonStyles, layoutStyles, } from '../../utils/styles';
import UserContext from '../../Context/user.context';
import { ROUTES } from '../../constants/routes';
import { EllipsisVertical } from 'lucide-react';
export default function Header({ toggleHideLeft, Hide_Left }) {

    const { user, getCurrentUser, logOut } = useContext(UserContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            getCurrentUser()
        }
    }, [])

    const NavigateHandler = () => {
        navigate(ROUTES.PROFILE)
    }
    const logoutHandler = async () => {
        try {
            await logOut()
            window.location.href = ROUTES.LANDINGPAGE;
        } catch (error) {
            console.log(error);

        }
    }
    const menuToggleHandler = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <section className={`${layoutStyles.header} flex justify-between items-center px-4 `}>
            <div className="md:hidden block logo z-10 bg-white w-fit px-3 rounded-md shadow-sm shadow-black">

                <Logo />
            </div>
            {/* <nav className={layoutStyles.nav}>
                <Link
                    to={ROUTES.PROFILE}
                    className={`${buttonStyles.primary} bg-transparent hover:bg-transparent bg-center bg-cover`}>

                    <img
                        src={user?.profilePicture || "/default-avatar.png"}
                        alt="profile"
                        className="w-10 h-10 rounded-full object-cover"
                    />


                </Link>
            </nav> */}
            <nav className={`${layoutStyles.nav} cursor-pointer hidden sm:flex`}>
                {
                    user?.profilePicture ?
                        <div
                            onClick={() => NavigateHandler()}
                            className={`${buttonStyles.primary} bg-transparent hover:bg-transparent bg-center bg-cover`}>
                            <img
                                src={user?.profilePicture}
                                alt="profile"
                                className="w-10 h-10 rounded-full object-cover"
                            />
                        </div>
                        : <div
                            onClick={() => NavigateHandler()}
                            className={`${buttonStyles.primary} bg-transparent hover:bg-transparent bg-center bg-cover`}>
                            <img
                                src="/profileAndCover/default.png"
                                alt="profile"
                                className="w-10 h-10 rounded-full object-cover"
                            />


                        </div>
                }
            </nav>
            <nav className={`sm:hidden relative   text-white`}>
                <EllipsisVertical className='cursor-pointer' onClick={menuToggleHandler} />

                <div className={`${isMenuOpen ? 'block' : 'hidden'} p-3 rounded-xl bg-red absolute right-2 top-10 bg-primary-dark`}>
                    <ul className='flex flex-col gap-2 items-start justify-center'>
                        <li onClick={() => NavigateHandler()} className='bg-[#022755] px-10 py-2 w-full rounded-full flex items-center justify-center font-medium cursor-pointer'>Profile</li>
                        <Link to={ROUTES.NOTFICATION}
                            className='bg-[#022755] px-10 py-2 w-full rounded-full flex items-center justify-center font-medium cursor-pointer'
                        >Notfications</Link>
                        <Link to={ROUTES.SETTINGS}
                            className='bg-[#022755] px-10 py-2 w-full rounded-full flex items-center justify-center font-medium cursor-pointer'
                        >Settings</Link>
                        <li
                            onClick={() => logoutHandler}
                            className='bg-[#4c8cdb] px-10 py-2 w-full rounded-full flex items-center justify-center font-medium cursor-pointer'
                        >Logout</li>
                    </ul>
                </div>
            </nav>
        </section>
    )
}