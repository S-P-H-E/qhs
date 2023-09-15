import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // Import useState

interface CardProps {
  image: string;
  title: string;
  description: string;
  color: string;
  link: string;
}

export default function Card({ image, title, description, color, link }: CardProps) {
  const [imageLoaded, setImageLoaded] = useState(false); // State to track image loading status
  const gradientStyle = {
    background: `linear-gradient(to top, ${color}, transparent)`,
  };

  const handleImageLoad = () => {
    setImageLoaded(true); // Set imageLoaded to true when the image is loaded
  };

  return (
    <Link href={link} target="_blank" className="shadow-xl rounded-2xl relative text-white flex items-end cursor-pointer transition-all md:hover:scale-105 active:scale-90">
      <Image
        src={image}
        alt={title}
        width={500}
        height={200}
        className={`rounded-2xl w-[420px] h-[200px] object-cover ${imageLoaded ? "opacity-100" : "opacity-0"}`} // Toggle opacity based on imageLoaded
        onLoad={handleImageLoad} // Call handleImageLoad when the image is loaded
      />
      <div
        style={gradientStyle}
        className={`absolute p-5 w-full rounded-b-2xl ${imageLoaded ? "opacity-100" : "opacity-0"}`} // Toggle opacity based on imageLoaded
      >
        <h1 className="text-3xl font-medium">{title}</h1>
        <p>{description}</p>
      </div>
    </Link>
  );
}
