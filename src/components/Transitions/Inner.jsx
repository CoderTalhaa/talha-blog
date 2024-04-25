import { motion } from "framer-motion";

export default function Inner({ children }) {


  const anim = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };

  const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 1
    },
    exit: {
        opacity: 1
    },
  }

  return <motion.div {...anim(opacity)}>
    {children}
    
    </motion.div>;
}
