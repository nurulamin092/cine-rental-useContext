import Logo from "./assets/logo.svg";
import RingImg from "./assets/ring.svg";
import SumImg from "./assets/icons/sun.svg";
import MoonImg from "./assets/icons/moon.svg";
import ShoppingCart from "./assets/shopping-cart.svg";
import CartDetails from "./Components/Cine/CartDetails";
import { useState, useContext } from "react";

import { ThemeContext, MovieContext } from "./context";
const Headers = () => {
  const [showCart, setShowCart] = useState(false);

  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { cartData } = useContext(MovieContext);

  const handleShowCartDetails = () => {
    setShowCart(true);
  };
  return (
    <>
      <header>
        {showCart && <CartDetails onClose={() => setShowCart(false)} />}
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={Logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={RingImg} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={() => setDarkMode((darkMode) => !darkMode)}
              >
                <img
                  src={darkMode ? SumImg : MoonImg}
                  width="24"
                  height="24"
                  alt="theme-icon"
                />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={handleShowCartDetails}
              >
                <img src={ShoppingCart} width="24" height="24" alt="" />
                {cartData.length > 0 && (
                  <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12cf6f] to-white text-center p-[2px] w-[30px] h-[30px]">
                    {cartData.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Headers;
