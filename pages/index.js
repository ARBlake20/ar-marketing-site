import { useState, useEffect } from "react";
export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <main className="transition-colors duration-500">
      <div className="min-h-screen transition-colors duration-500 bg-white text-slate-900 dark:bg-slate-900 dark:text-white">
      {/* Sticky Navigation */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-700">AR Marketing</a>
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-slate-800">
            <a href="#" className="hover:text-blue-700 transition">Home</a>
            <a href="#services" className="hover:text-blue-700 transition">What We Do</a>
            <a href="#case-studies" className="hover:text-blue-700 transition">Featured Work</a>
            <a href="#team" className="hover:text-blue-700 transition">Team</a>
            <a href="#contact" className="hover:text-blue-700 transition">Contact</a>
          </nav>
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="ml-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm hidden md:inline-block"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button id="menu-toggle" className="focus:outline-none">
              <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Nav - Hidden by Default */}
        <div id="mobile-menu" className="md:hidden hidden px-4 pb-4 space-y-2 text-sm font-medium text-slate-800 bg-white border-t border-slate-200">
          <a href="#" className="block hover:text-blue-700 transition">Home</a>
          <a href="#services" className="block hover:text-blue-700 transition">What We Do</a>
          <a href="#case-studies" className="block hover:text-blue-700 transition">Featured Work</a>
          <a href="#team" className="block hover:text-blue-700 transition">Team</a>
          <a href="#contact" className="block hover:text-blue-700 transition">Contact</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center flex-col text-center p-8 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-slate-800 dark:to-slate-900" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="100">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Marketing That Actually Works</h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8">
          AR Marketing helps grocery retailers, marinas, and trade associations grow with smart, strategic marketing.
        </p>
        <a
          href="#contact"
          className="bg-blue-700 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-800 transition"
        >
          Let’s Work Together
        </a>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-8 bg-white dark:bg-slate-800" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="100">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: 'Social Media Management',
              desc: 'We grow your audience and engagement with consistent, creative content.'
            },
            {
              title: 'Branding & Design',
              desc: 'From logos to trade show booths, we build your brand with clarity and consistency.'
            },
            {
              title: 'Email & Reputation Management',
              desc: 'We manage your email newsletters and online reviews so you can focus on your customers.'
            },
          ].map((service, i) => (
            <div key={i} className="p-6 border border-slate-200 rounded-xl shadow-sm hover:shadow-lg transition" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="100" data-aos-delay={i * 100}>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-slate-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 text-center bg-slate-100 dark:bg-slate-700" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="100">
        <h2 className="text-3xl font-bold mb-4">Ready to grow your business?</h2>
        <p className="mb-8 max-w-xl mx-auto text-lg">
          Schedule a consultation with our team and find out how AR Marketing can help you stand out.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-700 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-800 transition"
        >
          Book a Call
        </a>
      </section>

{/* Case Studies */}
<section id="case-studies" className="py-20 px-8 bg-slate-50 dark:bg-slate-800" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="100">
  <h2 className="text-3xl font-bold text-center mb-12">Featured Work</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: 'Ithaca Gun Co.',
              desc: 'Reimagined the brand as a luxury outdoor lifestyle company through visual identity and storytelling.',
              img: '/case-studies/ithaca.jpg'
            },
            {
              title: 'Stream Life',
              desc: 'Developed a nature-forward apparel brand with a focus on preservation and peaceful outdoor culture.',
              img: '/case-studies/streamlife.jpg'
            },
            {
              title: 'Neiman’s Grocery',
              desc: 'Ongoing social media strategy and content creation to grow foot traffic and brand loyalty.',
              img: '/case-studies/neimans.jpg'
            },
          ].map((caseStudy, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="100" data-aos-delay={i * 100}>
              <img src={caseStudy.img} alt={caseStudy.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{caseStudy.title}</h3>
                <p className="text-slate-700">{caseStudy.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Logos */}
<section className="py-20 px-8 bg-white dark:bg-slate-900 text-center" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="100">
  <h2 className="text-3xl font-bold mb-10">Trusted by Brands Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center max-w-5xl mx-auto">
          <img src="/logos/neimans.png" alt="Neiman's" className="max-h-12 mx-auto grayscale hover:grayscale-0 transition" />
          <img src="/logos/clarks.png" alt="Clark's Ranch Market" className="max-h-12 mx-auto grayscale hover:grayscale-0 transition" />
          <img src="/logos/streamlife.png" alt="Stream Life" className="max-h-12 mx-auto grayscale hover:grayscale-0 transition" />
          <img src="/logos/ithaca.png" alt="Ithaca Gun Co" className="max-h-12 mx-auto grayscale hover:grayscale-0 transition" />
        </div>
      </section>

{/* Team Section */}
<section id="team" className="py-20 px-8 bg-slate-100 dark:bg-slate-800 text-center" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="100">
  <h2 className="text-3xl font-bold mb-12">Meet the AR Team</h2>
  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
    {[
      {
        name: 'Eric Anderson',
        title: 'Principal, Founder',
        email: 'eric@a-rmarketing.com'
      },
      {
        name: 'Julie Anderson',
        title: 'Principal, Founder',
        email: 'julie@a-rmarketing.com'
      },
      {
        name: 'Stephanie Neitz',
        title: 'President',
        email: 'stephanie@a-rmarketing.com'
      },
      {
        name: 'Lindsay Ginter',
        title: 'Vice President, Digital Strategy',
        email: 'lindsay@a-rmarketing.com'
      },
      {
        name: 'Blake Martin',
        title: 'Creative Director',
        email: 'blake@a-rmarketing.com'
      },
      {
        name: 'Kristen Hooper',
        title: 'Director of Strategy & Planning',
        email: 'kristen@a-rmarketing.com'
      },
    ].map((member, i) => (
      <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="100" data-aos-delay={i * 100}>
        <h3 className="text-xl font-semibold">{member.name}</h3>
        <p className="text-blue-700 font-medium mb-2">{member.title}</p>
        <a href={`mailto:${member.email}`} className="text-slate-700 hover:text-blue-700 underline">{member.email}</a>
      </div>
    ))}
  </div>
</section>

      {/* Contact Section */}
<section id="contact" className="py-20 px-8 bg-white dark:bg-slate-900 text-center" data-aos="fade-up" data-aos-duration="600" data-aos-easing="ease-out-cubic" data-aos-offset="100">
  <h2 className="text-3xl font-bold mb-6">Let’s Talk</h2>
  <p className="text-lg mb-12 max-w-xl mx-auto">
    Ready to take your marketing to the next level? Reach out and let’s start the conversation.
  </p>

  <form className="max-w-2xl mx-auto text-left space-y-6">
    <div>
      <label htmlFor="name" className="block font-medium text-slate-800 mb-1">Name</label>
      <input type="text" id="name" name="name" required className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
    <div>
      <label htmlFor="email" className="block font-medium text-slate-800 mb-1">Email</label>
      <input type="email" id="email" name="email" required className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
    <div>
      <label htmlFor="message" className="block font-medium text-slate-800 mb-1">Message</label>
      <textarea id="message" name="message" rows="5" required className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
    </div>
    <button type="submit" className="bg-blue-700 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-800 transition w-full sm:w-auto">
      Send Message
    </button>
  </form>

  <div className="mt-12 text-slate-700">
    <p className="mb-1"><strong>Phone:</strong> <a href="tel:4194272772" className="text-blue-700 hover:underline">419-427-2772</a></p>
    <p><strong>Email:</strong> <a href="mailto:Blake@a-rmarketing.com" className="text-blue-700 hover:underline">Blake@a-rmarketing.com</a></p>
  </div>
</section>

{/* Footer */}
<footer className="bg-slate-900 text-white py-12 px-8">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
    {/* Brand Column */}
    <div>
      <h3 className="text-xl font-semibold mb-4">AR Marketing</h3>
      <p className="text-slate-400">Smart, strategic marketing for grocery retailers, marinas, and trade associations.</p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-lg font-medium mb-4">Quick Links</h4>
      <ul className="space-y-2">
        <li><a href="#" className="text-slate-300 hover:text-white transition">Home</a></li>
        <li><a href="#services" className="text-slate-300 hover:text-white transition">What We Do</a></li>
        <li><a href="#case-studies" className="text-slate-300 hover:text-white transition">Featured Work</a></li>
        <li><a href="#team" className="text-slate-300 hover:text-white transition">Team</a></li>
        <li><a href="#contact" className="text-slate-300 hover:text-white transition">Contact</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h4 className="text-lg font-medium mb-4">Contact</h4>
      <p className="text-slate-300">Phone: <a href="tel:4194272772" className="hover:underline text-white">419-427-2772</a></p>
      <p className="text-slate-300">Email: <a href="mailto:Blake@a-rmarketing.com" className="hover:underline text-white">Blake@a-rmarketing.com</a></p>
      <p className="text-slate-500 mt-6 text-sm">© {new Date().getFullYear()} AR Marketing. All rights reserved.</p>
    </div>
  </div>
</footer>
      </div>
    </main>
  );
}

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  });
}