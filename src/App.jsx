import React, { useState } from 'react';
import { resumeData } from './data/resumeData';
import { 
  Code, 
  Terminal, 
  Mail, 
  Linkedin, 
  MapPin, 
  ExternalLink, 
  CheckCircle2, 
  Copy, 
  Cpu, 
  Layers, 
  Rocket,
  Lightbulb,
  Wrench,
  Globe
} from 'lucide-react';

export default function App() {
  const { personalInfo, experiences, projects, skillCategories, education } = resumeData;
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    showToast('Copied email to clipboard!');
  };

  return (
    <div className="portfolio-app">
      {/* Background Orbs */}
      <div className="ambient-bg">
        <div className="glow-orb-1"></div>
        <div className="glow-orb-2"></div>
      </div>

      <div className="app-container">
        {/* Navigation Bar */}
        <header className="navbar">
          <a href="#" className="nav-brand">
            Renusree<span>.dev</span>
          </a>
          <ul className="nav-links">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#education" className="nav-link">Education</a></li>
          </ul>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button onClick={copyEmail} className="btn-secondary" title="Copy Email">
              <Mail size={16} /> Contact
            </button>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section id="about" className="hero">
          <div className="badge-pill">
            <span className="pulse-dot"></span>
            Software Engineer @ Amazon AGI
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          <p className="hero-subtitle">
            {personalInfo.summary}
          </p>
          <div className="hero-actions">
            <button onClick={copyEmail} className="btn-primary">
              <Copy size={16} /> {personalInfo.email}
            </button>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Linkedin size={16} /> Connect on LinkedIn <ExternalLink size={14} />
            </a>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <MapPin size={16} color="var(--accent-cyan)" /> {personalInfo.location}
            </span>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="experience-section">
          <div className="section-header">
            <span className="section-tag">Career History</span>
            <h2 className="section-title">Professional Experience</h2>
          </div>
          <div className="experience-list">
            {experiences.map((exp, idx) => (
              <div className="experience-card" key={idx}>
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role-title">{exp.role}</h3>
                    <div className="exp-company">{exp.company} <span style={{ color: 'var(--text-dim)', fontWeight: 400 }}>— {exp.team}</span></div>
                  </div>
                  <div className="exp-meta">
                    <div className="exp-period">{exp.period}</div>
                    <span className="exp-tag">{exp.tag}</span>
                  </div>
                </div>
                <ul className="exp-bullet-list">
                  {exp.highlights.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
                <div className="skill-tags">
                  {exp.skills.map((skill, sIdx) => (
                    <span className="skill-tag" key={sIdx}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="projects-section">
          <div className="section-header">
            <span className="section-tag">Featured Engineering Work</span>
            <h2 className="section-title">Projects</h2>
          </div>
          <div className="projects-single">
            {projects.map((proj, idx) => (
              <div className="project-card-full" key={idx} style={{
                background: 'var(--bg-card)',
                backdropFilter: 'var(--glass-backdrop)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                boxShadow: 'var(--shadow-card)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    {proj.award && <div className="project-award">🏆 {proj.award}</div>}
                    <h3 className="project-title" style={{ fontSize: '1.8rem', marginTop: '0.25rem' }}>{proj.title}</h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{proj.period}</span>
                  </div>
                  {proj.liveUrl && (
                    <a 
                      href={proj.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary" 
                      style={{ textDecoration: 'none' }}
                    >
                      <Globe size={16} /> Visit Live Web App <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                {/* Problem Statement */}
                <div className="project-block" style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--accent-amber)' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-amber)', fontSize: '1.05rem', marginBottom: '0.4rem' }}>
                    <Lightbulb size={18} /> The Problem
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {proj.problem}
                  </p>
                </div>

                {/* The Solution */}
                <div className="project-block" style={{ background: 'rgba(56, 189, 248, 0.03)', padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--accent-cyan)' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', fontSize: '1.05rem', marginBottom: '0.4rem' }}>
                    <Rocket size={18} /> The Solution & Core Value
                  </h4>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {proj.solution}
                  </p>
                </div>

                {/* What I Built */}
                <div className="project-block" style={{ background: 'rgba(168, 85, 247, 0.03)', padding: '1.25rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--accent-violet)' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-violet)', fontSize: '1.05rem', marginBottom: '0.4rem' }}>
                    <Wrench size={18} /> What I Built & Architectural Role
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {proj.whatIBuilt}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-dim)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Tech Stack & Services:
                  </h4>
                  <div className="skill-tags">
                    {proj.architecture.map((arch, aIdx) => (
                      <span className="skill-tag" key={aIdx} style={{ color: 'var(--accent-cyan)', borderColor: 'rgba(56, 189, 248, 0.3)', padding: '0.35rem 0.85rem' }}>{arch}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section">
          <div className="section-header">
            <span className="section-tag">Technical Toolbox</span>
            <h2 className="section-title">Skills & Technologies</h2>
          </div>
          <div className="skills-matrix">
            {Object.entries(skillCategories).map(([catName, skillsArr], idx) => (
              <div className="skill-category-card" key={idx}>
                <h3 className="category-title">
                  {idx === 0 && <Code size={18} />}
                  {idx === 1 && <Layers size={18} />}
                  {idx === 2 && <Cpu size={18} />}
                  {idx === 3 && <Terminal size={18} />}
                  {catName}
                </h3>
                <div className="category-skills">
                  {skillsArr.map((sk, skIdx) => (
                    <span className="skill-chip" key={skIdx} style={{
                      background: 'rgba(255,255,255,0.05)',
                      padding: '0.35rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)'
                    }}>
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" style={{ padding: '3rem 0' }}>
          <div className="section-header">
            <span className="section-tag">Academic Background</span>
            <h2 className="section-title">Education</h2>
          </div>
          <div className="education-card">
            <div className="edu-header">
              <div>
                <h3 className="edu-school">{education.school}</h3>
                <div className="edu-degree">{education.degree}</div>
              </div>
              <div className="exp-period" style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                {education.period}
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>Completed Coursework:</h4>
              <div className="coursework-grid">
                {education.coursework.map((course, cIdx) => (
                  <span className="course-chip" key={cIdx}>
                    <CheckCircle2 size={14} color="var(--accent-cyan)" inline="true" /> {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} Renusree Chittella • Built for high performance & hosted on GitHub Pages</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
            Domain: <a href="https://renusreechittella.com" style={{ color: 'var(--accent-cyan)' }}>renusreechittella.com</a>
          </p>
        </footer>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
