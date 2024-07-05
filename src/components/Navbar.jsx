import Link from 'next/link';

function Navbar() {
  return (
    <div className="flex justify-between py-6 px-10 bg-transparent w-full z-20 top-0">
      <h1 id="heroText" className="text-3xl font-extrabold text-sky-300 cursor-pointer">
        <Link href="/">Travello.</Link>
      </h1>
      <div className="md:flex gap-6 hidden">
        <Link href="/" className="text-gray-100 text-underline font-bold text-[16px]">Home</Link>
        <Link href="/aboutus" className="text-gray-100 text-underline font-bold text-[16px]">About Us</Link>
        <Link href="/destinations" className="text-gray-100 text-underline font-bold text-[16px]">Destinations</Link>
        <Link href="/contacts" className="text-gray-100 text-underline font-bold text-[16px]">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
