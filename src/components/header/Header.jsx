import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-sky-800 flex justify-around">
        <div>
          <img src="/images/CodescLogo.png" />
        </div>
        <div>
          <nav>
            <ul className="flex m-4 p-0">
              <li style={{ margin: "0 15px" }}>
                <a href="#" style={{ color: "white" }}>
                  Home
                </a>
              </li>
              <li style={{ margin: "0 15px" }}>
                <a href="#" style={{ color: "white" }}>
                  About
                </a>
              </li>
              <li style={{ margin: "0 15px" }}>
                <a href="#" style={{ color: "white" }}>
                  Project
                </a>
              </li>
              <li style={{ margin: "0 15px" }}>
                <a href="#" style={{ color: "white" }}>
                  Meet Our Team
                </a>
              </li>
              <li style={{ margin: "0 15px" }}>
                <a href="#" style={{ color: "white" }}>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="py-2">
          <button
            className="px-6 py-3 bg-gradient-to-r text-white from-fuchsia-500 to-blue-800 rounded-xl shadow-md"
            rounded-xl
            onclick={() => {}}
          >
            {" "}
            Start Project
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
