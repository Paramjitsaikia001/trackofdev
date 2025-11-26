export const getFullscreenClasses = (isFullScreen) => {
  return `transition-transform duration-300 ease-in-out fixed top-0 bottom-0 right-0 
  ${isFullScreen ? "lg:left-[20%]" : "lg:left-[60%]"} 
   left-[20%] overflow-y-scroll scrollbar scrollbar-thumb-scrollbarThumb scrollbar-track-scrollbarTrack scrollbar-bg-scrollbarBg bg-[#0e1542] flex justify-center items-center z-50 m-0 h-full pt-6`;
};

export const getFullscreenIconName = (isFullScreen) => {
  return isFullScreen ? "close_fullscreen" : "open_in_full";
};