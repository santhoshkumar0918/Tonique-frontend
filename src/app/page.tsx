"use client";

import Image from "next/image";
import Header from "@/components/Header";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

export default function Home() {
  const slides = [
    {
      image: "/images/date4.png",
      title: "Hannah Met Her Now-Husband on Bumble.",
      description:
        "A Few Months Later, She Met One of Her Bridesmaids There, Too",
    },
    {
      image: "/images/date4.png",
      title: "Slide 2 Title",
      description: "Slide 2 Description",
    },
    {
      image: "/images/date4.png",
      title: "Slide 3 Title",
      description: "Slide 3 Description",
    },
    {
      image: "/images/date4.png",
      title: "Slide 4 Title",
      description: "Slide 4 Description",
    },
    {
      image: "/images/date4.png",
      title: "Slide 5 Title",
      description: "Slide 5 Description",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full">
      {/* Header */}
      <Header />

      {/* Main Sections */}
      <main className="px-5">
        {/* Section 1 */}
        <section className="w-full h-screen relative flex items-center justify-center max-w-screen-xl mx-auto">
          <div className="absolute inset-0">
            <Image
              src="/images/date.png"
              alt="Dating Section Image"
              layout="fill"
              objectFit="cover"
              className="opacity-70"
            />
          </div>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl font-bold"></h1>
            <p className="text-lg mt-4"></p>
            <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-lg"></button>
          </div>
        </section>

        {/* Section 2 */}
        <section className="w-full h-screen flex items-center bg-yellow-500 max-w-screen-xl mx-auto">
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-center px-10">
            <h2 className="text-5xl font-bold text-black">
              Bring Your Bar Back Up
            </h2>
            <p className="text-lg mt-4 text-black">
              You deserve better, so we’ve designed great ways for you to date
              more and stress less.
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
        <section className="w-full py-16 min-h-screen bg-white max-w-screen-xl mx-auto">
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
                Find someone you actually want to date, then go ahead and make
                the first move. Make genuine connections, vibe over what you
                both love, and most importantly, have fun.
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
                Meet someone like you. Or unlike you. Make new friends and find
                new things to do together — whether you’re home or away.
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
                Find friends with work benefits. Connect with other business
                professionals to find your next job, a mentor, or even a whole
                new career.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="w-full h-screen flex items-center justify-center bg-yellow-500 max-w-screen-xl mx-auto">
          <div className="w-1/2 h-full flex items-center justify-center">
            <div className="relative w-3/4 h-3/4">
              <Image
                src="/images/date3.png"
                alt="Date and Connect"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="w-1/2 h-full flex flex-col justify-center items-start px-10">
            <h2 className="text-5xl font-bold text-black">MAKE THE FIRST MOVE™</h2>
            <p className="text-lg mt-4 text-black">
              We’re the only app that makes dating better by putting women’s
              experiences first. Because when things are better for women,
              they’re better for everyone.
            </p>
            <button className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
              About Bumble
            </button>
          </div>
        </section>

        {/* Section 5 */}
        <section className="w-full h-screen bg-orange-500 flex flex-col items-center justify-center max-w-screen-xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-6">
            IF IT WORKED FOR THEM, <br /> IT COULD WORK FOR YOU
          </h2>

          <div className="relative w-3/4 flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 bg-black text-white rounded-full p-3 hover:bg-gray-800"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            {/* Image and Content */}
            <div className="flex items-center justify-center w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="w-1/2">
                <Image
                  src={slides[currentIndex].image}
                  alt={slides[currentIndex].title}
                  width={500}
                  height={500}
                  objectFit="cover"
                />
              </div>
              <div className="w-1/2 p-8">
                <h3 className="text-3xl font-bold mb-4">
                  {slides[currentIndex].title}
                </h3>
                <p className="text-lg text-gray-700">
                  {slides[currentIndex].description}
                </p>
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 bg-black text-white rounded-full p-3 hover:bg-gray-800"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-black" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
<footer className="w-full bg-gray-200 max-w-screen-xl mx-auto text-gray-800 py-12">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
    {/* Column 1: Company Info */}
    <div>
      <h3 className="text-xl font-bold mb-4">Your Dating App</h3>
      <p className="text-gray-600">
        Discover meaningful connections and build lasting relationships. Join us and experience a new way of dating.
      </p>
    </div>

    {/* Column 2: Navigation */}
    <div>
      <h3 className="text-xl font-bold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-black transition">About Us</a></li>
        <li><a href="#" className="hover:text-black transition">Careers</a></li>
        <li><a href="#" className="hover:text-black transition">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-black transition">Terms of Service</a></li>
      </ul>
    </div>

    {/* Column 3: Social Media */}
    <div>
      <h3 className="text-xl font-bold mb-4">Follow Us</h3>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-600 hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.56c-.88.4-1.83.67-2.83.79a4.92 4.92 0 0 0 2.16-2.72c-.95.56-2.01.95-3.13 1.16a4.9 4.9 0 0 0-8.36 4.47A13.92 13.92 0 0 1 1.64 3.16a4.9 4.9 0 0 0 1.52 6.55 4.86 4.86 0 0 1-2.22-.61v.06a4.92 4.92 0 0 0 3.95 4.81 4.9 4.9 0 0 1-2.21.08 4.92 4.92 0 0 0 4.59 3.42A9.86 9.86 0 0 1 0 21.54a13.92 13.92 0 0 0 7.54 2.21c9.05 0 14-7.5 14-14v-.64a9.92 9.92 0 0 0 2.46-2.53z" />
          </svg>
        </a>
        <a href="#" className="text-gray-600 hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.16c-5.45 0-9.84 4.39-9.84 9.84 0 4.35 3.2 7.95 7.36 8.68v-6.13h-2.21v-2.55h2.21V8.91c0-2.19 1.33-3.41 3.35-3.41.97 0 1.97.17 1.97.17v2.17h-1.11c-1.09 0-1.43.67-1.43 1.37v1.66h2.54l-.41 2.55h-2.13v6.13c4.16-.73 7.36-4.33 7.36-8.68 0-5.45-4.39-9.84-9.84-9.84z" />
          </svg>
        </a>
        <a href="#" className="text-gray-600 hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.16c-5.45 0-9.84 4.39-9.84 9.84 0 4.35 3.2 7.95 7.36 8.68v-6.13h-2.21v-2.55h2.21V8.91c0-2.19 1.33-3.41 3.35-3.41.97 0 1.97.17 1.97.17v2.17h-1.11c-1.09 0-1.43.67-1.43 1.37v1.66h2.54l-.41 2.55h-2.13v6.13c4.16-.73 7.36-4.33 7.36-8.68 0-5.45-4.39-9.84-9.84-9.84z" />
          </svg>
        </a>
      </div>
    </div>

    {/* Column 4: Newsletter */}
    <div>
      <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
      <form>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-black text-white mt-4 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  </div>

  <div className="mt-8 border-t border-gray-300 pt-6 text-center">
    <p>© 2024 Your Dating App. All Rights Reserved.</p>
  </div>
</footer>
    </div>
  );
}