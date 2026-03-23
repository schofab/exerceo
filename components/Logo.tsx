import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  href?: string;
  className?: string;
}

export default function Logo({ href = "/", className = "" }: LogoProps) {
  const content = (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <Image
        src="/icons/Logo-exerceo.svg"
        alt="exerceō"
        width={180}
        height={48}
        priority
      />
      <div className="flex items-center gap-1">
        <span className="text-xs text-navy-800 font-medium">par</span>
        <Image
          src="/icons/Logo-mixarto.svg"
          alt="mixarto"
          width={60}
          height={16}
          priority
        />
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex">
        {content}
      </Link>
    );
  }

  return content;
}
