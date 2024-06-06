import Image from "next/image";
import Buttons from "./Buttons";
import Buttons2 from "./Buttons2";
import Herofeat from "./Herofeat";
import Ellipse from "./Ellipse";



const Hero = () => {

  
  return (
    <section
      className="max-container padding-container flex flex-col py-10 pb-32
    lg:py-20 lg:flex-row "
    >
      <div className="relative flex flex-1 flex-col lg:w-1/2">
        <Image
          src="/texture.svg"
          alt="texture"
          width={327}
          height={237}
          style={{
            zIndex: 0,
            position: "absolute",
            justifyContent: "end",
            float: "right",
          }}
          className="absolute left-[200px] top-[-80px]"
        ></Image>
        <div className="relative z-20 space-y-5">
          <h1 className="">Make the best financial decisions</h1>
          <p className="pt-2 capitalize">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            <br></br>
          </p>
          <div className="flexStart gap-2 relative">
            <Buttons
              type="button"
              title="Get Started"
              variant="btn-normal"
              icon={true}
            ></Buttons>

            <Buttons2
              type="button"
              title="Watch Video"
              variant="btn-cont"
              icon={true}
            ></Buttons2>
          </div>

          <div className="flex justify-center">
            <div className="transformTilt flex z-20 mt-10 relative">
              <div className="aa">A</div>

              <div className="bg-customOrange-light text-black font-custom absolute flex flex-row-reverse rounded-lg" style={{transform:"rotate(28deg)",

                bottom:"-8.55rem",
                right:"5rem",
                zIndex:"-2"
              }}
                
              >

                <div className="flex flex-col p-7 border-l-2 border-l-black">
                    <div className="herofeathd2 capitalize">
                    uifry premium 

                    </div>
                    <div className="herofeatdes2">
                      Free Trial
                    </div>
                </div>

                <div className="flex flexCenter flex-col p-4 border-l-2 border-l-black">
                  <Image src="/star7.svg" alt="star" width={50} height={50}></Image>

                </div>

                <div className=" invisible flex flexCenter flex-col p-4 ">
                  <Image src="/star7.svg" alt="star" width={10} height={10}></Image>

                </div>
                

              </div>

              <div className=" text-black font-custom absolute flex bg-cover" style={{transform:"rotate(-17deg)",

                bottom:"-1rem",
                right:"-0rem",
                zIndex:"-1",
                backgroundImage: "url('/bgskew.svg')"
              }}
                
              >

                <div className="flex flex-col herofeathd2 capitalize"
                style={{padding:"28px 80px",
                

                }}
                >
                make the best financial decisions
                    
                </div>

                
                

              </div>
             
              <div className="flex bg-black dark:bg-white rounded-r-lg" style={{ marginLeft: "-31px" }}>
                <Herofeat></Herofeat>
                <Herofeat></Herofeat>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-1 flex-col lg:w-1/2">
        <Image
          src="/texture.svg"
          alt="texture"
          width={327}
          height={237}
          style={{
            zIndex: 0,
            position: "absolute",
            justifyContent: "end",
            float: "right",
            bottom:-80,
            left:160
          }}
        ></Image>

        <div className="relative z-5 hidden lg:block">
          <Ellipse
          right="-15px"
          top="-40px"
          >

          </Ellipse>

          <Image 
          src="/phone1.svg" alt="phone1" width={350} height={504} 
          style={{position:"absolute",
            marginTop:80,
            right:-60,
            transform:"rotate(-15deg)"
            
          }} 
          >

          </Image>

          <Image 
          src="/phone2.svg" alt="phone2" width={350} height={504} 
          style={{position:"absolute",
            marginTop:40,
            right:40,
            transform:"rotate(-15deg)"
          }} 
          >

          </Image>

          <Image 
          src="/phone1.svg" alt="phone1" width={350} height={600} 
          style={{position:"absolute",
            marginTop:0,
            right:140,
            transform:"rotate(-15deg)"
          }} 
          >

          </Image>

          

        </div>
        
        
      </div>
    </section>
  );
};

export default Hero;
