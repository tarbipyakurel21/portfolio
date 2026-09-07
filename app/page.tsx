'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { ArrowUpRight, Code2, UserRound, Mail, GitFork as Github, ContactRound as Linkedin, FileText, Download, MapPin, GraduationCap, Terminal, Heart, ShoppingBag } from 'lucide-react';
import {
  AppleLogo,
  FinderIcon,
  SafariIcon,
  MessagesIcon,
  MailIcon,
  CalendarIcon,
  ContactsIcon,
  NotesIcon,
  MusicIcon,
  SettingsIcon,
  DownloadsIcon,
  TrashIcon,
  LinkedInAppIcon,
  WifiIcon,
  BatteryIcon,
  ControlCenterIcon,
  SearchIcon,
} from './macos-icons';

type WindowId = 'about' | 'projects' | 'experience' | 'contact' | 'resume' | 'messages' | 'music' | `project-${number}`;

type Track = {
  id: string;
  title: string;
  artist: string;
  album: string;
  durationLabel: string;
  /** Spotify track id for embed — play only when the user hits play in Spotify. */
  spotifyId: string;
};

const MUSIC_LIST: Track[] = [
  {
    id: 'american-pie',
    title: 'American Pie',
    artist: 'Don McLean',
    album: 'American Pie',
    durationLabel: '8:36',
    spotifyId: '1fDsrQ23eTAVFElUMaf38X',
  },
  {
    id: 'piano-man',
    title: 'Piano Man',
    artist: 'Billy Joel',
    album: 'Piano Man',
    durationLabel: '5:39',
    spotifyId: '78WVLOP9pN0G3gRLFy1rAa',
  },
  {
    id: 'winner-takes-it-all',
    title: 'The Winner Takes It All',
    artist: 'ABBA',
    album: 'ABBA Gold',
    durationLabel: '4:55',
    spotifyId: '1g1RLXmuXu7HpMA6gmiYve',
  },
];

function spotifyEmbedUrl(trackId: string) {
  return `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`;
}

const projects = [
  {
    name: 'Continuing Education',
    short: 'A better way to keep learning.',
    category: 'FULL-STACK · PRODUCTION',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    description: 'A production learning platform with secure authentication, a role-based admin dashboard, course delivery, and automated certificates. Launched with 20+ real users in its first month and live Stripe payments.',
    details: ['Secure authentication and role-based administration', 'Automated certificates, media delivery, and file uploads', 'Docker Compose deployment with automated database migrations'],
    url: 'https://ce.cloudcrustllc.com/',
  },
  {
    name: 'QuietHelp',
    short: 'Connection, without the labels.',
    category: 'DISTRIBUTED SYSTEMS',
    tech: ['Next.js', 'Spring Boot', 'FastAPI', 'Redis'],
    description: 'An anonymous peer support platform with real-time WebSocket chat and AI-assisted support. Built around distributed microservices, reliable routing, and fault-tolerant chatbot services.',
    details: ['Real-time communication over WebSockets', 'API gateway with rate limiting and service routing', 'Containerized services behind a reverse proxy'],
    url: null as string | null,
  },
  {
    name: 'MyShop',
    short: 'Many services. One seamless shop.',
    category: 'MICROSERVICES · COMMERCE',
    tech: ['Spring Boot', 'MySQL', 'Redis', 'Docker'],
    description: 'A microservices commerce platform bringing together authentication, products, carts, machine learning recommendations, and payments. Secured with JWT, role-based access, and Redis token management.',
    details: ['Independent authentication, product, cart, and payment services', 'Machine learning based recommendation service', 'Stripe checkout and containerized deployment'],
    url: null as string | null,
  },
];

