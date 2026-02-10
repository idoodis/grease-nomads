'use client';

import Image from 'next/image';

type WorkImageProps = {
  src: string;
  alt: string;
  aspect?: 'video' | '4/3';
  className?: string;
  priority?: boolean;
};

export default function WorkImage({
  src,
  alt,
  aspect = 'video',
  className,
  priority = false,
}: WorkImageProps) {
  // CSS aspect-ratio: video = 16/9, 4/3 = 4/3
  const aspectRatio = aspect === 'video' ? '16 / 9' : '4 / 3';
  
  // Safely combine className
  const combinedClassName = className 
    ? `relative w-full overflow-hidden bg-[#0f1115] ${className}`.trim()
    : 'relative w-full overflow-hidden bg-[#0f1115]';

  return (
    <div
      className={combinedClassName}
      style={{
        position: 'relative',
        aspectRatio,
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        minHeight: aspect === 'video' ? '200px' : '250px',
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{ 
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
      />
    </div>
  );
}
