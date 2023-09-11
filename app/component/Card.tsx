import Image from "next/image";
import Link from "next/link";

interface CardProps {
  image: string;
  title: string;
  description: string;
  color: string;
  link: string;
}

export default function Card({ image, title, description, color, link }: CardProps) {
  const gradientStyle = {
    background: `linear-gradient(to top, ${color}, transparent)`,
  }

  return (
    <Link href={link} target="_blank" className="relative text-white flex items-end cursor-pointer transition-all md:hover:scale-105 active:scale-90">
      <Image src={image} alt={title} width={500} height={200} className="rounded-2xl w-[420px] h-[200px] object-cover" />
      <div style={gradientStyle} className="absolute p-5 w-full rounded-b-2xl">
        <h1 className="text-3xl font-medium">{title}</h1>
        <p>{description}</p>
      </div>
    </Link>
  );
}
