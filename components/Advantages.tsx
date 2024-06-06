import React from "react";
import Premiumcard from "./Premiumcard";
import Image from "next/image";
import AdvantageCard from "./AdvantageCard";
import Ellipse from "./Ellipse";

const Advantages = () => {
  return (
    <section className="max-container padding-container">
      <div className="flex flex-col lg:flex-row py-10 pb-10 lg:py-20">
        <div className="relative flex flex-1 flex-col lg:w-1/2 w-full mb-4 lg:mb-0">
          <div className="section-head mt-10">Advantages</div>

          <div className="feattophead2">Why choose Uifry</div>
          <div>
            <AdvantageCard
              head="budgeting intervals"
              icon="/notification.svg"
              isVisible= {true}
              des="Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."
            />
          </div>
        </div>

        <div className="relative flex flex-1 flex-col lg:w-1/2 hidden lg:block w-full mb-4 lg:mb-0">
          <Image
            src="/texture.svg"
            alt="texture"
            width={327}
            height={237}
            style={{
              zIndex: 0,
              position: "absolute",

              top: 50,
              left: 160,
            }}
          ></Image>

<div className="relative z-5 ">
          <Ellipse
          left="7%"
          top="-50px"
          >

          </Ellipse>
          <Image
            src="/phone2.svg"
            alt="phone1"
            width={350}
            height={350}
            style={{
              position: "absolute",
              marginTop: 
              0,
              justifyContent: "center",
              top: -50,
              left:"25%"
            }}
          ></Image>
        </div>
          
        </div>
      </div>
      <div className="flex flex-col lg:flex-row py-0 pb-32 lg:py-10">
        <div className="relative flex flex-1 flex-col lg:w-1/2 hidden lg:block w-full mb-4 lg:mb-0">
          <Image
            src="/texture.svg"
            alt="texture"
            width={327}
            height={237}
            style={{
              zIndex: 0,
              position: "absolute",

              top: 50,
              left: 160,
            }}
          ></Image>

<div className="relative z-5 ">
          <Ellipse
          left="7%"
          top="-50px"
          >

          </Ellipse>
          <Image
            src="/phone1.svg"
            alt="phone1"
            width={350}
            height={350}
            style={{
              position: "absolute",
              marginTop: 
              0,
              justifyContent: "center",
              top: -50,
              left:"25%"
            }}
          ></Image>
        </div>
          
        </div>

        <div className="relative flex flex-1 flex-col lg:w-1/2 w-full mb-4 lg:mb-0 lg:mt-[6.25rem] ">
          <AdvantageCard
            head="fully customizable"
            icon="/customize.svg"
            isVisible= {true}
            des="Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."
          />
        </div>
      </div>
    </section>
  );
};

export default Advantages;
