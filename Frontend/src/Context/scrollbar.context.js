import { useState, useEffect, useRef } from 'react';

const ScrollContainer = ({ children }) => {
  const [showBar, setShowBar] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;

    const handleScroll = () => {
      setShowBar(true);

      clearTimeout(el._scrollTimeout);
      el._scrollTimeout = setTimeout(() => {
        setShowBar(false);
      }, 600); // hide after 600ms of no scrolling
    };

    el.addEventListener("scroll", handleScroll);

    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-transform duration-500 ${showBar ? "scrollbar-show" : "scrollbar-hidden"} overflow-y-scroll`}
      style={{ maxHeight: "100vh" }}
    >
      {children}
    </div>
  );
};

export default ScrollContainer;