const experience = [
  { role: 'Undergraduate Research Collaborator', org: 'Multilingual LLM Safety · Independent', date: '2026 — Present', description: 'Investigating jailbreak behavior and emergent misalignment in LLMs, with emphasis on Nepali as a low-resource language. Building evaluation protocols for safety across languages.', icon: Code2 },
  { role: 'Undergraduate Research Assistant', org: 'MCCPO Reinforcement Learning', date: 'Summer 2026', description: 'Assisted in formulating an adversarial environment for evaluating robustness of the MCCPO reinforcement-learning algorithm.', icon: Terminal },
  { role: 'Co-Lead', org: 'Google Developer Group on Campus', date: 'Feb 2026 — Present', description: 'Helping organize workshops, RoboSoccer, watch parties, and campus events; represented the group at Google I/O and HackPrinceton.', icon: UserRound },
  { role: 'Math Learning Assistant', org: 'The University of Southern Mississippi', date: 'Aug 2025 — Present', description: 'Explain mathematical concepts in group settings and help students develop structured analytical problem-solving skills.', icon: GraduationCap },
];

const toolkit = {
  Languages: ['Python', 'Java', 'C++', 'TypeScript', 'SQL'],
  Frameworks: ['Spring Boot', 'FastAPI', 'React', 'Next.js'],
  Interests: ['Trustworthy AI', 'LLM Safety', 'Low-resource NLP', 'RL'],
};

const LINKEDIN = 'https://www.linkedin.com/in/tarbi-pyakurel/';
const GITHUB = 'https://github.com/tarbipyakurel21';

let bootStartedAt: number | null = null;

function BootScreen() {
  useEffect(() => {
    const root = document.documentElement;
    if (root.classList.contains('has-booted')) return;
    if (bootStartedAt == null) bootStartedAt = Date.now();
    const remaining = Math.max(0, 4000 - (Date.now() - bootStartedAt));
    const done = window.setTimeout(() => root.classList.add('has-booted'), remaining);
    return () => window.clearTimeout(done);
  }, []);

  return (
    <div className="boot-screen" role="status" aria-live="polite" aria-label="Starting Mac">
      <div className="boot-stage">
        <AppleLogo className="boot-apple" size={84} />
        <div className="boot-progress" aria-hidden="true"><i /></div>
      </div>
    </div>
  );
}

function useMenuClock() {
  const [clock, setClock] = useState('');
  useEffect(() => {
    const format = () =>
      new Date().toLocaleString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      });
    setClock(format());
    const id = window.setInterval(() => setClock(format()), 30_000);
    return () => window.clearInterval(id);
  }, []);
  return clock;
}

function DesktopIcon({
  label,
  selected,
  onOpen,
  children,
}: {
  label: string;
  selected: boolean;
  onOpen: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={`desk-icon${selected ? ' selected' : ''}`}
      onClick={onOpen}
      onDoubleClick={onOpen}
    >
      <span className="desk-icon-face">{children}</span>
      <span className="desk-icon-label">{label}</span>
    </button>
  );
}

function FolderFace({ tint = '#4fa3f7' }: { tint?: string }) {
  return (
    <svg className="folder-face" viewBox="0 0 64 52" aria-hidden="true">
      <path d="M2 12c0-3.3 2.7-6 6-6h14l5 5h29c3.3 0 6 2.7 6 6v29c0 3.3-2.7 6-6 6H8c-3.3 0-6-2.7-6-6V12z" fill={tint} />
      <path d="M2 18h60v23c0 3.3-2.7 6-6 6H8c-3.3 0-6-2.7-6-6V18z" fill="#7ec2ff" opacity=".55" />
    </svg>
  );
}

type DockKind =
  | 'finder' | 'safari' | 'messages' | 'mail'
  | 'calendar' | 'contacts' | 'notes' | 'music' | 'settings';

function DockAppIcon({ kind, day }: { kind: DockKind; day: number }) {
  switch (kind) {
    case 'finder': return <FinderIcon />;
    case 'safari': return <SafariIcon />;
    case 'messages': return <MessagesIcon />;
    case 'mail': return <MailIcon />;
    case 'calendar': return <CalendarIcon day={day} />;
    case 'contacts': return <ContactsIcon />;
    case 'notes': return <NotesIcon />;
    case 'music': return <MusicIcon />;
    case 'settings': return <SettingsIcon />;
  }
}

