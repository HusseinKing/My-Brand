import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer bg-[#171717]">
        <div className="wrap flex justify-between items-center px-12 text-white font-bold py-6 tl:px-4 tl:py-4 ">
          <h1 className="text-3xl">Hussein</h1>
          <div className="flex gap-4 cursor-pointer ">
            <Link to="https://twitter.com/" target="_blank">
              <i className="fa-brands fa-twitter border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </Link>
            <Link to="https://www.instagram.com/" target="_blank">
              <i className="fa-brands fa-instagram border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </Link>
            <Link to="https://github.com/Reayhs/react-tailwind-portfolio" target="_blank">
              <i className="fa-brands fa-github border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
