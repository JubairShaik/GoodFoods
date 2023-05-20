import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import {useContext } from "react";
import UserContext  from "../utils/userContext"

const Footer = () => {

  const {user} = useContext(UserContext)

  return(
  
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start  mr-10">
            <span className="text-[2rem] font-bold  font-poppins text-orange-400">GoodFoods</span>
          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
                 Come taste the magic at GoodsFoods - where every bite is a love potion.
          </p>
        </div>
  
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
  
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2022  GoodsFoods. All Rights Reserved.
        </p>
       
  
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


export default Footer;


{/*

 <p className="sm:text-[30px] text-[25px]  animate-bounce p-3 mt-5 sm:mt-10 text-sm  font-medium  font-poppins  textorang sm:font-bold"> Built by  {user.name}</p>
        <span className="sm:text-[20px] text-[15px]  animate-bounce p-3 mt-5 sm:mt-10 text-sm  font-medium  font-poppins   text-slate-400  sm:font-bold">{user.email}</span>


*/}