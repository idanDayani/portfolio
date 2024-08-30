import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingEffect: React.FC = () => {
  const el = useRef<HTMLDivElement | null>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: [
        "React.",
        "Node.js.",
        "MongoDB.",
        "PostgreSQL.",
        "JavaScript.",
        "TypeScript.",
        "Tailwind CSS.",
        "React Native.",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };

    if (el.current) {
      typed.current = new Typed(el.current, options);
    }

    return () => {
      typed.current?.destroy();
    };
  }, []);

  return <div className="text-xl text-yellow-1000" ref={el}></div>;
};

export default TypingEffect;
