import FaqCard from "./FaqCard";

const Faq = () => {
  return (
    <section className="max-container padding-container flex flex-col py-10 pb-32 lg:py-20">
      <div className="section-head">faq</div>
      <div className="feattophead2 w-[40%]  leading-10 mt-2">
        Frequently asked questions
      </div>

      <div className="flexBetween flex-col lg:flex-row gap-2 mt-5">
        <FaqCard 
        title="the best financial accounting app ever!"
        des="“Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
        ultricies. In ultrices malesuada elit mauris.“"
        variant= "faq-orange"
        
        
        />
        <FaqCard 
        title="the best financial accounting app ever!"
        des="“Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
        ultricies. In ultrices malesuada elit mauris.“"
        variant= "faq-normal"
        />
        

        
      </div>

      <div className="flexBetween flex-col lg:flex-row gap-2 mt-5">

      <FaqCard 
        title="the best financial accounting app ever!"
        des="“Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
        ultricies. In ultrices malesuada elit mauris.“"
        variant= "faq-normal"
        />
        
        <FaqCard 
        title="the best financial accounting app ever!"
        des="“Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
        ultricies. In ultrices malesuada elit mauris.“"
        variant= "faq-orange"
        
        
        />
        
        

        
      </div>

      <div className="flexBetween flex-col lg:flex-row gap-2 mt-5">
        <FaqCard 
        title="the best financial accounting app ever!"
        des="“Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
        ultricies. In ultrices malesuada elit mauris.“"
        variant= "faq-orange"
        
        
        />
        <FaqCard 
        title="the best financial accounting app ever!"
        des="“Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
        ultricies. In ultrices malesuada elit mauris.“"
        variant= "faq-normal"
        />
        

        
      </div>
    </section>
  );
};

export default Faq;
