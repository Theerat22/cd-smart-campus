import Link from 'next/link';
import { FaTree, FaEarthAsia, FaStar } from "react-icons/fa6";
import { IoLanguage } from "react-icons/io5";
import { BiMath } from "react-icons/bi";
import { CiMusicNote1 } from "react-icons/ci";
import { PiCookingPot } from "react-icons/pi";
export default function IconGrid() {
  const items = [
    { icon: <IoLanguage size={60} />, title: 'ภาษาต่างประเทศ', href: 'portfolio/language' },
    { icon: <FaTree size={60} />, title: 'ภูมิศาสตร์', href: 'portfolio/geo' },
    { icon: <FaEarthAsia size={60} />, title: 'ภูมิศาสตร์เศรษฐกิจโลก', href: 'portfolio/geo-eco' },
    { icon: <BiMath  size={60} />, title: 'คณิตศาสตร์', href: 'portfolio/math' },
    { icon: <FaStar size={60} />, title: 'ดาราศาสตร์', href: 'portfolio/astro' },
    { icon: <CiMusicNote1 size={60} />, title: 'ดนตรีสากล', href: 'portfolio/music' },
    { icon: <PiCookingPot size={60} />, title: 'สร้างสรรค์งานฝีมือ', href: 'portfolio/cooking' },

  ];

  return (
      <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-3 ">
        {items.map((item, index) => (
          <Link key={index} href={item.href} className="flex flex-col items-center transform hover:scale-110 transition duration-300">
            
              <div className="p-4 border rounded-full">
                {item.icon}
              </div>
              <p className="mt-4 text-lg">{item.title}</p>
          </Link>
        ))}
      </div>
  );
}