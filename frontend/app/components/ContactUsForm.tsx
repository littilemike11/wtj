"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Connect this to your API or email service.
    console.log("Contact form submission:", formData);

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="bg-white px-4 py-20 text-black sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
        {/* Contact Information */}
        <div className="flex flex-col justify-center">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#e8001a]" />
            <span className="font-oswald text-sm font-medium uppercase tracking-[4px] text-[#e8001a]">
              Get In Touch
            </span>
          </div>

          <h2 className="font-montserrat text-2xl font-black uppercase leading-tight text-black sm:text-4xl lg:text-[40px]">
            Let's Start a <span className="text-[#e8001a]">Conversation.</span>
          </h2>
          <div className="mt-5 max-w-xl space-y-5 font-roboto-condensed text-base leading-relaxed text-neutral-800 sm:text-lg">
            <p>
              Have a question, collaboration idea, or something you think
              deserves the spotlight? We want to hear from you.
            </p>
          </div>

          <div className="mt-8 border-l-2 border-[#e8001a] pl-5">
            <p className="font-oswald text-sm font-medium uppercase tracking-[3px] text-black sm:text-base">
              Culture
              <span className="px-2 text-[#e8001a]">X</span>
              Conversation
              <span className="px-2 text-[#e8001a]">X</span>
              Community
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-xl border border-black/10 bg-[#eee] p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 text-center">
              <h3 className="mb-3 font-montserrat text-2xl font-bold">
                Message Received!
              </h3>
              <p className="text-gray-400">
                Thanks for reaching out. We'll be in touch soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 font-oswald uppercase tracking-wider text-[#e8001a] hover:text-black"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-oswald uppercase tracking-wide"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-md border border-black/10 bg-white px-4 py-3 text-black outline-none transition placeholder:text-neutral-600 focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-oswald uppercase tracking-wide"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className="w-full rounded-md border border-white/10 bg-white px-4 py-3 text-black outline-none transition placeholder:text-neutral-600 focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block font-oswald uppercase tracking-wide"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full rounded-md border border-white/10 bg-white px-4 py-3 text-black outline-none transition placeholder:text-neutral-600 focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-oswald uppercase tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind..."
                  className="w-full resize-y rounded-md border border-white/10 bg-white px-4 py-3 text-black outline-none transition placeholder:text-neutral-600 focus:border-black"
                />
              </div>

              <button
                type="submit"
                className="flex cursor-pointer w-full items-center justify-center gap-3 rounded-md bg-[#e8001a] px-6 py-4 font-oswald text-lg uppercase tracking-wider text-black transition hover:bg-[#c90017]"
              >
                Send Message
                <FaPaperPlane aria-hidden="true" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
