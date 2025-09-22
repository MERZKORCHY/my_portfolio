import React from "react";

// Portfolio version with styled and glowing hero text, name, and glowing profile picture border
export default function MercyPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 antialiased">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 rounded-2xl shadow-2xl">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow-lg animate-pulse" style={{ fontFamily: 'Calibri, sans-serif' }}>
            MERCY CHEROP KOECH
          </h1>
          <p className="text-base mt-1 text-gray-300 font-semibold italic tracking-wide">
            Web Developer • Computer Science Graduate
          </p>
        </div>
        <nav className="space-x-4 text-sm text-gray-200">
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-20">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-2xl p-8 shadow-xl">
          <div className="md:col-span-2">
            <h2 className="text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 drop-shadow animate-pulse" style={{ fontFamily: 'Calibri, sans-serif' }}>
              Hi, I'm Mercy — a Web Developer
            </h2>
            <p className="text-lg text-gray-200">
              I build clean, responsive websites and interactive frontends. I enjoy turning ideas into delightful user experiences using HTML, CSS, JavaScript and PHP for backend integration.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg shadow hover:shadow-lg hover:shadow-pink-400/80 transition">See my work</a>
              <a href="#contact" className="px-4 py-2 border border-purple-500 text-purple-200 rounded-lg bg-white/10 hover:shadow-lg hover:shadow-purple-400/80 transition">Contact me</a>
            </div>

            <div className="mt-6 text-sm text-gray-300">
              <p><strong>Email:</strong> <a href="mailto:merzkorchy@gmail.com" className="underline text-pink-400">merzkorchy@gmail.com</a></p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="w-40 h-52 overflow-hidden shadow-2xl rounded-lg border-4 border-pink-400 animate-pulse ring-4 ring-pink-500/70">
              <img src="/images/profile.jpg" alt="Mercy Cherop" className="w-full h-full object-cover" />
            </div>
            <div className="mt-3 text-center md:text-right">
              <p className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 animate-pulse drop-shadow" style={{ fontFamily: 'Calibri, sans-serif' }}>
                Mercy Cherop Koech
              </p>
              <p className="text-sm text-gray-400 font-semibold italic">
                Web Developer • Computer Science Graduate
              </p>
              <a href="/myCV.pdf" className="inline-block mt-2 px-3 py-1 rounded bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm shadow transition duration-300 hover:shadow-pink-400/80 hover:shadow-lg animate-pulse">Download CV</a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 rounded-2xl p-6 shadow">
          <h3 className="text-2xl font-semibold mb-3 text-pink-300" style={{ fontFamily: 'Calibri, sans-serif' }}>About me</h3>
          <p className="text-gray-200 leading-relaxed">I recently graduated with a degree in Computer Science and have experience building websites with HTML, CSS, JavaScript and PHP. I enjoy front-end development, UI/UX, and building small systems like the Beauty Parlor Online Management System — a project that covers user registration, booking, and payment flows.</p>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-900 rounded-2xl p-6 shadow">
            <h4 className="text-xl font-semibold mb-3 text-pink-300" style={{ fontFamily: 'Calibri, sans-serif' }}>Technical skills</h4>
            <ul className="list-disc list-inside text-gray-200 space-y-1">
              <li>HTML5, CSS3, JavaScript (ES6+)</li>
              <li>Responsive design, Flexbox, Grid</li>
              <li>PHP & MySQL (XAMPP local development)</li>
              <li>Version control with Git & GitHub</li>
              <li>Basic knowledge of servers & deployment</li>
            </ul>
          </div>

          <div className="bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-900 rounded-2xl p-6 shadow">
            <h4 className="text-xl font-semibold mb-3 text-pink-300" style={{ fontFamily: 'Calibri, sans-serif' }}>Other skills & tools</h4>
            <ul className="list-disc list-inside text-gray-200 space-y-1">
              <li>Visual Studio Code</li>
              <li>Wireframing & basic UI prototyping</li>
              <li>Decision Support Models / Information Systems Audit (academic)</li>
              <li>Business Intelligence basics</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-pink-300" style={{ fontFamily: 'Calibri, sans-serif' }}>Selected projects</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project 1 */}
            <article className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-2xl p-4 shadow">
              <div className="h-36 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 rounded-md flex items-center justify-center mb-3">
                <span className="text-gray-300">Beauty Parlor Management (screenshot)</span>
              </div>
              <h5 className="font-semibold text-pink-300">Beauty Parlor Online Management System</h5>
              <p className="text-sm text-gray-200 mt-2">A full website to manage appointments, user registration, and online payments. Built with HTML, CSS, PHP and MySQL for local hosting (XAMPP).</p>
              <div className="mt-3 flex justify-between items-center text-sm">
                <a className="underline text-pink-400" href="#">View code</a>
                <span>2025</span>
              </div>
            </article>

            {/* Project 2 */}
            <article className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-2xl p-4 shadow">
              <div className="h-36 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 rounded-md flex items-center justify-center mb-3">
                <span className="text-gray-300">Portfolio site (screenshot)</span>
              </div>
              <h5 className="font-semibold text-pink-300">Personal Portfolio</h5>
              <p className="text-sm text-gray-200 mt-2">This portfolio template, responsive and easy to customize with your projects and contact info.</p>
              <div className="mt-3 flex justify-between items-center text-sm">
                <a className="underline text-pink-400" href="#">View demo</a>
                <span>2025</span>
              </div>
            </article>

            {/* Project 3 */}
            <article className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-2xl p-4 shadow">
              <div className="h-36 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 rounded-md flex items-center justify-center mb-3">
                <span className="text-gray-300">Research / assignment</span>
              </div>
              <h5 className="font-semibold text-pink-300">Information Systems Audit Summary</h5>
              <p className="text-sm text-gray-200 mt-2">Academic project covering COBIT, risk management and decision support models.</p>
              <div className="mt-3 flex justify-between items-center text-sm">
                <a className="underline text-pink-400" href="#">Read more</a>
                <span>2025</span>
              </div>
            </article>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 rounded-2xl p-6 shadow">
          <h3 className="text-2xl font-semibold mb-3 text-pink-300" style={{ fontFamily: 'Calibri, sans-serif' }}>Contact</h3>
          <p className="text-gray-200">Want to work together? Send a message or email me at <a href="mailto:merzkorchy@gmail.com" className="underline text-pink-400">merzkorchy@gmail.com</a>.</p>

          <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="p-3 rounded-lg border border-pink-500 bg-gray-900 text-gray-100 focus:ring-2 focus:ring-pink-400" placeholder="Your name" />
            <input className="p-3 rounded-lg border border-purple-500 bg-gray-900 text-gray-100 focus:ring-2 focus:ring-purple-400" placeholder="Your email" />
            <textarea className="md:col-span-2 p-3 rounded-lg border border-pink-500 bg-gray-900 text-gray-100 focus:ring-2 focus:ring-pink-400" rows={4} placeholder="Message"></textarea>
            <button type="button" className="md:col-span-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow hover:shadow-lg hover:shadow-pink-400/80 transition">Send message</button>
          </form>
        </section>

        <footer className="mt-10 text-center text-sm text-gray-400">© {new Date().getFullYear()} Mercy Cherop Koech — Built with ❤️</footer>
      </main>
    </div>
  );
}
