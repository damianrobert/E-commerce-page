import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../features/cart/cartSlice";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import productImage from "../assets/images/image-product-1.jpg";
import previous from "../assets/images/icon-previous.svg";
import next from "../assets/images/icon-next.svg";
import minus from "../assets/images/icon-minus.svg";
import plus from "../assets/images/icon-plus.svg";
import whiteCart from "../assets/images/white-cart.svg";
import thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";
import close from "../assets/images/close.svg";
import closeActive from "../assets/images/closeActive.svg";
import image1 from "../assets/images/image-product-1.jpg";
import image2 from "../assets/images/image-product-2.jpg";
import image3 from "../assets/images/image-product-3.jpg";
import image4 from "../assets/images/image-product-4.jpg";

export default function Hero() {
  const [lightBox, setLightBox] = useState(true);
  const dispatch = useDispatch();
  const { amount } = useSelector((store) => store.cart);
  const [currentImg, setCurrentImg] = useState(image1);
  const [index, setIndex] = useState(1);

  const handleLightBox = () => {
    setLightBox(!lightBox);
  };

  // lightbox logic

  const previousImage = () => {
    if (index === 4) {
      setCurrentImg(image3);
      setIndex(3);
    } else if (index === 3) {
      setCurrentImg(image2);
      setIndex(2);
    } else if (index === 2) {
      setCurrentImg(image1);
      setIndex(1);
    } else if (index === 1) {
      setCurrentImg(image4);
      setIndex(4);
    }
  };

  const nextImage = () => {
    if (index === 1) {
      setCurrentImg(image2);
      setIndex(2);
    } else if (index === 2) {
      setCurrentImg(image3);
      setIndex(3);
    } else if (index === 3) {
      setCurrentImg(image4);
      setIndex(4);
    } else if (index === 4) {
      setCurrentImg(image1);
      setIndex(1);
    }
  };

  return (
    <div className=" relative w-[375px] mx-auto md:w-[1110px] md:flex  ">
      <div>
        <img
          className=" w-[375px] md:rounded-[10px] md:inline-block md:w-[445px] md:h-[445px]
        md:mr-[30px] md:mb-[10px] hover:cursor-pointer "
          src={currentImg}
          alt=""
          onClick={handleLightBox}
        />
        <div className=" hidden md:flex md:w-[445px] md:justify-between ">
          <img
            className=" w-[88px] h-[88px] rounded-[10px] hover:bg-[#ffffff4f] hover:border-[2px] 
            hover:border-[#FF7E1B] hover:cursor-pointer  "
            src={thumbnail1}
            alt=""
            onClick={handleLightBox}
          />

          <img
            className=" w-[88px] h-[88px] rounded-[10px]  hover:bg-[#ffffff4f] hover:border-[2px] 
            hover:border-[#FF7E1B] hover:cursor-pointer "
            src={thumbnail2}
            alt=""
            onClick={handleLightBox}
          />

          <img
            className=" w-[88px] h-[88px] rounded-[10px]  hover:bg-[#ffffff4f] hover:border-[2px] 
            hover:border-[#FF7E1B] hover:cursor-pointer "
            src={thumbnail3}
            alt=""
            onClick={handleLightBox}
          />

          <img
            className=" w-[88px] h-[88px] rounded-[10px]  hover:bg-[#ffffff4f] hover:border-[2px] 
            hover:border-[#FF7E1B] hover:cursor-pointer "
            src={thumbnail4}
            alt=""
            onClick={handleLightBox}
          />
        </div>
      </div>

      <div
        className={
          lightBox
            ? `hidden`
            : ` w-[10000px] h-[10000px] bg-[#292929ad] absolute left-[-300px] top-[-300px] z-[1] `
        }
      >
        <div
          className=" absolute left-[820px] top-[220px] z-[1]
          hover:left-[-10000%]  "
        >
          <img src={close} alt="" onClick={handleLightBox} />
        </div>

        <div
          className=" absolute left-[820px] top-[220px] hover:cursor-pointer 
        hover:z-[2]  "
        >
          <img src={closeActive} alt="" onClick={handleLightBox} />
        </div>

        <div className=" relative ">
          <img
            className=" w-[550px] h-[550px] absolute left-[300px] top-[250px] 
            rounded-[10px] "
            src={currentImg}
            alt=""
          />

          <div
            className=" absolute left-[280px] top-[500px] bg-[#ffffff] w-[40px] 
          h-[40px] rounded-[50%] hover:cursor-pointer  "
            onClick={previousImage}
          >
            <img
              className=" absolute left-[25%] top-[25%] "
              src={previous}
              alt=""
            />
          </div>

          <div
            className=" absolute left-[830px] top-[500px] bg-[#ffffff] w-[40px] 
          h-[40px] rounded-[50%] hover:cursor-pointer "
            onClick={nextImage}
          >
            <img
              className=" absolute left-[35%] top-[25%] "
              src={next}
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className="  absolute  left-[16px] top-[130px]  w-[40px] h-[40px] 
            rounded-[50%] bg-[#ffffff] hover:cursor-pointer md:hidden "
        onClick={previousImage}
      >
        <img
          className="  w-fit h-fit mx-auto my-[10px] "
          src={previous}
          alt=""
        />
      </div>

      <div
        className="  absolute left-[319px] top-[130px]  w-[40px] h-[40px] 
            rounded-[50%] bg-[#ffffff] hover:cursor-pointer md:hidden "
        onClick={nextImage}
      >
        <img className=" w-fit h-fit mx-auto my-[10px] " src={next} alt="" />
      </div>

      <div className=" md:flex flex-col md:w-[445px] md:h-[426px] md:relative ">
        <p
          className=" text-[#FF7E1B] text-[12px] font-bold leading-[15px] 
      tracking-[1.8px] uppercase mt-[20px] ml-[24px] md:w-fit md:inline-block md:mx-0 "
        >
          sneaker company
        </p>

        <h1
          className=" w-[327px] mx-auto text-[#1D2026] mt-[19px] text-[28px] 
      font-bold leading-[32px] md:ml-0 md:inline-block  "
        >
          Fall Limited Edition Sneakers
        </h1>

        <p
          className=" w-[327px] h-[100px] mx-auto text-[#69707D] text-[15px] 
      leading-[25px] mt-[15px] md:mx-0 md:w-full "
        >
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>

        <div
          className=" flex items-center w-[326px] h-[34px] mx-auto mt-[24px]
          md:mx-0  "
        >
          <div
            className=" w-[106px] h-[28px] text-[#1D2026] text-[28px] font-bold 
        leading-[35px] mr-[16px] pb-[35px] "
          >
            $125.00
          </div>
          <div
            className=" w-[51px] h-[28px] bg-[#FFEEE2] text-[#FF7E1B] rounded-[6px]
         mr-[90px]  "
          >
            <p className=" w-fit mx-auto font-bold ">50%</p>
          </div>
          <div
            className=" w-[63px] h-[26px] text-[#B6BCC8] text-[16px] leading-[26px]
        line-through  "
          >
            $250.00
          </div>
        </div>

        <div
          className=" flex w-[327px] h-[56px] mx-auto mt-[24px] items-center
        md:w-[100px] md:mx-0 md:inline-block md:relative md:mt-[60px] "
        >
          <div className=" w-fit h-fit ml-[24px] md:m-0 md:absolute md:top-[32px] ">
            <img
              className=" hover:cursor-pointer "
              src={minus}
              alt=""
              onClick={() => {
                dispatch(decrease());
              }}
            />
          </div>

          <div
            className=" w-fit h-fit mx-auto font-bold md:m-0 md:absolute
          md:left-[40px] md:top-[20px] "
          >
            {amount}
          </div>

          <div
            className=" w-fit h-fit mr-[22px] md:m-0 md:absolute
          md:left-[80px] md:top-[28px] "
          >
            <img
              className=" hover:cursor-pointer "
              src={plus}
              alt=""
              onClick={() => {
                dispatch(increase());
              }}
            />
          </div>
        </div>
        <div
          className=" relative w-[327px] md:w-[290px] h-[56px] mx-auto rounded-[10px]
       bg-[#FF7E1B] text-[#ffffff] hover:cursor-pointer md:mx-0 md:inline-block
       md:absolute md:bottom-[20px] md:left-[120px] "
        >
          <img
            className=" absolute left-[104px] top-[20px] md:left-[100px] "
            src={whiteCart}
            alt=""
          />
          <p
            className=" absolute top-[20px] left-[137px]  text-[16px] font-bold leading-[20px]
          md:left-[120px]  "
          >
            Add to cart
          </p>
        </div>
      </div>
    </div>
  );
}
