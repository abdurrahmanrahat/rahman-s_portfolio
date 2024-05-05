"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypeContent = () => {
  const typeRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeRef.current, {
      strings: ["Front End Developer", "MERN Stack Developer"],
      startDelay: 300,
      typeSpeed: 150,
      backDelay: 150,
      smartBackspace: true,
      showCursor: false,
      loop: true,
    });
    console.log(typed);
  });
  return <span className="text-primary font-semibold" ref={typeRef}></span>;
};

export default TypeContent;
