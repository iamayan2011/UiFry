"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import AdvantageCard from "./AdvantageCard";
import { testimonials } from "@/constants";
import Ellipse from "./Ellipse";

const Testinomials = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-container padding-container flex flex-col py-10 pb-32 lg:py-20">
      <div className="lg:mt-[100px] flexCenter flex-col">
        <div className="test-head" >
          Testimonials
        </div>
        <div className="feattophead2 w-[40%] text-center leading-10 mt-2">
          what our users say about us?
        </div>
      </div>

      <section className="flex flex-col lg:flex-row">
        <div className="relative flex flex-1 flex-col lg:w-1/2 hidden lg:block w-full mb-4 lg:mb-0">
          <Image
            src="/texture.svg"
            alt="texture"
            width={327}
            height={237}
            style={{
              zIndex: 0,
              position: "absolute",

              top: 80,
              left: 50,
            }}
          ></Image>

          <div className="relative z-5">
            <Ellipse
            
            />

            <Image
              src="/person1.svg"
              alt="person1"
              width={220}
              height={350}
              style={{
                position: "absolute",
                left: "170px",

                justifyContent: "center",
                top: "170px",
              }}
            ></Image>

            <Image
              src="/person2.svg"
              alt="person2"
              width={220}
              height={350}
              style={{
                position: "absolute",
                left: "50px",

                justifyContent: "center",
                top: "50px",
              }}
            ></Image>

            <Image
              src="/person3.svg"
              alt="person2"
              width={220}
              height={350}
              style={{
                position: "absolute",
                left: "290px",

                justifyContent: "center",
                top: "50px",
              }}
            ></Image>

            <Image
              src="/person4.svg"
              alt="person4"
              width={220}
              height={350}
              style={{
                position: "absolute",
                left: "50px",

                justifyContent: "center",
                top: "290px",
              }}
            ></Image>

            <Image
              src="/person5.svg"
              alt="person2"
              width={220}
              height={350}
              style={{
                position: "absolute",
                left: "290px",

                justifyContent: "center",
                top: "290px",
              }}
            ></Image>
          </div>
        </div>

        <div className="relative flex flex-1 flex-col lg:w-1/2 w-full mb-4 lg:mb-0 lg:mt-[6.25rem] ">
          <AdvantageCard
            head="the best financial accounting app ever!"
            des="“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”"
          />

          {testimonials.map((testimonial, index) => (
            <>
              <AdvantageCard
                key={index}
                head={testimonial.head}
                des={testimonial.des}
                isVisible={activeIndex === index}
              />
            </>
          ))}

          <div className="gap-4 mt-5 flexStart">
            {testimonials.map((testimonial, index) => (
              <>
              <div key={index} className="flex flex-col items-center">
              <Image
                src={testimonial.icon}
                alt={`person${index + 1}`}
                width={30}
                height={150}
                className="cursor-pointer transition-all duration-200"
                style={{
                  opacity: activeIndex === index ? 1 : 0.5,
                  transform: activeIndex === index ? "scale(1.33)" : "scale(1)",
                }}
                onClick={() => setActiveIndex(index)}
              />
              
            </div>
            
            </>
            ))}
          </div>

          <div className="mt-2 feathead">
          {testimonials.map((testimonial, index) => (
              <>
              
            {activeIndex === index && (
        <div className="mt-4 feathead">{testimonial.name}</div>
      )}
            </>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Testinomials;
