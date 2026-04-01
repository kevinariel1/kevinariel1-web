"use client";
import React from 'react';

export default function Home() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* HERO SECTION */}
      <section 
        id="home" 
        style={{ 
          minHeight: '80vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          paddingTop: '2rem'
        }}
        className="animate-fade-in"
      >
        <span style={{ 
            padding: '5px 15px', 
            borderRadius: '20px', 
            background: 'var(--surface)', 
            border: '1px solid var(--surface-border)', 
            marginBottom: '1.5rem',
            color: 'var(--primary)',
            fontWeight: '600'
          }}
        >
          🚀 Fullstack Developer
        </span>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
          Hi, I'm <span className="text-gradient">Kevin</span>
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'rgba(255,255,255,0.7)', 
          maxWidth: '700px', 
          margin: '0 auto 2.5rem',
          lineHeight: '1.8'
        }}>
          I'm a Computer Science Fresh Graduate from Indonesia. I specialize in building full-stack applications with the MERN and PERN stacks, and occasionally use Kotlin for Android.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </div>
      </section>

      {/* SKILLS & ABOUT SECTION */}
      <section id="about" className="animate-fade-in delay-100">
        <div className="grid-2 glass" style={{ padding: '3rem', marginTop: '2rem', alignItems: 'center' }}>
          <div>
            <h2>About <span className="text-gradient">Me</span></h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>
              I focus heavily on creating robust backend systems and intuitive user interfaces. I typically use the <strong>MERN</strong> (MongoDB, Express, React JS, Node.js) or <strong>PERN</strong> setup with PostgreSQL.
              Aside from web development, I have experience working with Python, TailwindCSS, TypeScript, and Android development via Kotlin.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <div className="tag">MongoDB</div>
              <div className="tag">Express</div>
              <div className="tag">React JS</div>
              <div className="tag">Node.js</div>
              <div className="tag">PostgreSQL</div>
              <div className="tag">TypeScript</div>
              <div className="tag">Python</div>
              <div className="tag">TailwindCSS</div>
              <div className="tag">Kotlin / Android</div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
              background: '#1a1a24', 
              borderRadius: '12px', 
              padding: '1.5rem', 
              width: '100%',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              border: '1px solid var(--surface-border)'
            }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}/>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}/>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}/>
              </div>
              <code style={{ color: '#a5b4fc', display: 'block', fontSize: '0.9rem' }}>
                <span style={{ color: '#ec4899' }}>const</span> developer = {'{'}
                <br/>&nbsp;&nbsp;name: <span style={{ color: '#10b981' }}>'Kevin'</span>,
                <br/>&nbsp;&nbsp;graduated: <span style={{ color: '#10b981' }}>'Computer Science'</span>,
                <br/>&nbsp;&nbsp;location: <span style={{ color: '#10b981' }}>'Indonesia'</span>,
                <br/>&nbsp;&nbsp;focus: <span style={{ color: '#10b981' }}>['MERN', 'PERN']</span>
                <br/>{'}'};
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="animate-fade-in delay-200" style={{ paddingTop: '8rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2>Featured <span className="text-gradient">Projects</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>Some of my recent best fullstack creations</p>
        </div>

        <div className="grid-3">
          {PROJECTS.map((proj, idx) => (
            <div key={idx} className="glass project-card" style={{ overflow: 'hidden', padding: 0, transition: 'transform 0.3s' }}>
              <div style={{ height: '200px', position: 'relative', background: `linear-gradient(145deg, ${proj.color1}, ${proj.color2})`, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '1rem' }}>
                 <img 
                   src={`/${proj.image}`} 
                   alt={proj.title} 
                   style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 1 }} 
                   onError={(e) => e.currentTarget.style.display = 'none'}
                 /> 
                 <h3 style={{ color: 'white', opacity: 0.9, margin: 0, textShadow: '0 2px 10px rgba(0,0,0,0.5)', fontSize: '1.25rem', position: 'relative', zIndex: 2 }}>{proj.title}</h3>
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>{proj.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '80px', lineHeight: 1.5 }}>
                  {proj.desc}
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {proj.link && <a href={proj.link} className="text-gradient" style={{ fontWeight: 600, fontSize: '0.9rem' }}>Live Demo →</a>}
                  {proj.github && <a href={proj.github} style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 600, fontSize: '0.9rem' }}>GitHub</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="animate-fade-in delay-300" style={{ paddingTop: '8rem', paddingBottom: '8rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Let's Build Something <span className="text-gradient">Together</span></h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 3rem' }}>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:kevinariel.yap1@gmail.com" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>Email Me</a>
          <a href="https://github.com/kevinariel1" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>GitHub</a>
        </div>
      </section>
    </div>
  );
}

const PROJECTS = [
  {
    title: 'Financial Tracker App',
    desc: 'A personal finance management app focused on data privacy and disciplined budgeting. It transforms manual transaction records into visual charts that help users monitor their cash flow independently without ads or third-party tracking.',
    link: 'https://financial-tracker-alpha-eight.vercel.app/',
    github: 'https://github.com/kevinariel1/financial-tracker.git',
    color1: '#4facfe',
    color2: '#00f2fe',
    image: 'financial_tracker.jpeg'
  },
  {
    title: 'ERP Project - Bakery Shop',
    desc: 'Micro ERP solution for bakery that integrates raw material stock tracking, employee account management (RBAC), and real-time transaction data synchronization.',
    link: '',
    github: 'https://github.com/kevinariel1/bakery-erp.git',
    color1: '#f093fb',
    color2: '#f5576c',
    image: 'bakery.jpeg'
  },
  {
    title: 'ERP - Agriculture Supply Chain',
    desc: 'An advanced agriculture supply chain platform utilizing the PERN stack, TypeScript, and Prisma ORM for type safety.',
    link: '',
    github: 'https://github.com/kevinariel1/agritech-erp.git',
    color1: '#43e97b',
    color2: '#38f9d7',
    image: 'agritech.jpeg'
  },
  {
    title: 'I Love PDF Clone',
    desc: 'Standalone PDF manipulation tool with anti-overlap input validation and interactive visual page preview (dynamic color)',
    link: '',
    github: 'https://github.com/kevinariel1/ILovePDF-clone.git',
    color1: '#f093fb',
    color2: '#f5576c',
    image: 'pdfclone.jpeg'
  }
];
