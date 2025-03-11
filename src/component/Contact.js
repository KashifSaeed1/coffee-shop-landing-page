import React from 'react'
import Bg from '../assests/Bg.png'
import { motion } from 'framer-motion'
const bgImage ={
    backgroundImage: `url(${Bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    width:"100%",
    height:"100%",
    backgroundPosition:"center"
  }

export default function Contact() {
  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center p-6"
      style={bgImage}
    >
      <motion.div
        className="w-full max-w-3xl bg-amber-900/20 rounded-lg shadow-md px-8 py-4"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <h1 className="text-amber-900 text-4xl text-center font-cursive font-bold mb-6">
          Contact Us
        </h1>
        <p className="text-gray-700 text-center text-lg mb-8 font-cursive2">
          "We're here to listen! Fill out the form below, and our team will get
          back to you soon with a warm response
        </p>
        <form className="space-y-3">
          <div>
            <label
              htmlFor="name"
              className="text-lg block text-gray-700 mb-1 font-medium"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full px-4 py-2 
                        rounded-md border border-gray-300 
                        focus:ring-2 focus:ring-amber-900 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-lg block text-gray-700 mb-1 font-medium"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 
                        focus:ring-2 focus:ring-amber-900 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-lg block text-gray-700 mb-1 font-medium"
            >
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              className="w-full px-4 py-2 
                        rounded-md border border-gray-300 
                        focus:ring-2 focus:ring-amber-900 focus:outline-none mb-3"
              rows="5"
            ></textarea>
          </div>
          <button
            className="w-full py-2 px-4 bg-amber-900 text-white font-semibold rounded-lg
                    shadow-md  mb-1 hover:bg-amber-700 "
          >
            Send Message
          </button>
        </form>
      
        <div className="mt-6 text-center space-y-3">
          <p className="text-gray-700 text-lg font-medium">
            Or reach us directly:
          </p>
          <div className="flex justify-center items-center space-x-2">
            <svg
              className="w-6 h-6 text-amber-900"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8.5V5a2 2 0 012-2h3.5a1 1 0 011 1v2.5a1 1 0 01-.6.9L7.5 9.5a8 8 0 008 8l2.1-1.4a1 1 0 01.9-.1H19a1 1 0 011 1V19a2 2 0 01-2 2h-3.5c-6 0-10.5-4.5-10.5-10.5z"
              ></path>
            </svg>
            <a
              href="tel:+923027877556"
              className="text-black font-semibold hover:text-amber-700"
            >
              +92 302-7877556
            </a>
          </div>

          {/* Email */}
          <div className="flex justify-center items-center space-x-2">
            <svg
              className="w-6 h-6 text-amber-900"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12h.01M12 12h.01M8 12h.01M21 16.5V7.5a2 2 0 00-2-2H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2z"
              ></path>
            </svg>
            <a
              href="mailto:kashifsaeedman@gmail.com"
              className="text-black font-semibold hover:text-amber-700"
            >
              kashifsaeedman@gmail.com
            </a>
          </div>
          <div className="flex justify-center items-center space-x-4 mt-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                alt="Facebook"
                className="w-7 h-7 hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                className="w-7 h-7 hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                alt="Twitter"
                className="w-7 h-7 hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
