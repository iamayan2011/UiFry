// ImageCard.tsx
import { useState } from 'react';
import AdvantageCard from './AdvantageCard';

interface ImageCardProps {
  src: string;
  testimonial: string;
  description: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, testimonial, description }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`relative cursor-pointer ${isActive && 'scale-110'}`} onClick={() => setIsActive(!isActive)}>
      <img src={src} alt="Person" className="w-24 h-24 object-cover" />
      {isActive && <AdvantageCard head={testimonial} des={description} />}
    </div>
  );
};

export default ImageCard;
