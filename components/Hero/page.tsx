import Image from "next/image";
import NavBar from "./_component/Navbar";
import back from "../../public/back.jpg";
import Footer from "./_component/Footer";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-start min-h-screen text-black bg-white pt-8">
        <div className="w-full max-w-7xl ">
          <NavBar />
        </div>
        <div className="mt-20 mb-10  w-full max-w-7xl flex flex-row">
          <div className="w-1/2 text-left pr-8 mt-20">
            <span>Best Quality Products</span>
            <h1 className="text-6xl font-bold mb-6 text-blue-700">
              Simplify your life and save you time.
            </h1>
            <p className="text-xl mb-9">
              At ValidMart Store, we understand that time is precious. That's
              why we've curated a range of innovative products designed to make
              your everyday tasks easier and more efficient.
            </p>
            <button className="bg-[#4ADE80] text-white px-8 py-3 rounded-full text-lg font-semibold">
              Get Started
            </button>
          </div>
          <div className="w-1/2">
            <Image
              src={back}
              alt="back"
              layout="responsive"
              width={500}
              height={200}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
