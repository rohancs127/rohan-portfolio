// src/Components/Section.jsx

import React, { forwardRef } from "react";
import { motion } from 'framer-motion';

const Section = forwardRef(({ children, className }, ref) => {
  return (
    <motion.section
      ref={ref}
      className={`py-24 md:py-32 ${className || ''}`}
      // Initial state (before animation)
      initial={{ opacity: 0, y: 50 }}
      // Animate to this state when in view
      whileInView={{ opacity: 1, y: 0 }}
      // Animation settings
      transition={{ duration: 0.6, ease: "easeInOut" }}
      // Trigger animation once when it enters the viewport
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.section>
  );
});

export default Section;