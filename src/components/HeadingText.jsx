"use client";

import { useEffect, useRef } from "react";
import { animate, splitText, stagger } from "animejs";

export default function HeadingText({
  textContent = "Velkommen til Klimakampen",
  color = "text-green-600",
  size = "text-4xl md:text-6xl",
  duration = 1800,
  delayStep = 100,
  loop = true,
  direction = "alternate",
}) {
  const h1Ref = useRef(null);
  const splitRef = useRef(null);

  useEffect(() => {
    const el = h1Ref.current;
    if (!el) return;

    // 👇 Ny og anbefalt måte: bruk splitText()
    const split = splitText(el, {
      chars: {
        wrap: "clip",
        class: "char",
      },
    });

    splitRef.current = split;

    // Animasjon
    split.addEffect(({ chars }) => {
      return animate(chars, {
        translateY: [20, 0],
        opacity: [0, 1],
        duration,
        easing: "easeOutQuart",
        delay: stagger(delayStep),
        loop,
        direction,
      });
    });

    return () => split.revert();
  }, [duration, delayStep, loop, direction]);

  return (
    <h1 ref={h1Ref} className={`${size} font-bold ${color} mb-6 text-center`}>
      {textContent}
    </h1>
  );
}
