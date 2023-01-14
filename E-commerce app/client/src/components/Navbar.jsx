import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import menu from "../assets/images/icon-menu.svg";
import logo from "../assets/images/logo.svg";
import cartSVG from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import close from "../assets/images/icon-close.svg";
import deleteIcon from "../assets/images/icon-delete.svg";
import thumbnail from "../assets/images/image-product-1-thumbnail.jpg";

export default function Navbar(props) {
  const [open, setOpen] = useState(false);
  const [cartIcon, setCartIcon] = useState(false);
  const dispatch = useDispatch();
  const { amount } = useSelector((store) => store.cart); // get the amount state from redux store

  const handleCart = () => {
    setCartIcon(!cartIcon);
  };

  const handleNav = () => {
    setOpen(!open);
  };

  return (
    <div className=" h-[67px] md:w-[1110px] md:mx-auto md:mb-[20px]  ">
      <div
        className=" w-[327px] h-[24px]  mx-auto 
                mt-[19px] flex place-items-center py-[5px] md:w-[1110px] "
      >
        <div className=" w-fit ">
          <img
            className="mr-[16px] hover:cursor-pointer md:hidden "
            src={menu}
            alt=""
            onClick={handleNav}
          />
        </div>
        <div className=" w-fit mr-[50px] hover:cursor-pointer ">
          <img src={logo} alt="" />
        </div>

        <div
          className={
            open
              ? ` absolute top-[0px] left-[0px] w-[250px] h-[920px] bg-[#ffffff] duration-500 z-[3]
               `
              : ` absolute  left-[-100%] md:static    `
          }
        >
          <img
            className=" absolute top-[24px] left-[25px] hover:cursor-pointer md:hidden "
            src={close}
            alt=""
            onClick={handleNav}
          />

          <ul className=" mt-[92px] ml-[25px] w-fit md:m-0 md:mr-[350px]   ">
            <li
              className=" mb-[20px] font-bold hover:cursor-pointer w-fit md:inline 
            md:font-normal md:text-[#69707D] md:text-[15px] md:leading-[26px] md:mr-[33px]
            md:hover:border-b-[4px] md:border-[#FF7E1B] "
            >
              Collections
            </li>
            <li
              className=" mb-[20px] font-bold hover:cursor-pointer w-fit md:inline 
            md:font-normal md:text-[#69707D] md:text-[15px] md:leading-[26px] md:mr-[33px]
            md:hover:border-b-[4px] md:border-[#FF7E1B] md:duration-800 "
            >
              Men
            </li>
            <li
              className=" mb-[20px] font-bold hover:cursor-pointer w-fit md:inline 
            md:font-normal md:text-[#69707D] md:text-[15px] md:leading-[26px] md:mr-[33px]
            md:hover:border-b-[4px] md:border-[#FF7E1B] md:duration-800 "
            >
              Women
            </li>
            <li
              className=" mb-[20px] font-bold hover:cursor-pointer w-fit md:inline 
            md:font-normal md:text-[#69707D] md:text-[15px] md:leading-[26px] md:mr-[33px]
            md:hover:border-b-[4px] md:border-[#FF7E1B] md:duration-800 "
            >
              About
            </li>
            <li
              className=" mb-[20px] font-bold hover:cursor-pointer w-fit md:inline 
            md:font-normal md:text-[#69707D] md:text-[15px] md:leading-[26px] md:mr-[33px]
            md:hover:border-b-[4px] md:border-[#FF7E1B] md:duration-800 "
            >
              Contact
            </li>
          </ul>
        </div>

        <div className=" relative ">
          <img
            className="mr-[22px] hover:cursor-pointer "
            src={cartSVG}
            alt=""
            onClick={handleCart}
          />
          <div
            className={
              amount
                ? `w-[19px] h-[13px] bg-[#FF7E1B] rounded-[6px]  text-[#ffffff] absolute 
                top-[-4px] left-[7px] `
                : ` hidden `
            }
          >
            <p className=" w-fit h-fit mx-auto text-[10px] font-bold  ">
              {amount}
            </p>
          </div>
        </div>

        <Link to="/Profile">
          <div className=" box-border ">
            <img
              className="  rounded-[50%] w-[24px] md:w-[50px] hover:border-[2px] hover:border-[#FF7E1B]
            hover:cursor-pointer "
              src={avatar}
              alt=""
            />
          </div>
        </Link>
      </div>

      <div
        className={
          open
            ? ` w-full h-[920px] bg-[#292929cc] absolute top-[0px] opacity-90 duration-500 z-[2] 
            md:hidden `
            : null
        }
      ></div>

      <div
        className={
          cartIcon
            ? `absolute top-[100px] left-[8px]  w-[360px] h-[256px] 
      rounded-[10px] bg-[#ffc99f] z-[1] duration-300 md:left-[980px] 
      md:shadow-xl shadow-gray-900 `
            : `absolute top-[-100%] left-[8px]  w-[360px] h-[256px] 
      rounded-[10px]   `
        }
      >
        <div
          className=" w-full h-[67px] border-b-[1.5px] border-[#E4E9F2] 
        text-[#1D2026] font-bold  "
        >
          <p className=" absolute left-[24px] top-[24px] text-[#ffffff]  ">
            Cart
          </p>
        </div>

        <div
          className={
            amount
              ? ` hidden `
              : `absolute w-[142px] h-[26px] top-[145px] left-[109px] text-[#ffffff] 
              font-bold text-center leading-[26px]   `
          }
        >
          Your cart is empty.
        </div>
        <div
          className={
            amount
              ? `w-[312px] h-[52px] absolute top-[92px] left-[24px] `
              : `hidden`
          }
        >
          <img
            className="absolute top-[24px] left-[10px] w-[50px] h-[50px] rounded-[4px] "
            src={thumbnail}
            alt=""
          />
          <div className=" w-[213px] h-[52px] absolute top-[24px] left-[75px]  ">
            <p>Fall Limited Edition Sneakers</p>
            <p>
              $125.00 X {amount} <b>${125 * amount}</b>
            </p>
          </div>

          <img
            className=" absolute left-[300px] top-[42px] hover:cursor-pointer "
            src={deleteIcon}
            alt=""
            onClick={() => {
              dispatch(clearCart());
            }}
          />

          <div
            className={
              amount
                ? `w-[312px] h-[56px] rounded-[10px] bg-[#FF7E1B] absolute top-[180px]
        left-[24px] text-[#ffffff] md:top-[90px] md:left-[5px] hover:cursor-pointer `
                : `w-[312px] h-[56px] rounded-[10px] bg-[#FF7E1B] absolute top-[180px]
        left-[-100%] text-[#ffffff]`
            }
          >
            <p className=" font-bold w-fit mx-auto mt-[15px]">Checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
}
