import { motion } from "framer-motion";

export default function Bounce({ children }) {
  const anim = (variant) => {
    return {
      initial: "initial",
      animate: "animate",
      exit: "exit",
      variant,
    };
  };

  const bounce = {
    initial: {
      y: -20, // Start slightly above its natural position
      opacity: 0, // Initially invisible
    },
    animate: {
      y: 0, // Bounce back to its original position
      opacity: 1, // Fade in
      transition: {
        type: "spring", // Use a spring animation
        damping: 10, // Controls the spring's "bounciness"
        stiffness: 100, // Controls the spring's stiffness
      },
    },
    exit: {
      y: 20, // Bounce slightly upwards before exiting
      opacity: 0, // Fade out
    },
  };

  return <motion.div {...anim(bounce)}>{children}</motion.div>;
}
