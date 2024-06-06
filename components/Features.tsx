import Image from "next/image";
import Premiumcard from "./Premiumcard";
import Ellipse from "./Ellipse";

const Features = () => {
  return (
    <section className="max-container padding-container flex flex-col lg:flex-row py-10 pb-32 lg:py-20">
      <div className="relative flex flex-1 flex-col lg:w-1/2 hidden lg:block">
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

      <div className="relative flex flex-1 flex-col lg:w-1/2">
        <div className="section-head">Features</div>

        <div className="feattophead2">Uifry Premium</div>
        <div>
          <Premiumcard
            head="budgeting intervals"
            icon="/star-05.svg"
            des="Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
          />

          <Premiumcard
            head="budgeting intervals"
            icon="/cube-02.svg"
            des="Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
          />

          <Premiumcard
            head="budgeting intervals"
            icon="/cube-04.svg"
            des="Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
