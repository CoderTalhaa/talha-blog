import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function MobileNav({ navLinks }) {
  const [open, setOpen] = useState(false);
  const toggleNav = () => {
    setOpen(!open);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    animate: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <div>
      <div
        style={{ color: "#FBBF24" }}
        className="cursor-pointer text-2xl font-Anto   "
        onClick={toggleNav}
      >
        MENU
      </div>
      <AnimatePresence>
        {open && (
          <nav>
            <motion.div
              style={{ background: "#FBBF24" }}
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-0 top-0 w-full h-screen origin-top  text-black p-10 "
            >
              <div className="flex h-full flex-col ">
                <div className="flex justify-between">
                  <h1 className="text-2xl font-Anto transition-all hover:text-yellow-400 line-through">
                    PORTFOLIO
                  </h1>
                  <p
                    className="cursor-pointer text-2xl font-Anto underline"
                    onClick={toggleNav}
                  >
                    CLOSE
                  </p>
                </div>
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="animate"
                  exit="initial"
                  className="flex flex-col h-full justify-center items-center gap-4 pb-20"
                >
                  {navLinks.map((links, i) => {
                    return (
                      <div
                        key={i}
                        className="overflow-hidden"
                        onClick={toggleNav}
                      >
                        <MobileNavLink
                          key={i}
                          title={links.title}
                          path={links.path}
                        />
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          </nav>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNav;

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const MobileNavLink = ({ title, path }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      initial="initial"
      animate="open"
      className="text-5xl font-philos uppercase font-semibold "
    >
      <NavLink to={path}>{title}</NavLink>
    </motion.div>
  );
};
