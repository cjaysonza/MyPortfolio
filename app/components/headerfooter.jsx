import Link from "next/link";
import About from "../projects/page.jsx";

export default function Header() {
  return (
    <>
      {/* This is our new header  */}
      <div className="sticky top-0 bg-[#1d212c] tron-border-bottom z-50">
        {" "}
        {/* positioning */}
        <div className="flex flex-row justify-between items-center h-24 px-40">
          <div>
            {/* This is the Header */}
            <Link
              href="https://github.com/cjaysonza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl font-bold hover:text-5xl transition-all duration-200"
              title="to my github"
            >
              cjaysonza
            </Link>
          </div>
          <nav className="gap-7 flex mr-8">
            <Link
              className="text-lg p-1 hover:bg-blue-500 hover:text-grey-100 rounded"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-lg p-1 hover:bg-blue-500 hover:text-grey-100 rounded"
              href="/projects"
            >
              Projects
            </Link>
            <Link
              className="text-lg p-1 hover:bg-blue-500 hover:text-grey-100 rounded"
              href="/contact"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
      {/* End of Header and start of the main div */}
    </>
  );
}

export function Footer() {
  return (
    <>
      {/* This is our new Footer  */}
      <div className="fixed bottom-0 w-full h-15 bottom-b border-t text-center align-center">
        {" "}
        {/* positioning */}
        <span className="text-xl font-b">This is the Footer</span>
      </div>
      {/* End of Footer and start of the main div */}
    </>
  );
}
