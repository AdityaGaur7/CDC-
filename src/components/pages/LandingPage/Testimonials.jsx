import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonialsData = [
  { name: "Priyanshu Mishra", title: "B.Tech, Second Year", feedback: "The Coders and Developers Club is an excellent place for anyone eager to learn coding and technology. It’s a welcoming environment where you can grow your skills and connect with others." },
  { name: "Aryan Verma", title: "B.Tech, Second Year", feedback: "This club encourages collaboration and learning, offering a great opportunity for developers to share ideas and work on projects together, helping each other improve along the way." },
  { name: "Aditi Gupta", title: "B.Tech, Second Year", feedback: "If you're looking for a place to improve your coding skills, the Coders and Developers Club is the perfect community. It’s full of passionate people who are always willing to help." },
  { name: "Harshit Mishra", title: "B.Tech, Second Year", feedback: "The club offers a space where beginners and experienced developers can come together, learn new things, and work on projects that push their skills to the next level." },
  { name: "Ayush Ashutosh", title: "B.Tech, Second Year", feedback: "I’ve seen how the Coders and Developers Club helps people grow in their coding journey. It’s a great community for learning, sharing ideas, and getting hands-on experience." },
  { name: "Ayushi Sahu", title: "B.Tech, Second Year", feedback: "This club is a great place for anyone interested in tech. It provides resources, guidance, and a collaborative atmosphere where members can develop their coding skills and work on real projects." },
  { name: "Harshit Tiwari", title: "B.Tech, Second Year", feedback: "I love how the club brings together people from all levels of experience, allowing everyone to learn from each other and work together to solve coding challenges and create amazing projects." },
  { name: "Dravin Bhardwaj", title: "B.Tech, Second Year", feedback: "The Coders and Developers Club offers a unique opportunity to work with like-minded individuals, learn from experts, and take your coding skills to new heights through practical experience." },
  { name: "Piyush Pal", title: "B.Tech, Second Year", feedback: "The Coders and Developers Club gave me hands-on experience and the chance to work on real-world projects. It’s been an incredible journey of growth and teamwork." }
];

function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleTestimonials(1); 
      } else if (window.innerWidth < 1024) {
        setVisibleTestimonials(2);
      } else {
        setVisibleTestimonials(3); 
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - visibleTestimonials : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - visibleTestimonials ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-gray-900 text-white flex flex-col items-center relative text-white p-8 h-auto z-20">
      <h3 className="text-center text-white font-bold xl:text-[50px] lg:text-4xl text-3xl leading-[1.25] z-20 lg:mb-16 mb-16">
        What Others Think About Us
      </h3>
      <div className="flex justify-evenly space-x-20 min-h-72">
        {testimonialsData.slice(currentIndex, currentIndex + visibleTestimonials).map((testimonial, index) => (
          <div
            key={index}
            className="relative w-72 p-6 rounded-lg bg-[rgba(255,255,255,0.1)] text-center shadow-lg border border-blue-500"
            style={{
              clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%)',
            }}
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-600 rounded-full mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 18a8 8 0 100-16 8 8 0 000 16zm-1-10a1 1 0 112 0v2a1 1 0 01-2 0v-2zm-3 7a4 4 0 118 0H8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-blue-400">{testimonial.title}</p>
              <p className="text-sm text-blue-400 mt-2">{testimonial.feedback}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex mt-6 space-x-4">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 focus:outline-none"
        >
          <FaChevronLeft className="text-white" />
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 focus:outline-none"
        >
          <FaChevronRight className="text-white" />
        </button>
      </div>
    </div>
  );
}

export default TestimonialsCarousel;
