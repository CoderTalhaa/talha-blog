import { NavLink } from "react-router-dom";
import AnimatedLinks from "./AnimatedLinks";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
import MagneticIcon from "./MagneticIcon";

function Navbar() {
  const navLinks = [
    {
      title: "Home ",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "retro"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("luxury");
    } else {
      setTheme("retro");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <>
      <header>
        <nav className="sticky flex justify-between items-center py-8 lg:py-4 px-5 bg-zinc-900 shadow-2xl z-50  ">
          <div className="lg:flex hidden items-center text-4xl gap-1 font-Angkor ">
            <MagneticIcon>
              <span className="bg-gradient-to-b from-zinc-500 to-yellow-300 bg-clip-text text-transparent">
                T
              </span>
            </MagneticIcon>
            <MagneticIcon>
              <span className="bg-gradient-to-t from-green-400 via-zinc-500 to-red-700 bg-clip-text text-transparent">
                A
              </span>
            </MagneticIcon>
            <MagneticIcon>
              <span className="bg-gradient-to-t from-emerald-500 via-sky-900 to-rose-700 bg-clip-text text-transparent">
                L
              </span>
            </MagneticIcon>
            <MagneticIcon>
              <span className="bg-gradient-to-r from-teal-500 via-orange-600 to-indigo-600 bg-clip-text text-transparent">
                H
              </span>
            </MagneticIcon>
            <MagneticIcon>
              <span className="bg-gradient-to-t from-green-400 via-zinc-500 to-red-700 bg-clip-text text-transparent">
                A
              </span>
            </MagneticIcon>
          </div>
          <MagneticIcon>
            <div>
              <a
                href="#"
                rel="noopener noreferrer"
              >
                <img
                  src="/talha-logo.svg"
                  alt="talha"
                  className="h-9 rounded-full"
                />
              </a>
            </div>
          </MagneticIcon>
          <div className="flex gap-2">
            <div className="lg:flex hidden gap-12 text-xl text-zinc-400">
              <ul className="flex gap-6 items-center justify-center ">
                {navLinks.map((link, i) => {
                  return (
                    <div key={i} className=" relative font-Anto   ">
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `${isActive ? "text-amber-400" : ""}`
                        }
                      >
                        <AnimatedLinks title={link.title} />
                      </NavLink>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="text-sm  ">
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  onChange={handleToggle}
                  checked={theme === "retro" ? false : true}
                />

                {/* sun icon */}
                <svg
                  className="swap-on fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-off fill-current w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
          </div>
          <div className="lg:hidden">
            <MobileNav navLinks={navLinks} />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
