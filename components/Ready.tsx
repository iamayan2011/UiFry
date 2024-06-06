import Buttons2 from "./Buttons2";
import EllipseRev from "./EllipseRev";
import Image from "next/image";


const Ready = () => {
  return (
    <section className="max-container padding-container flex flex-col py-10 pb-32 lg:py-20">
      <div className="ready flex flex-col lg:flex-row pt-5">
        <div className=" relative flex flex-1 flex-col lg:w-1/2 align-middle" style={{marginTop: "7%", marginBottom:"10%", paddingLeft:"7%"}}>

            <EllipseRev 
            bottom="-25rem"
            left="-15rem"
            />
          <div className="feattophead3" >
            Ready to get started?
          </div>
          <p className="pwhite2 w-[80%] mb-4">
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </p>
          <div><Buttons2
            icon={false}
            icon2={true}
            variant="btn-cont"
            title="Download App"
            type="button"
          ></Buttons2></div>
          
        </div>
        <div className="relative flex flex-1 flex-col lg:w-1/2 hidden lg:block">
            <EllipseRev
            top="-10rem"
            right="-15rem" />

<Image 
          src="/rphone1.svg" alt="phone1" width={120} height={405} 
          style={{position:"absolute",
            top:"0rem",
            right:0,
            overflow:"hidden"
            
            
          }} 
          >

          </Image>

          <Image 
          src="/rphone2.svg" alt="phone2" width={200} height={504} 
          style={{position:"absolute",
            
            right:60,
            top:40
            
            
          }} 
          >

          </Image>

          <Image 
          src="/rphone3.svg" alt="phone1" width={270} height={600} 
          style={{position:"absolute",
            
            right:180,
            top:60
            
          }} 
          >

          </Image>


        </div>
      </div>
    </section>
  );
};

export default Ready;
