import Image from 'next/image';

export default function CustomImage({ src, alt, ...otherProps }) {
  return (
    <figure className="aspect-[16/9] relative">
      <Image
        className="object-cover object-top"
        src={src}
        alt={alt || ''}
        fill={true}
        {...otherProps}
      />
    </figure>
  );
}
