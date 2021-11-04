import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";

const Nav = () => {
  return (
    <motion.nav variants={fadeIn} initial="hidden" animate="show">
      <a href="/Home">Home</a>
      <a href="/Products">Catalog</a>
      <a href="/Branding">Branding and Logo Design</a>
      <a href="/Portfolio">Portfolio</a>
      <a href="/General Store">General Store</a>
      <a href="/Events">Events</a>
    </motion.nav>
  );
};

export default Nav;
