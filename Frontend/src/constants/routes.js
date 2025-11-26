// Application routes constants
export const ROUTES = {
    LANDINGPAGE: '/',
    HOME: '/home',
    DEVELOPMENT: '/development',
    PROFILE: '/profile',
    SAVED: '/saved',
    NOTFICATION: '/notification',
    ABOUT_US: '/about-us',
    ACITVITY:'/activity',
    REGISTER: '/register',
    LOGIN:"/login",
    ADDITIONALDETAILS:'/register/additional-details',
    ADDPERSONALDETAILS:"/register/personal-details",
    UPDATEDETAILS:"/update-details",
    SEARCH:"/search",

    // Development sub-routes
    APP_DEV: '/development/appdev',
    AI_ML: '/development/AIML',
    GAME_DEV: '/development/gamedev',
    WEB_DEV: '/development/webdev',
    FRONTEND_DEV:"/development/frontend-web-dev"
    ,BACKEND_DEV:"/development/backend",
    BLOCKCHAIN_DEV:"/development/blockchain",
    CLOUD_COMPUTING:"/development/devopscloud",
    CYBERSECURITY:"/development/cybersecurity",
    DATASCIENCE:"/development/datascience",
    BIGDATA:"/development/bigdata",
    IOT:"/development/iot",
};

export const NAV_ITEMS = [
    { path: ROUTES.HOME, label: 'Home', icon: 'Home' },
    { path: ROUTES.DEVELOPMENT, label: 'Development', icon: 'FolderCode' },
    { path: ROUTES.EXPLORE, label: 'Explore', icon: 'Search' },
    { path: ROUTES.PROFILE, label: 'Profile', icon: 'person' }
];