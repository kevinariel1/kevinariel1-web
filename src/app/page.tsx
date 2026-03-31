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
          Crafting <span className="text-gradient">Digital</span> <br/>
          Experiences
        </h1>
        <p style={{ 
          fontSize: '1.25rem', 
          color: 'rgba(255,255,255,0.7)', 
          maxWidth: '600px', 
          margin: '0 auto 2.5rem',
          lineHeight: '1.8'
        }}>
          I build full-stack web applications with modern technologies like React, Next.js, and Node.js. 
          Bringing ideas to life on the internet.
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
              I'm a passionate developer focusing on building robust backend systems and beautiful, intuitive user interfaces.
              I thrive in solving complex problems and learning bleeding-edge technologies.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <div className="tag">TypeScript</div>
              <div className="tag">React / Next.js</div>
              <div className="tag">Node.js</div>
              <div className="tag">PostgreSQL</div>
              <div className="tag">GraphQL</div>
              <div className="tag">TailwindCSS</div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* Visual element representing code */}
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
                <br/>&nbsp;&nbsp;name: <span style={{ color: '#10b981' }}>'Wait For Input'</span>,
                <br/>&nbsp;&nbsp;focus: <span style={{ color: '#10b981' }}>'Fullstack Web'</span>,
                <br/>&nbsp;&nbsp;drivenBy: <span style={{ color: '#10b981' }}>'Passion & Coffee'</span>
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
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>Some of my recent fullstack creations</p>
        </div>

        <div className="grid-3">
          {PROJECTS.map((proj, idx) => (
            <div key={idx} className="glass project-card" style={{ overflow: 'hidden', padding: 0, transition: 'transform 0.3s' }}>
              <div style={{ height: '200px', background: `linear-gradient(145deg, ${proj.color1}, ${proj.color2})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 {/* Placeholder for project mockups */}
                 <h3 style={{ color: 'white', opacity: 0.8, margin: 0, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{proj.title} Mockup</h3>
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>{proj.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '60px' }}>{proj.desc}</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href={proj.link} className="text-gradient" style={{ fontWeight: 600, fontSize: '0.9rem' }}>Live Demo →</a>
                  <a href={proj.github} style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 600, fontSize: '0.9rem' }}>GitHub</a>
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
        <a href="mailto:your.email@example.com" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>Say Hello</a>
      </section>
    </div>
  );
}

const PROJECTS = [
  {
    title: 'E-Commerce Platform',
    desc: 'A full-featured online store with payment integrations, real-time inventory, and user dashboard.',
    link: '#',
    github: '#',
    color1: '#4facfe',
    color2: '#00f2fe'
  },
  {
    title: 'Task Management SaaS',
    desc: 'Collaborative kanban boards for teams with real-time updates and notifications.',
    link: '#',
    github: '#',
    color1: '#f093fb',
    color2: '#f5576c'
  },
  {
    title: 'AI Image Generator',
    desc: 'Web app wrapping stable diffusion API to generate missing assets seamlessly.',
    link: '#',
    github: '#',
    color1: '#43e97b',
    color2: '#38f9d7'
  }
];
