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
        <section className="w-full h-screen relative flex items-center justify-center bg-yellow-500">
          <div className="absolute inset-0">
            <Image
              src="/images/datehome.png"
              alt="Dating Section Image"
              layout="fill"
              objectFit="cover"
              className="opacity-70"
            />
          </div>
          <div className="relative z-10 text-center text-black">
            <h1 className="text-5xl font-bold">Bring Your Bar Back Up</h1>
            <p className="text-lg mt-4">
              You deserve better, so we’ve designed great ways for you to date more and stress less.
            </p>
            <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-lg">
              See What's New
            </button>
          </div>
        </section>

        {/* Section 2 */}
        <section className="w-full h-screen relative flex items-center justify-center bg-blue-500">
          <div className="absolute inset-0">
            <Image
              src="/images/datehome.png"
              alt="Find Matches"
              layout="fill"
              objectFit="cover"
              className="opacity-70"
            />
          </div>
          <div className="relative z-10 text-center text-white">
            <h2 className="text-4xl font-bold">Find Your Perfect Match</h2>
            <p className="text-lg mt-4">
              Connect with people who share your interests and values.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="w-full h-screen relative flex items-center justify-center bg-green-500">
          <div className="absolute inset-0">
            <Image
              src="/images/datehome.png"
              alt="Browse Profiles"
              layout="fill"
              objectFit="cover"
              className="opacity-70"
            />
          </div>
          <div className="relative z-10 text-center text-black">
            <h2 className="text-4xl font-bold">Browse Profiles</h2>
            <p className="text-lg mt-4">
              Explore a wide range of profiles and find someone special.
            </p>
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
    </div>
  );
}
