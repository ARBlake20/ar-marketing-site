export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center flex-col text-center p-8 bg-gradient-to-br from-blue-100 to-cyan-100">
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
      <section className="py-20 px-8 bg-white">
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
            <div key={i} className="p-6 border border-slate-200 rounded-xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-slate-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 text-center bg-slate-100">
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
    </main>
  );
}
