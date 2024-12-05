import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <Link href="https://nialthony.t.me"> {/* Ganti "/custom-link" dengan URL tujuan */}
        <img
          src="/images/nt-logo.jpg" // Path ke gambar
          alt="Custom Image"
          className="block w-12 h-12 mx-auto mb-4 rounded-full cursor-pointer" // Tambahkan cursor-pointer untuk visualisasi klik
        />
      </Link>
      <p className="text-2xl text-center dark:text-white">
        <Link href="/">
          {name}
        </Link>
      </p>
    </header>
  );
}
