import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="w-full">
      {/* Header */}
      <Header />

      {/* Main Sections */}
      <main>
        {/* Section 1 */}
        <section className="w-full h-screen relative flex items-center justify-center ">
          <div className="absolute inset-0">
            <Image
              src="/images/date.png"
              alt="Dating Section Image"
              layout="fill"
              objectFit="cover"
              className="opacity-70"
            />
          </div>
          <div className="relative z-10 text-center ">
            <h1 className="text-5xl font-bold"></h1>
            <p className="text-lg mt-4">
            </p>
            <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-lg">
            </button>
          </div>
        </section>

        {/* Section 2 */}
<section className="w-full h-screen flex items-center bg-yellow-500">
  {/* Left Content */}
  <div className="flex-1 flex flex-col justify-center px-10">
    <h2 className="text-5xl font-bold text-black">
      Bring Your Bar Back Up
    </h2>
    <p className="text-lg mt-4 text-black">
      You deserve better, so we’ve designed great ways for you to date more and stress less.
    </p>
    <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-lg">
      See What's New
    </button>
  </div>
  {/* Right Image */}
  <div className="flex flex-1 justify-center items-center">
    <div className="relative w-[450px] h-[600px]">
      <Image
        src="/images/date1.png"
        alt="Dating Section Image"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  </div>
</section>


        {/* Section 3 */}
<section className="w-full py-16 min-h-screen bg-white">
  {/* Heading */}
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-black">
      We're Not Just for Dating
    </h2>
  </div>
  
  {/* Grid Container */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
    {/* Grid Item 1 */}
    <div className="text-center">
      <div className="w-full h-[250px] relative mb-4">
        <Image
          src="/images/date2.png"
          alt="Meet someone with Bumble Date"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-xl font-bold text-black">
        Meet someone with Bumble Date
      </h3>
      <p className="text-gray-600 mt-2">
        Find someone you actually want to date, then go ahead and make the first move. Make genuine connections, vibe over what you both love, and most importantly, have fun.
      </p>
    </div>

    {/* Grid Item 2 */}
    <div className="text-center">
      <div className="w-full h-[250px] relative mb-4">
        <Image
          src="/images/date2.png"
          alt="Find new friends on Bumble For Friends"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-xl font-bold text-black">
        Find new friends on Bumble For Friends
      </h3>
      <p className="text-gray-600 mt-2">
        Meet someone like you. Or unlike you. Make new friends and find new things to do together — whether you’re home or away.
      </p>
    </div>

    {/* Grid Item 3 */}
    <div className="text-center">
      <div className="w-full h-[250px] relative mb-4">
        <Image
          src="/images/date2.png"
          alt="Make career moves with Bumble Bizz"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-xl font-bold text-black">
        Make career moves with Bumble Bizz
      </h3>
      <p className="text-gray-600 mt-2">
        Find friends with work benefits. Connect with other business professionals to find your next job, a mentor, or even a whole new career.
      </p>
    </div>
  </div>
</section>


        {/* Section 4 */}
        <section className="w-full h-screen relative flex items-center justify-center bg-red-500">
          <div className="absolute inset-0">
            <Image
              src="/images/datehome.png"
              alt="Chat and Connect"
              layout="fill"
              objectFit="cover"
              className="opacity-70"
            />
          </div>
          <div className="relative z-10 text-center text-white">
            <h2 className="text-4xl font-bold">Chat and Connect</h2>
            <p className="text-lg mt-4">
              Start meaningful conversations and get to know each other.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="w-full h-screen relative flex items-center justify-center bg-purple-500">
          <div className="absolute inset-0">
            <Image
              src="/images/datehome.png"
              alt="Join Us Today"
              layout="fill"
              objectFit="cover"
              className="opacity-70"
            />
          </div>
          <div className="relative z-10 text-center text-white">
            <h2 className="text-4xl font-bold">Get Started Today</h2>
            <p className="text-lg mt-4">
              Don’t wait any longer. Take the first step towards your happiness.
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-black font-medium rounded-lg">
              Join Now
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg">© 2024 Your Dating App. All Rights Reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
