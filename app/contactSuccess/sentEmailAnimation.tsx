import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const envelopeVariants = {
  closed: { rotateY: 0 },
  open: { rotateY: 180 },
  sending: { opacity: 0, scale: 0.5 },
};

const envelopeTransition = {
  duration: 1,
  ease: "easeInOut",
};

const emailTrail = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 1 } },
};

export default function EmailSendingAnimation() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial="closed"
        animate="open"
        exit="sending"
        variants={envelopeVariants}
        transition={envelopeTransition}
        className="relative"
      >
        <div className="w-24 h-16 bg-[#CCFF00] rounded-t-lg relative z-10"></div>
        <motion.div
          className="w-24 h-16 bg-[#1c1c22] rounded-t-lg absolute top-0"
          variants={emailTrail}
        >
          <motion.div
            className="w-full h-full bg-[#CCFF00] rounded-b-lg"
            initial={{ rotateX: 0 }}
            animate={{ rotateX: 180 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          ></motion.div>
        </motion.div>
      </motion.div>
      <motion.h1
        className="text-2xl sm:text-3xl font-bold mt-8 text-[#CCFF00]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
      >
        Email Sent Successfully!
      </motion.h1>
      <motion.p
        className="flex flex-col gap-y-5 w-2/3 sm:text-lg sm:w-full text-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.5, duration: 1 } }}
      >
        We will be in touch soon. Thank you for reaching out!
        <button
          onClick={() => router.push("/")}
          className="px-4 py-1 sm:px-6 sm:py-3 bg-yellow-1000 text-primary rounded-lg font-bold hover:bg-yellow-1000 hover:animate-pulse transition duration-300"
        >
          Return to Home
        </button>
      </motion.p>
    </div>
  );
}
