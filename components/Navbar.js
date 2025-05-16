import Link from 'next/link';
export default function Navbar() {
  return(
    <div className="">
      <div className="bg-gray-200 px-1 py-1 rounded-full mt-2 mx-2 shadow-md">
        <div className="flex px-4 justify-between shadow-xl bg-gray-100 rounded-full items-center">
          <div className="space-x-2">
            <Link href="/calendar">
              <i className="fas fa-calendar-days pt-3 text-3xl text-black hover:text-gray-300 cursor-pointer"></i>
            </Link>
          </div>
          <div className="space-x-2">
            <Link href="/">
              <img className="w-28 mx-auto hover:text-white cursor-pointer transition duration-200" src="/growio.svg" alt="Plant icon"/>
            </Link>
          </div>
          </div>
      </div>
    </div>
  );
}