import React from "react";

function Contact() {
  return (
    <div className="rounded-sm shadow-lg cursor flex gap-10 justify-around bg-white p-6">
      <div>
        <h1 className="text-3xl font-semibold">Let's talk</h1>
        <span className="text-gray-700">Ask us anything</span>
      </div>
      <div className="flex flex-col w-fit p-4 bg-gray-100 rounded-md">
        <form action="">
          <div className="flex gap-3 mb-3">
            <div className="flex flex-col">
              <label className="font-bold text-gray-900">Name</label>
              <input
                type="text"
                placeholder="Jane Appleseed"
                className="outline-none p-2 rounded-md border border-gray-300"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold text-gray-900">Email</label>
              <input
                type="email"
                placeholder="appleseed@gmail.com"
                className="outline-none p-2 rounded-md border border-gray-300"
              />
            </div>
          </div>
          <div className="flex flex-col mb-3">
            <label className="font-bold text-gray-900">Message</label>
            <textarea
              placeholder="Hey there, I am..."
              className="outline-none p-2 rounded-md border border-gray-300"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 flex gap-2"
          >
            Send
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
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
