import { Link, useLocation } from "react-router-dom"
import { Home, Search, FolderCode, CircleUserRound } from 'lucide-react';
import { useContext, useEffect, useState, useRef } from "react";
import UserContext from "../../Context/user.context.js";
import { LogOut } from "lucide-react";
import { ROUTES } from "../../constants/routes";

const macDockEffect = `
  .dock-item:hover {
    transform: scale(1.5);
  }
  .dock-item {
    transition: transform 0.25s ease-out;
  }
  .dock-item:hover + .dock-item,
  .dock-item:has(+ .dock-item:hover),
  .dock-item:hover ~ .dock-item {
    transform: scale(1.3);
  }
`;

export default function MobileNav() {
    const location = useLocation();
    const { logOut } = useContext(UserContext)


    const logoutHandler = async () => {
        try {
            await logOut()
            window.location.href = ROUTES.LANDINGPAGE;
        } catch (error) {
            console.log(error);

        }
    }

    const [isVisible, setIsVisible] = useState(true);
    const hideTimeoutRef = useRef(null);

    useEffect(() => {
        const showDuringScroll = () => {
            setIsVisible(true);
            if (hideTimeoutRef.current) {
                clearTimeout(hideTimeoutRef.current);
            }
            hideTimeoutRef.current = setTimeout(() => {
                setIsVisible(false);
            }, 1500);
        };

        // Attach multiple listeners to cover desktop and mobile interactions
        window.addEventListener('scroll', showDuringScroll, { passive: true });
        window.addEventListener('wheel', showDuringScroll, { passive: true });
        window.addEventListener('touchstart', showDuringScroll, { passive: true });
        window.addEventListener('touchmove', showDuringScroll, { passive: true });

        // Trigger once so nav behaves predictably on mount
        showDuringScroll();

        return () => {
            window.removeEventListener('scroll', showDuringScroll);
            window.removeEventListener('wheel', showDuringScroll);
            window.removeEventListener('touchstart', showDuringScroll);
            window.removeEventListener('touchmove', showDuringScroll);
            if (hideTimeoutRef.current) {
                clearTimeout(hideTimeoutRef.current);
            }
        };
    }, []);
    return (
        <section
            onMouseEnter={() => {
                setIsVisible(true);
                if (hideTimeoutRef.current) {
                    clearTimeout(hideTimeoutRef.current);
                }
            }}
            onMouseLeave={() => {
                if (hideTimeoutRef.current) {
                    clearTimeout(hideTimeoutRef.current);
                }
                hideTimeoutRef.current = setTimeout(() => {
                    setIsVisible(false);
                }, 1500);
            }}
            className={`fixed bottom-4 left-1/2 -translate-x-1/2 rounded-3xl bg-white/40 backdrop-blur-2xl shadow-2xl w-fit px-2 border-[1px] hover:px-2 transition-all duration-500 border-white z-10 py-2 md:hidden flex justify-around gap-8 items-center 
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            <style>{macDockEffect}</style>
            <ul className="flex w-full h-full  gap-2 justify-center items-center">
                <Link to={ROUTES.LANDINGPAGE}>
                    <li className={`text-white ${location.pathname === ROUTES.LANDINGPAGE ? 'xl:bg-[#314969] ' : ''} flex items-center justify-center hover:scale-75 sm:hover:scale-100 transition-transform duration-200`}>
                        <span className="dock-item bg-primary-bg rounded-2xl p-2 text-white font-[150] transition-transform duration-200 flex justify-center items-center">
                            <Home className={`${location.pathname === ROUTES.LANDINGPAGE ? '  ' : ''}  w-[8vw] h-[8vw] stroke-[1.5px] `} />
                        </span>
                    </li>
                </Link>

                {/* search  */}
                <Link to={ROUTES.SEARCH}>
                    <li className={`text-white ${location.pathname === ROUTES.SEARCH ? 'xl:bg-[#314969] bg-none' : ''}  flex items-center justify-center hover:scale-75 sm:hover:scale-100 transition-transform duration-200`}>
                        <span className="dock-item bg-primary-bg rounded-2xl p-2 text-white font-[150] transition-transform duration-200 flex justify-center items-center">
                            <Search className={`${location.pathname === ROUTES.SEARCH ? ' stroke-[2px]' : ''} w-[8vw] h-[8vw] stroke-[1.5px]`} />
                        </span>
                    </li>
                </Link>

                <Link to={ROUTES.DEVELOPMENT}>
                    <li className={`text-white ${location.pathname === ROUTES.DEVELOPMENT ? 'xl:bg-[#314969] bg-none' : ''} flex items-center justify-center hover:scale-75 sm:hover:scale-100 transition-transform duration-200`}>
                        <span className="dock-item bg-primary-bg rounded-2xl p-2 text-white font-[150] transition-transform duration-200 flex justify-center items-center">
                            <FolderCode className={`${location.pathname === ROUTES.DEVELOPMENT ? ' xl:fill-transparent fill-white' : ''} w-[8vw] h-[8vw] stroke-[1.5px] `} />
                        </span>
                    </li>
                </Link>
                <Link to={ROUTES.PROFILE}>
                    <li className={`text-white ${location.pathname === ROUTES.PROFILE ? 'xl:bg-[#314969] bg-none' : ''} flex items-center justify-center hover:scale-75 sm:hover:scale-100 transition-transform duration-200`}>
                        <span className="dock-item bg-primary-bg rounded-2xl p-2 text-white font-[150] transition-transform duration-200 flex justify-center items-center">
                            <CircleUserRound className={`${location.pathname === ROUTES.PROFILE ? ' stroke-[2px]' : ''} w-[8vw] h-[8vw] stroke-[1.5px]`} />
                        </span>

                    </li>
                </Link>
                <div className="line w-1 h-9 rounded-full bg-white/50"></div>
                <button
                    onClick={logoutHandler}
                    className="dock-item bg-primary-dark rounded-2xl p-2 text-white font-[150] transition-transform duration-200 flex justify-center items-center">
                    <LogOut className="w-[8vw] h-[8vw] stroke-[1.5px]" />
                </button>
            </ul>
        </section>
    )
}