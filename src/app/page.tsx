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
      <main>
        {/* Section 1 */}
        <section className="w-full h-screen relative flex items-center justify-center">
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
        <section className="w-full h-screen flex items-center bg-yellow-500">
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
        <section className="w-full h-screen flex items-center justify-center bg-yellow-500">
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
        <section className="w-full h-screen bg-orange-500 flex flex-col items-center justify-center">
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

          {/* Pagination Dots */}
          <div className="mt-6 flex space-x-2">
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
    </div>
  );
}
  