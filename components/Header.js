import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <img
        src="/images/nt-logo.jpg" // Pastikan path-nya benar (idealnya file berada di public folder)
        alt="Custom Image"
        className="block w-12 h-12 mx-auto mb-4 rounded-full"
      />
      <p className="text-2xl text-center dark:text-white">
        <Link href="/">
          {name}
        </Link>
      </p>
    </header>
  );
}
