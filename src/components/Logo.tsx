import logoImage from 'figma:asset/9041071712c5a2550c267253089379ab57a059bf.png';

interface LogoProps {
  className?: string;
  height?: number;
}

export function Logo({ className = '', height = 40 }: LogoProps) {
  return (
    <img 
      src={logoImage} 
      alt="StudyWise" 
      className={className}
      style={{ height: `${height}px` }}
    />
  );
}
