export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center flex-col text-center p-8 bg-gradient-to-br from-blue-100 to-cyan-100" data-aos="zoom-in-up" data-aos-duration="1200" data-aos-easing="ease-out-cubic" data-aos-offset="100">
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
      <section className="py-20 px-8 bg-white" data-aos="zoom-in-up" data-aos-duration="1200" data-aos-easing="ease-out-cubic" data-aos-offset="100">
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
            <div key={i} className="p-6 border border-slate-200 rounded-xl shadow-sm hover:shadow-lg transition" data-aos="zoom-in-up" data-aos-duration="1200" data-aos-easing="ease-out-cubic" data-aos-offset="100" data-aos-delay={i * 100}>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-slate-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 text-center bg-slate-100" data-aos="zoom-in" data-aos-duration="1200" data-aos-easing="ease-out-cubic" data-aos-offset="100">
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
<section className="py-20 px-8 bg-slate-50" data-aos="zoom-in-up" data-aos-duration="1200" data-aos-easing="ease-out-cubic" data-aos-offset="100">
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
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition" data-aos="zoom-in-up" data-aos-duration="1200" data-aos-easing="ease-out-cubic" data-aos-offset="100" data-aos-delay={i * 100}>
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
<section className="py-20 px-8 bg-white text-center" data-aos="zoom-in-up" data-aos-duration="1200" data-aos-easing="ease-out-cubic" data-aos-offset="100">
  <h2 className="text-3xl font-bold mb-10">Trusted by Brands Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center max-w-5xl mx-auto">
          <img src="/logos/neimans.png" alt="Neiman's" className="max-h-12 mx-auto grayscale hover:grayscale-0 transition" />
          <img src="/logos/clarks.png" alt="Clark's Ranch Market" className="max-h-12 mx-auto grayscale hover:grayscale-0 transition" />
          <img src="/logos/streamlife.png" alt="Stream Life" className="max-h-12 mx-auto grayscale hover:grayscale-0 transition" />
          <img src="/logos/ithaca.png" alt="Ithaca Gun Co" className="max-h-12 mx-auto grayscale hover:grayscale-0 transition" />
        </div>
      </section>

{/* Team Section */}
<section className="py-20 px-8 bg-slate-100 text-center" data-aos="zoom-in-up" data-aos-duration="1200" data-aos-easing="ease-out-cubic" data-aos-offset="100">
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
      <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition" data-aos="zoom-in-up" data-aos-duration="1200" data-aos-easing="ease-out-cubic" data-aos-offset="100" data-aos-delay={i * 100}>
        <h3 className="text-xl font-semibold">{member.name}</h3>
        <p className="text-blue-700 font-medium mb-2">{member.title}</p>
        <a href={`mailto:${member.email}`} className="text-slate-700 hover:text-blue-700 underline">{member.email}</a>
      </div>
    ))}
  </div>
</section>

    </main>
  );
}
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;