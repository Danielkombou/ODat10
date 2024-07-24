import React from "react";

function Contact() {
  return (
    <div className="rounded-lg shadow-lg bg-white p-6 flex flex-col md:flex-row gap-10 md:gap-12">
      <div className="flex-1">
        <h1 className="text-3xl font-semibold mb-2">Let's Talk</h1>
        <span className="text-gray-700">Ask us anything</span>
      </div>
      <div className="flex-1 bg-gray-100 p-6 rounded-md">
        <form action="" method="post">
          <div className="flex flex-col gap-6 md:flex-row md:gap-10 mb-6">
            <div className="flex flex-col flex-1">
              <label htmlFor="name" className="font-bold text-gray-900 mb-1">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Jane Appleseed"
                className="outline-none p-2 rounded-md border border-gray-300"
                aria-required="true"
                aria-label="Name"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="email" className="font-bold text-gray-900 mb-1">Email</label>
              <input
                type="email"
                id="email"
                placeholder="appleseed@gmail.com"
                className="outline-none p-2 rounded-md border border-gray-300"
                aria-required="true"
                aria-label="Email"
              />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="message" className="font-bold text-gray-900 mb-1">Message</label>
            <textarea
              id="message"
              placeholder="Hey there, I am..."
              className="outline-none p-2 rounded-md border border-gray-300 resize-none"
              rows="4"
              aria-required="true"
              aria-label="Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 flex items-center gap-2 transition-colors duration-300"
          >
            Send
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
