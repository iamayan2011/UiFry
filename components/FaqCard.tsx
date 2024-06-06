
type FaqProps = {
    
    title: string;
    des:string;
    variant: "faq-orange" | "faq-normal";
  };

const FaqCard = ({title, des, variant }: FaqProps) => {
  return (
    <div className={`flexStart flex-col lg:w-1/2 ${variant} rounded-lg`}>
          <div className="p-6  w-100">
            <div className="capitalize advhead text-left">
              {title}
            </div>
            <p className={`text-justify ${variant === 'faq-orange' ? 'pwhite' : ''}`}>
              {des}
            </p>
          </div>
        </div>
  )
}

export default FaqCard