export default function Home() {
  const [open, setOpen] = useState<WindowId | null>(null);
  const [light, setLight] = useState(false);
  const [day, setDay] = useState(6);
  const [appleOpen, setAppleOpen] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const clock = useMenuClock();
  const currentTrack = MUSIC_LIST[trackIndex] ?? MUSIC_LIST[0];

  useEffect(() => {
    setDay(new Date().getDate());
  }, []);

  useEffect(() => {
    if (!appleOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setAppleOpen(false); };
    const onPointer = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('.apple-menu')) return;
      setAppleOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('mousedown', onPointer);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('mousedown', onPointer);
    };
  }, [appleOpen]);

  function selectTrack(index: number) {
    setTrackIndex(index);
    setOpen('music');
  }

  function openMusic() {
    setOpen('music');
  }

  const windowTitle =
    open === 'about' ? 'About Me' :
    open === 'projects' ? 'Projects' :
    open === 'experience' ? 'Experience' :
    open === 'contact' ? 'Contact' :
    open === 'resume' ? 'Resume' :
    open === 'messages' ? 'Messages' :
    open === 'music' ? 'Music' :
    open?.startsWith('project-') ? projects[Number(open.split('-')[1])]?.name :
    'Tarbi Pyakurel';

  const dockApps: Array<{
    id: string;
    label: string;
    kind: DockKind;
    action?: () => void;
    href?: string;
  }> = [
    { id: 'finder', label: 'Finder', kind: 'finder', action: () => setOpen('about') },
    { id: 'safari', label: 'Safari', kind: 'safari', action: () => setOpen('projects') },
    { id: 'messages', label: 'Messages', kind: 'messages', action: () => setOpen('messages') },
    { id: 'mail', label: 'Mail', kind: 'mail', action: () => setOpen('contact') },
    { id: 'calendar', label: 'Calendar', kind: 'calendar', action: () => setOpen('experience') },
    { id: 'contacts', label: 'Contacts', kind: 'contacts', action: () => setOpen('about') },
    { id: 'notes', label: 'Notes', kind: 'notes', action: () => setOpen('resume') },
    { id: 'music', label: 'Music', kind: 'music', action: openMusic },
    { id: 'settings', label: 'System Settings', kind: 'settings', action: () => setLight((v) => !v) },
  ];

  function openAboutFromApple() {
    setAppleOpen(false);
    setOpen('about');
  }

  return (
    <>
      <BootScreen />
      <div className={`desktop ${light ? 'daylight' : ''}`}>
        <a href="#desktop-icons" className="skip-link">Skip to content</a>

        <header className="menubar">
          <div className="menu-left">
            <div className={`apple-menu${appleOpen ? ' open' : ''}`}>
              <button
                type="button"
                className="menu-apple-btn"
                aria-label="Apple menu"
                aria-expanded={appleOpen}
                aria-haspopup="dialog"
                onClick={() => setAppleOpen((v) => !v)}
              >
                <AppleLogo className="menu-apple" size={14} />
              </button>
              {appleOpen && (
                <div className="apple-dropcard" role="dialog" aria-label="About Tarbi Pyakurel">
                  <div className="dropcard-photo">
                    <img src="/profile.png" alt="Tarbi Pyakurel" width={96} height={96} />
                  </div>
                  <div className="dropcard-copy">
                    <strong>Tarbi Pyakurel</strong>
                    <span className="dropcard-role">CS · Economic Data Analysis</span>
                    <p>
                      CS student with a minor in economic data analysis. Interested in research —
                      trustworthy AI, multilingual LLM safety, and reinforcement learning.
                    </p>
                    <div className="dropcard-meta">
                      <span>USM · Class of 2027</span>
                      <span>GPA 3.90</span>
                    </div>
                    <div className="dropcard-actions">
                      <button type="button" onClick={openAboutFromApple}>About Me</button>
                      <a href="/research-cv.pdf" target="_blank" rel="noreferrer">Research CV</a>
                      <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <strong>Tarbi Pyakurel</strong>
            <button type="button" className="menu-link" onClick={() => setOpen('about')}>About</button>
            <button type="button" className="menu-link" onClick={() => setOpen('projects')}>Projects</button>
            <button type="button" className="menu-link" onClick={() => setOpen('experience')}>Research</button>
            <button type="button" className="menu-link" onClick={() => setOpen('contact')}>Contact</button>
            <button type="button" className="menu-link" onClick={() => setOpen('resume')}>Resume</button>
          </div>
          <div className="menu-right">
            <button
              type="button"
              className="menu-now"
              onClick={openMusic}
              aria-label="Tarbi's favorite"
            >
              <span className="menu-now-dot" aria-hidden="true" />
              <span className="menu-now-label">Tarbi&apos;s favorite</span>
            </button>
            <span className="menu-chip" aria-hidden="true"><ControlCenterIcon /></span>
            <span className="menu-chip" aria-hidden="true"><WifiIcon /></span>
            <span className="menu-chip menu-battery" aria-hidden="true"><BatteryIcon /><span>100%</span></span>
            <span className="menu-chip" aria-hidden="true"><SearchIcon /></span>
            <time className="menu-clock" suppressHydrationWarning>{clock || 'Sat, Sep 6, 6:00 PM'}</time>
          </div>
        </header>

        <div className="desktop-stage">
          <nav id="desktop-icons" className="desktop-icons" aria-label="Desktop">
            <DesktopIcon label="About Me" selected={open === 'about'} onOpen={() => setOpen('about')}>
              <span className="desk-app"><ContactsIcon /></span>
            </DesktopIcon>
            <DesktopIcon label="Projects" selected={open === 'projects'} onOpen={() => setOpen('projects')}>
              <FolderFace />
            </DesktopIcon>
            {projects.map((p, i) => (
              <DesktopIcon
                key={p.name}
                label={p.name}
                selected={open === `project-${i}`}
                onOpen={() => setOpen(`project-${i}`)}
              >
                <span className={`desk-doc desk-doc-${i}`}>
                  {i === 0 ? <GraduationCap size={22} /> : i === 1 ? <Heart size={22} /> : <ShoppingBag size={22} />}
                </span>
              </DesktopIcon>
            ))}
            <DesktopIcon label="Experience" selected={open === 'experience'} onOpen={() => setOpen('experience')}>
              <span className="desk-app"><CalendarIcon day={day} /></span>
            </DesktopIcon>
            <DesktopIcon label="Contact" selected={open === 'contact'} onOpen={() => setOpen('contact')}>
              <span className="desk-app"><MailIcon /></span>
            </DesktopIcon>
            <DesktopIcon label="Research CV" selected={open === 'resume'} onOpen={() => setOpen('resume')}>
              <span className="desk-app"><NotesIcon /></span>
            </DesktopIcon>
            <a className="desk-icon" href={GITHUB} target="_blank" rel="noreferrer">
              <span className="desk-icon-face"><span className="desk-link"><Github size={26} /></span></span>
              <span className="desk-icon-label">GitHub</span>
            </a>
            <a className="desk-icon" href={LINKEDIN} target="_blank" rel="noreferrer">
              <span className="desk-icon-face"><span className="desk-app"><LinkedInAppIcon /></span></span>
              <span className="desk-icon-label">LinkedIn</span>
            </a>
          </nav>

          {open && (
            <section
              className={`float-window${open === 'music' ? ' is-music' : ''}`}
              aria-label={windowTitle}
            >
              <div className="float-titlebar">
                <div className="traffic">
                  <button type="button" className="traffic-btn close" aria-label="Close" onClick={() => setOpen(null)} />
                  <i className="traffic-yellow" aria-hidden="true" />
                  <i className="traffic-green" aria-hidden="true" />
                </div>
                <div className="float-title">{open === 'music' ? '' : windowTitle}</div>
                <div className="float-spacer" />
              </div>
              <div className={`float-body${open === 'music' ? ' music-body' : ''}`}>
                {open === 'about' && (
                  <div className="panel">
                    <div className="panel-hero">
                      <img className="panel-photo" src="/profile.png" alt="Tarbi Pyakurel" width={72} height={72} />
                      <div>
                        <h1>Tarbi Pyakurel</h1>
                        <p>CS student · Minor in Economic Data Analysis</p>
                        <span><MapPin size={13} /> Hattiesburg, Mississippi</span>
                      </div>
                    </div>
                    <p>
                      I’m a computer science student at The University of Southern Mississippi, minoring in economic data analysis.
                      I’m interested in research — especially trustworthy AI, multilingual and low-resource NLP, LLM safety and alignment,
                      adversarial machine learning, and reinforcement learning.
                    </p>
                    <div className="edu-row">
                      <GraduationCap size={20} />
                      <div>
                        <strong>B.S. in Computer Science</strong>
                        <span>Minor: Economic Data Analysis · Expected May 2027</span>
                      </div>
                      <em>3.90 GPA</em>
                    </div>
                    <h2>Research focus</h2>
                    <p className="research-blurb">
                      Currently collaborating on multilingual LLM safety (Nepali as a low-resource language) and assisting with
                      MCCPO reinforcement-learning robustness evaluation.
                    </p>
                    <div className="toolkit-mini">
                      {Object.entries(toolkit).map(([title, items]) => (
                        <div key={title}>
                          <h3>{title}</h3>
                          <div className="tags">{items.map((t) => <span key={t}>{t}</span>)}</div>
                        </div>
                      ))}
                    </div>
                    <div className="panel-actions" style={{ marginTop: 16 }}>
                      <a className="primary-button" href="/research-cv.pdf" target="_blank" rel="noreferrer">
                        Research CV <ArrowUpRight size={14} />
                      </a>
                      <a className="ghost-btn" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                  </div>
                )}

                {open === 'projects' && (
                  <div className="panel list-panel">
                    <p className="panel-lead">Ideas → real applications</p>
                    <ul className="icon-list">
                      {projects.map((p, i) => (
                        <li key={p.name}>
                          <button type="button" onClick={() => setOpen(`project-${i}`)}>
                            <span className={`list-thumb list-thumb-${i}`}>
                              {i === 0 ? <GraduationCap size={18} /> : i === 1 ? <Heart size={18} /> : <ShoppingBag size={18} />}
                            </span>
                            <span>
                              <strong>{p.name}</strong>
                              <small>{p.short}</small>
                            </span>
                            <ArrowUpRight size={16} />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {open?.startsWith('project-') && (() => {
                  const i = Number(open.split('-')[1]);
                  const p = projects[i];
                  if (!p) return null;
                  return (
                    <div className="panel">
                      <div className="eyebrow">{p.category}</div>
                      <h1>{p.name}</h1>
                      <p>{p.description}</p>
                      <div className="tags">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
                      <h2>Under the hood</h2>
                      <ul className="detail-list">{p.details.map((d) => <li key={d}>{d}</li>)}</ul>
                      <div className="panel-actions">
                        <button type="button" className="ghost-btn" onClick={() => setOpen('projects')}>← All projects</button>
                        {p.url && (
                          <a className="primary-button" href={p.url} target="_blank" rel="noreferrer">
                            Visit live project <ArrowUpRight size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })()}

                {open === 'experience' && (
                  <div className="panel list-panel">
                    <p className="panel-lead">Research, leadership & teaching</p>
                    <ul className="exp-list">
                      {experience.map((e) => (
                        <li key={e.role}>
                          <span className="exp-icon"><e.icon size={18} /></span>
                          <div>
                            <small>{e.date}</small>
                            <strong>{e.role}</strong>
                            <em>{e.org}</em>
                            <p>{e.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {open === 'messages' && (
                  <div className="panel messages-panel">
                    <div className="messages-header">
                      <div className="messages-avatar">tp</div>
                      <div>
                        <strong>Tarbi Pyakurel</strong>
                        <span>iMessage · Hattiesburg, MS</span>
                      </div>
                    </div>
                    <div className="messages-thread" role="log" aria-label="Conversation">
                      <div className="msg-day">Today</div>
                      <div className="msg incoming">
                        <p>Hey! Saw your portfolio — are you open to new opportunities?</p>
                      </div>
                      <div className="msg outgoing">
                        <p>Always. I love building full-stack products people actually use.</p>
                      </div>
                      <div className="msg incoming">
                        <p>What are you working on lately?</p>
                      </div>
                      <div className="msg outgoing">
                        <p>Continuing Education is live, QuietHelp is in progress, and I’m always learning.</p>
                      </div>
                      <div className="msg outgoing">
                        <p>Want to say hello? 👋</p>
                      </div>
                      <div className="msg incoming">
                        <p>Perfect — I’ll email you.</p>
                      </div>
                    </div>
                    <div className="messages-compose">
                      <div className="messages-actions">
                        <a href="mailto:tarbipyakurel21@gmail.com" className="messages-send">
                          Email Tarbi
                          <ArrowUpRight size={14} />
                        </a>
                        <a href={LINKEDIN} target="_blank" rel="noreferrer" className="messages-send messages-send-li">
                          LinkedIn
                          <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {open === 'contact' && (
                  <div className="panel contact-panel">
                    <div className="contact-badge"><Mail size={28} /></div>
                    <h1>Say hello</h1>
                    <p>Have a project in mind, a question about my work, or just want to connect?</p>
                    <a href="mailto:tarbipyakurel21@gmail.com" className="email-link">
                      tarbipyakurel21@gmail.com <ArrowUpRight size={18} />
                    </a>
                    <div className="contact-links">
                      <a href={GITHUB} target="_blank" rel="noreferrer"><Github size={16} />GitHub</a>
                      <a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={16} />LinkedIn</a>
                      <a href="/research-cv.pdf" target="_blank" rel="noreferrer"><FileText size={16} />Research CV</a>
                    </div>
                    <div className="contact-location"><MapPin size={14} />Hattiesburg, Mississippi</div>
                  </div>
                )}

                {open === 'resume' && (
                  <div className="panel resume-panel">
                    <img className="panel-photo" src="/profile.png" alt="" width={64} height={64} />
                    <h1>Tarbi Pyakurel</h1>
                    <p>Research CV — education, research experience, projects, and skills.</p>
                    <div className="panel-actions">
                      <a className="primary-button" href="/research-cv.pdf" target="_blank" rel="noreferrer">
                        Open research CV <ArrowUpRight size={14} />
                      </a>
                      <a className="ghost-btn" href="/research-cv.pdf" download="Tarbi-Pyakurel-Research-CV.pdf">
                        <Download size={14} /> Download
                      </a>
                      <a className="ghost-btn" href="/resume.pdf" target="_blank" rel="noreferrer">
                        Software resume
                      </a>
                    </div>
                  </div>
                )}

                {open === 'music' && (
                  <div className="music-app">
                    <aside className="music-sidebar" aria-label="Library">
                      <p className="music-side-label">Library</p>
                      <button type="button" className="music-side-item active">
                        <span className="music-side-icon" aria-hidden="true">♪</span>
                        Tarbi&apos;s favorite
                      </button>
                      <button type="button" className="music-side-item" disabled>
                        <span className="music-side-icon" aria-hidden="true">★</span>
                        Favorites
                      </button>
                      <button type="button" className="music-side-item" disabled>
                        <span className="music-side-icon" aria-hidden="true">☰</span>
                        Songs
                      </button>
                    </aside>

                    <div className="music-main">
                      <header className="music-hero">
                        <div className="music-hero-art" aria-hidden="true">
                          <MusicIcon />
                        </div>
                        <div className="music-hero-copy">
                          <em>Playlist</em>
                          <h1>Tarbi&apos;s favorite</h1>
                          <p>
                            <strong>Tarbi Pyakurel</strong>
                            <span aria-hidden="true"> · </span>
                            {MUSIC_LIST.length} songs · Spotify
                          </p>
                        </div>
                      </header>

                      <div className="music-table" role="table" aria-label="My music list">
                        <div className="music-table-head" role="row">
                          <span role="columnheader">#</span>
                          <span role="columnheader">Title</span>
                          <span role="columnheader">Album</span>
                          <span role="columnheader">Time</span>
                        </div>
                        <ul className="music-list" role="rowgroup">
                          {MUSIC_LIST.map((track, i) => {
                            const active = i === trackIndex;
                            return (
                              <li key={track.id} role="presentation">
                                <button
                                  type="button"
                                  role="row"
                                  className={`music-row${active ? ' active' : ''}`}
                                  onClick={() => selectTrack(i)}
                                >
                                  <span className="music-row-num" role="cell">{i + 1}</span>
                                  <span className="music-row-meta" role="cell">
                                    <strong>{track.title}</strong>
                                    <small>{track.artist}</small>
                                  </span>
                                  <span className="music-row-album" role="cell">{track.album}</span>
                                  <span className="music-row-dur" role="cell">{track.durationLabel}</span>
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>

                    <footer className="music-playerbar music-embed-bar">
                      <iframe
                        key={currentTrack.spotifyId}
                        title={`${currentTrack.title} on Spotify`}
                        src={spotifyEmbedUrl(currentTrack.spotifyId)}
                        allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="music-spotify"
                      />
                    </footer>
                  </div>
                )}
              </div>
            </section>
          )}
        </div>

        <nav className="dock" aria-label="Dock">
          {dockApps.map((app) => {
            const running =
              (app.id === 'finder' && open === 'about') ||
              (app.id === 'safari' && (open === 'projects' || open?.startsWith('project-'))) ||
              (app.id === 'mail' && open === 'contact') ||
              (app.id === 'messages' && open === 'messages') ||
              (app.id === 'calendar' && open === 'experience') ||
              (app.id === 'contacts' && open === 'about') ||
              (app.id === 'notes' && open === 'resume') ||
              (app.id === 'music' && open === 'music');
            const className = `dock-item${running ? ' running' : ''}`;
            const inner = (
              <>
                <span className="dock-face"><DockAppIcon kind={app.kind} day={day} /></span>
                <span className="tooltip">{app.label}</span>
              </>
            );
            if ('href' in app && app.href) {
              return (
                <a key={app.id} href={app.href} aria-label={app.label} className={className}>
                  {inner}
                </a>
              );
            }
            return (
              <button
                key={app.id}
                type="button"
                aria-label={app.label}
                className={className}
                onClick={() => {
                  if ('action' in app && app.action) app.action();
                }}
              >
                {inner}
              </button>
            );
          })}
          <div className="dock-divider" />
          <a href="/research-cv.pdf" target="_blank" rel="noreferrer" aria-label="Downloads" className="dock-item">
            <span className="dock-face"><DownloadsIcon /></span>
            <span className="tooltip">Research CV</span>
          </a>
          <button type="button" aria-label="Trash" className="dock-item" onClick={() => setOpen(null)}>
            <span className="dock-face"><TrashIcon /></span>
            <span className="tooltip">Trash</span>
          </button>
        </nav>
      </div>
    </>
  );
}
