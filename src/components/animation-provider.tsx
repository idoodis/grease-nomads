"use client";

import { PropsWithChildren, useEffect } from "react";
import { usePathname } from "next/navigation";

const DATA_ATTRIBUTE = "data-animate";
const SELECTORS = [
  "main > section",
  "main > div",
  "main > article",
  "main > header",
  "main > footer",
  "main .animate-in"
];

function setRevealTargets(root: HTMLElement) {
  const selector = SELECTORS.join(",");
  const targets = root.querySelectorAll<HTMLElement>(selector);
  targets.forEach((node, index) => {
    if (!node.hasAttribute(DATA_ATTRIBUTE)) {
      node.setAttribute(DATA_ATTRIBUTE, "");
      node.style.setProperty("--animate-delay", `${120 + index * 80}ms`);
    }
  });
  return targets;
}

export default function AnimationProvider({ children }: PropsWithChildren) {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      document.querySelectorAll(`[${DATA_ATTRIBUTE}]`).forEach((el) => el.classList.add("gn-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("gn-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    const run = () => {
      const root = document.querySelector("main");
      if (!root) return;
      const targets = setRevealTargets(root);
      targets.forEach((node) => observer.observe(node));
    };

    const timeout = window.setTimeout(run, 0);

    return () => {
      window.clearTimeout(timeout);
      observer.disconnect();
    };
  }, [pathname]);

  return <>{children}</>;
}

