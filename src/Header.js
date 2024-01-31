import React, { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      const headerContent = document.querySelector(".header-content");

      if (window.scrollY >= 50) {
        header.classList.add("bg-header");
        headerContent.classList.add("text-dark");
        setIsScrolled(true);
      } else {
        header.classList.remove("bg-header");
        headerContent.classList.remove("text-dark");
        setIsScrolled(false);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <header id="header">
      <div className={`header-content ${isScrolled ? "text-dark" : ""}`}>
        <div className="header-left">Vinay Reddy</div>
        {/* Add other header elements if needed */}
      </div>
    </header>
  );
};

export default Header;
