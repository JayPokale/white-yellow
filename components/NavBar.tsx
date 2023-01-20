import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const CustomLordIcon = dynamic(
  () => import("../asset/Lordicon/icons/CustomLordIcon"),
  { ssr: false }
);

const NavBar = () => {
  const [searchBar, setSearchBar] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isNavOnTop, setIsNavOnTop] = useState<boolean>();

  let navTopLimit: number;
  const calcNavTopLimit = () => {
    const value =
      window.innerWidth < 768
        ? window.innerHeight * 0.08666666
        : Math.min(window.innerWidth, window.innerHeight) * 0.08666666;
    navTopLimit = value;
  };

  const scroll = () => {
    setIsNavOnTop(window.scrollY >= navTopLimit);
  };

  useEffect(() => {
    calcNavTopLimit();
    scroll();
    window.addEventListener("scroll", scroll);
    window.addEventListener("resize", calcNavTopLimit);
  }, []);

  // useEffect(() => {
  //   console.log(distFromTop);
  // }, [distFromTop]);

  return (
    <>
      {/* This nav is fixed at top */}
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-14 px-4 grid place-items-center text-white bg-black/30 z-20 backdrop-blur-sm">
        <div className="w-full max-w-7xl flex justify-between items-center">
        <ul className="flex items-center gap-2">
          <li className="1w-9 h-9 origin-left">
            <CustomLordIcon
              src="https://cdn.lordicon.com/jtqpkhoh.json"
              trigger="clickOnMorph"
              colors={{ primary: "#fff", secondary: "#fff" }}
              size={36}
            />
          </li>
          <li className="font-semibold tracking-wider text-base sm:text-lg md:text-xl">
            White&Yellow
          </li>
        </ul>
        <ul className="flex gap-2">
          <li className="h-9">
            <button className="flex items-center icon gap-2" onClick={() => setSearchBar(!searchBar)}>
              <p>Search</p>
              <CustomLordIcon
                src="https://cdn.lordicon.com/msoeawqm.json"
                trigger="click"
                colors={{ primary: "#fff", secondary: "#fff" }}
                size={36}
              />
            </button>
          </li>
        </ul>
        </div>
      </nav>
      {/* Fixed Nav ended */}

      {/* Overlay full screen started */}
      <div
        className={`fixed w-[max(calc(100vh+50vw),calc(50vh+100vw))] h-[max(calc(100vh+50vw),calc(50vh+100vw))] rounded-full backdrop-blur-sm duration-200 bg-black/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
          searchBar ? "z-10 scale-100 opacity-100" : "-z-10 scale-0 opacity-0"
        }`}
        onClick={() => setSearchBar(false)}
      />
      {/* Overlay full screen ended */}

      {/* Overlay containing searchbar started */}
      <div
        className={`fixed top-[min(10vh,25vw)] text-gray-700 flex duration-200 left-1/2 -translate-x-1/2 ${
          searchBar ? "z-10 opacity-100" : "-z-10 opacity-0"
        }`}
      >
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="outline-none bg-white rounded-l-full py-2 pl-6 w-[80vw] max-w-xl"
          placeholder="Search..."
        />
        <div className="w-10 h-10 rounded-r-full grid place-items-center bg-white">
          <div
            className="relative w-4 h-4 overflow-hidden rounded-full"
            onClick={() => setSearchText("")}
          >
            {searchBar && (
              <div className="absolute -top-2 -left-2 duration-50 opacity-100">
                <CustomLordIcon
                  src="https://cdn.lordicon.com/nhfyhmlt.json"
                  trigger="click"
                  colors={{ primary: "#a2a9b4" }}
                  size={32}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Overlay containing searchbar ended */}
    </>
  );
};

export default NavBar;
