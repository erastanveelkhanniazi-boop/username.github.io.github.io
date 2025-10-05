import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [hoveredTool, setHoveredTool] = useState<string>('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.includes('@') || formData.name.trim() === '' || formData.message.trim() === '') {
      alert('Please fill all fields correctly (valid email required).');
      return;
    }
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const tools = [
    { name: 'Adobe Illustrator', desc: 'Vector graphics mastery' },
    { name: 'Adobe Photoshop', desc: 'Raster editing pro' },
    { name: 'Canva', desc: 'Quick design toolkit' },
    { name: 'Midjourney', desc: 'AI image generation' },
    { name: 'Adobe Firefly', desc: 'Generative AI fills' },
    { name: 'Leonardo AI', desc: 'AI art creation' },
    { name: 'Figma', desc: 'Collaborative UI/UX' },
    { name: 'Procreate', desc: 'Digital illustration' },
    { name: 'Blender', desc: '3D modeling basics' },
  ];

  return (
    <>
      <Head>
        <title>Eras Tanveel Khan - Graphic Designer & AI Design Expert</title>
        <meta name="description" content="Professional portfolio of Eras Tanveel Khan, blending graphic design and AI from Mianwali, Pakistan." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                darkMode: 'class',
                theme: {
                  fontFamily: {
                    sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                  },
                  extend: {
                    colors: {
                      primary: '#1A1A1A',
                      accent: '#B6EDE5',
                    },
                  },
                },
              }
            `,
          }}
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <style dangerouslySetInnerHTML={{ __html: 'html { scroll-behavior: smooth; }' }} />
      </Head>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-primary dark:text-white font-sans antialiased">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4 md:py-3">
              <motion.a
                href="#home"
                className="text-2xl font-bold text-primary dark:text-white hover:text-accent transition-colors"
                initial={{ x: -50 }}
                animate={{ x: 0 }}
              >
                Eras Tanveel Khan
              </motion.a>
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="hover:text-accent transition-colors py-2">About</a>
                <a href="#experience" className="hover:text-accent transition-colors py-2">Experience</a>
                <a href="#skills" className="hover:text-accent transition-colors py-2">Skills</a>
                <a href="#process" className="hover:text-accent transition-colors py-2">Process</a>
                <a href="#portfolio" className="hover:text-accent transition-colors py-2">Portfolio</a>
                <a href="#contact" className="hover:text-accent transition-colors py-2">Contact</a>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm bg-accent/20 text-accent px-3 py-1 rounded-full hidden sm:inline">🇵🇰 English, Urdu</span>
                <a
                  href="https://www.fiverr.com/s/xXazGzQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-primary px-4 py-2 rounded-full font-semibold hover:scale-105 transition-all"
                >
                  Fiverr Profile
                </a>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full bg-gray-200/50 dark:bg-gray-700/50 hover:bg-accent/20 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? '☀️' : '🌙'}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-8 pt-20 bg-gradient-to-br from-accent/20 to-white dark:from-gray-800 dark:to-gray-900">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-8 p-8 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-accent/30">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Eras Tanveel Khan
              </h1>
              <p className="text-xl md:text-2xl font-semibold mb-2 text-primary dark:text-white">Graphic Designer & AI Design Expert</p>
              <p className="text-lg mb-4 opacity-80">Mianwali, Pakistan | TANVEEL DIGITAL ACADEMY</p>
              <p className="text-2xl italic text-accent mb-8 font-light">“Designs That Speak — Creativity Beyond Limits”</p>
              {/* AI-generated hero banner simulation */}
              <div className="bg-gradient-to-r from-teal-400 to-blue-500 rounded-full p-6 mb-8 inline-block">
                <p className="text-white font-bold text-xl animate-pulse">AI-Enhanced Designs: Where Tech Meets Art</p>
              </div>
            </div>
            <div className="space-x-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={() => alert('Resume downloaded! Visit Fiverr for full details or contact for PDF.')}
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all shadow-lg"
              >
                📄 Download Resume
              </button>
              <a
                href="https://www.fiverr.com/s/xXazGzQ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-primary px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all"
              >
                🚀 Hire Me on Fiverr
              </a>
            </div>
          </motion.div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
          {/* About Section */}
          <section id="about">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-center mb-12 text-primary dark:text-white"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                  I’m Eras Tanveel Khan, a professional graphic designer and AI specialist from Pakistan. I design modern T-shirt graphics, logos, and brand identities that blend creativity and technology. With years of experience, I help brands stand out through unique and meaningful visuals.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Passionate about pushing boundaries with AI tools like Midjourney and Firefly, I create visuals that resonate globally. From Mianwali, I'm building TANVEEL DIGITAL ACADEMY to empower aspiring designers.
                </p>
              </div>
              <div className="bg-gradient-to-br from-accent to-teal-400 rounded-2xl p-8 flex justify-center items-center h-64">
                <div className="text-8xl">🎨</div>
              </div>
            </motion.div>
          </section>

          {/* Experience Section */}
          <section id="experience">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-center mb-12 text-primary dark:text-white"
            >
              Experience
            </motion.h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '🎨',
                  title: 'Graphic Designer at TANVEEL DIGITAL ACADEMY',
                  dates: '2022–Present',
                  desc: 'Designed professional T-shirt graphics, logos, and brand collections for global clients.',
                },
                {
                  icon: '💼',
                  title: 'Freelance Designer on Fiverr',
                  dates: '2023–Present',
                  desc: 'Delivered AI-assisted branding and vector art for international businesses.',
                },
                {
                  icon: '🏗️',
                  title: 'Civil Engineer',
                  dates: '2019–2021',
                  desc: 'Built expertise in structure design and technical drawing before focusing on creative design.',
                },
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all"
                >
                  <div className="text-4xl mb-4">{exp.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-primary dark:text-white">{exp.title}</h3>
                  <p className="text-sm font-medium text-accent mb-4 opacity-80">{exp.dates}</p>
                  <p className="text-gray-700 dark:text-gray-300">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-center mb-12 text-primary dark:text-white"
            >
              Skills
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1, delay: 0.2 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-center mb-6 text-primary dark:text-white">Design Expertise</h3>
                {[
                  { name: 'Logo Design', width: 'w-full' },
                  { name: 'T-shirt Design', width: 'w-11/12' },
                  { name: 'Brand Identity', width: 'w-10/12' },
                  { name: 'Vector Illustration', width: 'w-5/6' },
                  { name: 'Typography Design', width: 'w-4/5' },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
                      <span>{skill.name}</span>
                      <span>100%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r from-accent to-teal-500 rounded-full ${skill.width}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1, delay: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold text-center mb-6 text-primary dark:text-white">Tools & AI</h3>
                {[
                  { name: 'Adobe Illustrator', width: 'w-11/12' },
                  { name: 'Adobe Photoshop', width: 'w-10/12' },
                  { name: 'Canva', width: 'w-5/6' },
                  { name: 'AI Tools (Midjourney, Firefly, Leonardo AI)', width: 'w-full' },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
                      <span>{skill.name}</span>
                      <span>100%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r from-accent to-teal-500 rounded-full ${skill.width}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* My Tools Interactive Section */}
          <section id="tools">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-center mb-12 text-primary dark:text-white"
            >
              My Tools
            </motion.h2>
            <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:border-accent hover:shadow-2xl cursor-pointer transition-all group relative overflow-hidden"
                  onHoverStart={() => setHoveredTool(tool.name)}
                  onHoverEnd={() => setHoveredTool('')}
                >
                  <div className="bg-gradient-to-br from-accent to-teal-400 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                    🛠️
                  </div>
                  <h4 className="font-semibold mb-2 text-primary dark:text-white text-lg group-hover:text-accent transition-colors">{tool.name}</h4>
                  {hoveredTool === tool.name && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-gray-600 dark:text-gray-400 mt-2 absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm rounded-xl"
                    >
                      {tool.desc}
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Design Process Section */}
          <section id="process">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-center mb-12 text-primary dark:text-white"
            >
              My Design Process
            </motion.h2>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-teal-400 hidden lg:block" />
              <div className="space-y-12 lg:flex lg:space-y-0 lg:space-x-12 lg:items-center lg:justify-center">
                {[
                  { step: 1, icon: '💭', title: 'Understand Client Goals', desc: 'Deep dive into vision, needs, and brand story to align creativity with objectives.' },
                  { step: 2, icon: '🤖', title: 'Generate AI Concept Visuals', desc: 'Leverage Midjourney, Firefly, and Leonardo AI for rapid ideation and inspiration.' },
                  { step: 3, icon: '✏️', title: 'Refine Manually in Illustrator', desc: 'Handcraft vectors, adjust details, and infuse personal touch for perfection.' },
                  { step: 4, icon: '📊', title: 'Finalize with Mockups', desc: 'Present polished designs in realistic contexts with animations and variations.' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="lg:w-1/4 text-center lg:ml-0 relative lg:even:translate-x-6 lg:odd:-translate-x-6"
                  >
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-primary dark:text-white">{item.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 px-4 lg:px-0">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section id="achievements">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-center mb-12 text-primary dark:text-white"
            >
              Achievements
            </motion.h2>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
              className="max-w-2xl mx-auto space-y-6 text-lg text-gray-700 dark:text-gray-300 list-disc list-inside bg-white/50 dark:bg-gray-800/50 rounded-xl p-8"
            >
              <li className="font-semibold text-primary dark:text-white">Founder of Tanveel Digital Academy</li>
              <li className="font-semibold text-primary dark:text-white">Founder of Indus Graphic Design Academy</li>
              <li className="font-semibold text-primary dark:text-white">Launched creative studio <span className="italic">Eras Imagery</span></li>
              <li>Contributor on Adobe Stock with premium assets</li>
              <li>Designed viral T-shirt slogans:
                <ul className="list-circle ml-6 mt-2 space-y-1 text-sm">
                  <li className="font-medium">“Eat Drink and Be Scary”</li>
                  <li className="font-medium">“Queen of Chaos”</li>
                  <li className="font-medium">“Lone Wolf, Strong Spirit”</li>
                  <li className="font-medium">“Mom Mode On 24/7”</li>
                </ul>
              </li>
            </motion.ul>
          </section>

          {/* Portfolio Section */}
          <section id="portfolio">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-center mb-12 text-primary dark:text-white"
            >
              Portfolio Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { title: 'Tanveel Logo Suite Mockup', desc: '3D logo presentation across cards and signage for brand launch.', gradient: 'from-purple-500 to-pink-500' },
                { title: 'Halloween T-Shirt Collection', desc: 'Fun spooky typography designs with AI-generated elements.', gradient: 'from-orange-500 to-red-500' },
                { title: 'Queen of Chaos Series', desc: 'Empowering fashion graphics with bold, chaotic aesthetics.', gradient: 'from-pink-500 to-rose-500' },
                { title: 'Lone Wolf Spirit', desc: 'Wolf and moon digital illustration for adventure brand.', gradient: 'from-gray-600 to-gray-800' },
                { title: 'Mom Mode On 24/7', desc: 'Trendy modern T-shirt art celebrating everyday heroes.', gradient: 'from-yellow-500 to-amber-500' },
                { title: 'AI Logo Experiments', desc: 'Futuristic minimalist branding using generative AI.', gradient: 'from-cyan-500 to-blue-500' },
                { title: 'Indus Academy Branding', desc: 'Educational logo and materials for design academy.', gradient: 'from-green-500 to-emerald-500' },
                { title: 'Viral Slogan Tees', desc: 'Collection of catchy phrase designs that went viral on social.', gradient: 'from-indigo-500 to-violet-500' },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-200/50 dark:border-gray-700/50 group cursor-pointer"
                >
                  <div className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    <div className="bg-white/20 rounded-full p-4 text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity">👁️</div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-primary dark:text-white group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{project.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-center mb-12 text-primary dark:text-white"
            >
              Testimonials
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  quote: '“Eras understood my vision perfectly. The logo exceeded expectations!”',
                  author: 'Client, USA',
                },
                {
                  quote: '“Professional, fast, and creative. I’ll hire him again for sure.”',
                  author: 'Client, UK',
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 30 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gradient-to-r from-accent/10 to-teal-100/10 dark:from-accent/20 dark:to-teal-900/20 rounded-2xl p-8 italic border-l-4 border-accent text-center md:text-left hover:scale-105 transition-all"
                >
                  <p className="text-lg mb-4 text-gray-800 dark:text-gray-200">{testimonial.quote}</p>
                  <p className="font-semibold text-primary dark:text-white not-italic">— {testimonial.author}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="bg-gradient-to-br from-accent/10 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-3xl p-12">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-center mb-12 text-primary dark:text-white"
            >
              Get In Touch
            </motion.h2>
            <div className="max-w-2xl mx-auto text-center mb-12">
              <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
                📧 Get in touch or start your project now. Let's create something amazing together!
              </p>
              <a
                href="https://www.fiverr.com/s/xXazGzQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all mb-8 shadow-lg"
              >
                🚀 Hire Me on Fiverr →
              </a>
            </div>
            <motion.form
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="max-w-md mx-auto space-y-6"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-primary dark:text-white focus:border-accent focus:outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-primary dark:text-white focus:border-accent focus:outline-none transition-all"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  className="w-full p-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-primary dark:text-white focus:border-accent focus:outline-none transition-all resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-accent to-teal-500 text-primary font-bold py-4 px-8 rounded-full text-lg hover:shadow-lg transition-all"
              >
                Send Message
              </motion.button>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center text-green-600 font-semibold bg-green-100 dark:bg-green-900/50 p-4 rounded-xl"
                >
                  Message sent successfully! I'll respond soon. 🎉
                </motion.p>
              )}
            </motion.form>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-primary/10 dark:bg-gray-800/50 border-t border-accent/20 py-12 mt-24">
          <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
            <p className="text-2xl font-bold text-primary dark:text-white mb-4">Thanks for Visiting!</p>
            <p className="text-lg font-light italic text-accent">“Turning ideas into timeless visuals.”</p>
            <div className="flex justify-center space-x-6 mt-8">
              <a href="https://www.fiverr.com/s/xXazGzQ" target="_blank" rel="noopener noreferrer" className="text-2xl hover:scale-110 transition-transform">💼 Fiverr</a>
              <a href="#" className="text-2xl hover:scale-110 transition-transform">📸 Instagram</a>
              <a href="#" className="text-2xl hover:scale-110 transition-transform">📘 Facebook</a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-8">
              &copy; 2025 Eras Tanveel Khan. All rights reserved. | Designed with ❤️ in Pakistan.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
