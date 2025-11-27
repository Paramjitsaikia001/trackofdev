import { useContext, useEffect } from 'react'
import Logo from '../ui/Logo';
import { Link, useNavigate } from 'react-router-dom';
import { buttonStyles, layoutStyles, } from '../../utils/styles';
import UserContext from '../../Context/user.context';
import { ROUTES } from '../../constants/routes';
export default function Header({ toggleHideLeft, Hide_Left }) {

    const { user, getCurrentUser } = useContext(UserContext)
    const navigate = useNavigate();


    useEffect(() => {
        if (!user) {
            getCurrentUser()
        }
    }, [])

    const NavigateHandler = () => {
        navigate(ROUTES.PROFILE)
    }
    return (
        <section className={layoutStyles.header}>
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
            <nav className={`${layoutStyles.nav} cursor-pointer`}>
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
        </section>
    )
}