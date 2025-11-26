// Common Tailwind utility classes for reuse across components

export const buttonStyles = {
    primary: 'px-3 py-2 bg-primary-blue rounded-md text-white font-semibold hover:bg-blue-600 transition-colors',
    secondary: 'px-3 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300 transition-colors',
    back: 'ml-4 my-2 bg-[#eeecec] text-black px-3 py-0 border-1 border-gray-700 rounded-[4px] flex items-center',
    icon: 'flex justify-center items-center cursor-pointer hover:bg-primary-dark rounded-md p-1'
};

export const inputStyles = {
    primary: "h-18 outline-none pl-2  w-1/2 bg-white/20 border-2 border-white/40 rounded-lg  placeholder-white/40 text-white/80 font-[500] ",
    search: 'text-white w-[25vw] border-none py-1 px-3 bg-secondary-light rounded-sm items-center',
    review: 'outline-none w-[50%] border-none bg-transparent text-white'
};

export const layoutStyles = {
    container: 'flex flex-col lg:w-[80%] w-[100%] h-[100%] gap-4',
    section: 'flex flex-col w-[100%]',
    header: 'flex md:justify-between items-center w-[100%] pt-3',
    nav: 'flex h-10 gap-3 items-center askme w-[100%] text-white justify-end',
    mobileNav: 'block md:hidden z-100 w-[100%] h-16 sticky bottom-0 m-0 bg-gray-800'
};

export const textStyles = {
    title: 'text-4xl font-bold text-white',
    subtitle: 'text-lg font-semibold text-white',
    body: 'text-white',
    logo: 'block text-start text-primary-purple lg:block text-[3rem] font-bold'
};

export const cardStyles = {
    primary: 'p-3 border-none rounded-md bg-secondary-gray gap-2',
    review: 'flex flex-col p-3 border-none rounded-md bg-secondary-gray gap-2'
};

export const iconStyles = {
    material: 'material-symbols-outlined text-white text-3xl text-center',
    search: 'material-symbols-outlined search font-extralight text-4xl',
    nav: 'material-symbols-outlined text-sm font-bold'
};

export const mobileNavItemStyles = (isActive) =>
    `text-white ${isActive ? 'text-primary-cyan' : ''} lg:list-none lg:gap-1 flex items-center lg:flex-row flex-col text-gray-300 hover:text-gray-100 hover:font-bold min-w-[18%] text-[10px]`; 