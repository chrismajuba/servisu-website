import React from "react";

/**
 * Lightweight stand-in for framer-motion so the app can build
 * when the package cannot be installed from the network.
 * Preserves element type + className/children; ignores animation props.
 */
const MOTION_PROP_KEYS = new Set([
  "initial",
  "animate",
  "exit",
  "transition",
  "variants",
  "whileHover",
  "whileTap",
  "whileInView",
  "viewport",
  "layout",
  "layoutId",
]);

const createMotionComponent = (tag) => {
  const MotionComponent = React.forwardRef(
    ({ children, className, style, id, href, target, rel, "aria-label": ariaLabel, "aria-hidden": ariaHidden, onClick, ...rest }, ref) => {
      const safeProps = { className, style, id, href, target, rel, onClick, ref };
      if (ariaLabel !== undefined) safeProps["aria-label"] = ariaLabel;
      if (ariaHidden !== undefined) safeProps["aria-hidden"] = ariaHidden;

      // Drop framer-only props; keep unknown DOM attrs that are primitives
      Object.keys(rest).forEach((key) => {
        if (!MOTION_PROP_KEYS.has(key) && typeof rest[key] !== "object") {
          safeProps[key] = rest[key];
        }
      });

      return React.createElement(tag, safeProps, children);
    }
  );
  MotionComponent.displayName = `motion.${tag}`;
  return MotionComponent;
};

export const motion = new Proxy(
  {},
  {
    get: (_target, key) => {
      if (typeof key !== "string") return undefined;
      return createMotionComponent(key);
    },
  }
);
