import { useEffect, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Briefcase,
  Cloud,
  Code2,
  Download,
  GraduationCap,
  Layers,
  Mail,
  Moon,
  Sun,
  Trophy,
  Wrench,
} from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { VscAzure } from 'react-icons/vsc'
import {
  SiApachespark,
  SiC,
  SiDatabricks,
  SiGit,
  SiOpenjdk,
  SiPandas,
  SiPython,
  SiSnowflake,
} from 'react-icons/si'

function PowerBiIcon({ size = 44, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <rect x="3" y="12" width="4.5" height="9" rx="1" />
      <rect x="9.75" y="7" width="4.5" height="14" rx="1" />
      <rect x="16.5" y="2" width="4.5" height="19" rx="1" />
    </svg>
  )
}

const techStrip = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Azure Data Factory', icon: VscAzure, color: '#0078D4' },
  { name: 'Databricks', icon: SiDatabricks, color: '#FF3621' },
  { name: 'Azure Synapse', icon: VscAzure, color: '#0078D4' },
  { name: 'ADLS Gen2', icon: VscAzure, color: '#0078D4' },
  { name: 'Snowflake', icon: SiSnowflake, color: '#29B5E8' },
  { name: 'PySpark', icon: SiApachespark, color: '#E25A1C' },
  { name: 'Pandas', icon: SiPandas, color: '#E70488' },
  { name: 'Power BI', icon: PowerBiIcon, color: '#F2C811' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Java', icon: SiOpenjdk, color: '#ED8B00' },
  { name: 'C', icon: SiC, color: '#8FA3C7' },
]

const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

const stats = [
  { value: '3', label: 'Projects' },
  { value: '3.63', label: 'GPA / 4.00' },
  { value: '7 mo', label: 'Industry internship' },
]

const projects = [
  {
    name: 'Weather & Air Quality Lakehouse',
    summary:
      'Daily Bronze-Silver-Gold lakehouse joining weather and air quality data for 3 cities, with metadata-driven pipelines.',
    highlight: 'Watermark-based incremental loads: no lost or duplicated data on failed runs',
    stack: ['Data Factory', 'Databricks', 'ADLS Gen2', 'Key Vault'],
    href: 'https://github.com/BhasithaSan/azure-air-quality-lakehouse',
  },
  {
    name: 'Wikipedia Pageviews Lakehouse',
    summary:
      'Hourly pageview files modeled into a star schema in Synapse and served to Power BI through serverless SQL views.',
    highlight: 'Safe re-runs, a backfill pipeline and a quarantine for bad rows',
    stack: ['Synapse', 'PySpark', 'SQL', 'Power BI'],
    href: 'https://github.com/BhasithaSan/wikipedia-pageviews-lakehouse',
  },
  {
    name: 'Airbnb Analytics Pipeline',
    summary:
      'End-to-end Snowflake pipeline over Inside Airbnb data, with a star-schema Gold layer and a Power BI dashboard.',
    highlight: 'Dashboard KPIs by income, month, property type, superhost and rating',
    stack: ['Snowflake', 'SQL', 'Power BI'],
    href: 'https://github.com/BhasithaSan/air_bnb',
  },
]

const skillGroups = [
  { icon: Code2, title: 'Languages', items: ['Python', 'SQL', 'Java', 'C'] },
  {
    icon: Cloud,
    title: 'Data and Cloud',
    items: ['Azure Data Factory', 'Databricks', 'Synapse', 'ADLS Gen2', 'Snowflake', 'Delta Lake'],
  },
  {
    icon: Layers,
    title: 'Processing',
    items: ['PySpark', 'Pandas', 'ETL / ELT', 'Incremental loading'],
  },
  { icon: Wrench, title: 'Tools', items: ['Power BI', 'Git', 'GitHub'] },
]

const journey = [
  {
    icon: Briefcase,
    title: 'Software Engineering Intern',
    place: 'GlamerMedia',
    period: 'Aug 2025 - Mar 2026',
    detail: 'Full SDLC work with React, React Native, NestJS and PostgreSQL in an Agile team.',
  },
  {
    icon: GraduationCap,
    title: 'BSc (Hons) Computer Science',
    place: 'University of Kelaniya',
    period: 'Sep 2022 - 2026',
    detail: 'Specializing in Data Science. Current GPA 3.63 / 4.00.',
  },
]

const recognition = [
  {
    icon: Trophy,
    title: 'Achievements',
    items: [
      '3rd place, IEEE Innovation Nation Sri Lanka 2024',
      'Finalist, HackVenture 1.0 and GENESIZ\'24',
      'Research abstract: AI-Based Grading Assistant for written exams',
    ],
  },
  {
    icon: Award,
    title: 'Certifications',
    items: [
      'Snowflake: Data Warehousing, Data Lake, Data Engineering',
      'Coursera: Machine Learning and Deep Learning specialization courses',
    ],
  },
]

const scatter = [
  { x: 4, y: 12, shape: 'rounded-full' },
  { x: 22, y: 62, shape: 'rotate-45' },
  { x: 38, y: 18, shape: 'rounded-sm' },
  { x: 52, y: 72, shape: 'rounded-full' },
  { x: 66, y: 28, shape: 'rotate-12 rounded-sm' },
  { x: 84, y: 66, shape: 'rounded-full' },
  { x: 14, y: 36, shape: 'rounded-sm' },
  { x: 74, y: 8, shape: 'rotate-45' },
  { x: 92, y: 34, shape: 'rounded-full' },
  { x: 46, y: 44, shape: 'rotate-12 rounded-sm' },
]

const themeKey = 'portfolio-theme'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark'
  if (document.documentElement.classList.contains('dark')) return 'dark'
  try {
    return window.localStorage.getItem(themeKey) === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

const buttonPrimary =
  'inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:shadow-indigo-500/50'
const buttonGhost =
  'glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 dark:text-slate-100'
const eyebrow =
  'font-mono text-xs uppercase tracking-[0.18em] text-indigo-600 dark:text-sky-400'
const heading =
  'font-classic mt-2 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl'

function useScrollEffects() {
  const [active, setActive] = useState('')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el))

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) sectionObserver.observe(el)
    })

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      revealObserver.disconnect()
      sectionObserver.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return { active, progress }
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const { active, progress } = useScrollEffects()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      window.localStorage.setItem(themeKey, theme)
    } catch {
      /* storage unavailable */
    }
  }, [theme])

  return (
    <>
      <div className="bg-orbs" aria-hidden="true">
        <div className="bg-grid" />
      </div>

      <div
        className="fixed left-0 top-0 z-50 h-0.5 bg-gradient-to-r from-sky-500 to-purple-500"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-5xl px-5 pb-12">
        <nav className="glass sticky top-4 z-40 mt-4 flex items-center justify-between rounded-full px-3 py-2 shadow-lg shadow-slate-900/5 md:px-4">
          <a
            href="#top"
            className="flex items-center gap-2 pl-1 text-sm font-bold text-slate-900 dark:text-white"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 text-xs text-white">
              BS
            </span>
            <span className="hidden md:inline">Bhasitha Sandil</span>
          </a>

          <div className="flex items-center gap-0.5 text-xs sm:gap-1 sm:text-sm">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-full px-2 py-1.5 transition sm:px-3 ${
                  active === item.id
                    ? 'bg-indigo-500/15 font-medium text-indigo-700 dark:text-sky-300'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="ml-1 rounded-full p-2 text-slate-600 transition hover:bg-slate-200/60 dark:text-slate-300 dark:hover:bg-slate-700/60"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </nav>

        <header
          id="top"
          className="grid items-center gap-12 py-16 md:grid-cols-[1.15fr_1fr] md:py-24"
        >
          <div>
            <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-slate-700 dark:text-slate-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to data engineering roles
            </span>

            <h1 className="font-classic mt-6 text-4xl font-extrabold leading-[1.05] text-slate-900 dark:text-white md:text-6xl">
              Hi, I&apos;m <span className="gradient-text">Bhasitha</span>.
              <br />I turn raw data into reliable pipelines.
            </h1>

            <p className="mt-6 max-w-lg text-lg text-slate-600 dark:text-slate-300">
              Final-year Computer Science student specializing in Data Science.
              I build automated lakehouses and analytics with Azure, Databricks
              and Snowflake.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className={buttonPrimary}>
                View my work
                <ArrowRight size={16} />
              </a>
              <a href="/resume.pdf" download="Bhasitha_Sandil_Resume.pdf" className={buttonGhost}>
                <Download size={15} />
                Resume
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 text-slate-500 dark:text-slate-400">
              <a
                href="https://github.com/BhasithaSan"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="transition hover:text-slate-900 dark:hover:text-white"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/bhasitha-sandil"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="transition hover:text-slate-900 dark:hover:text-white"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:bhasithag@gmail.com"
                aria-label="Email"
                className="transition hover:text-slate-900 dark:hover:text-white"
              >
                <Mail size={20} />
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-slate-500 dark:text-slate-400">
              {stats.map((stat) => (
                <li key={stat.label}>
                  <span className="font-bold text-slate-900 dark:text-white">{stat.value}</span>{' '}
                  {stat.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="float glass rounded-3xl p-8 shadow-2xl shadow-indigo-500/10" aria-hidden="true">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-rose-500 dark:text-rose-300">
              Raw data
            </p>
            <div className="relative mt-3 h-28">
              {scatter.map((dot, index) => (
                <span
                  key={index}
                  style={{
                    left: `${dot.x}%`,
                    top: `${dot.y}%`,
                    '--delay': `${index * 0.3}s`,
                  }}
                  className={`scatter absolute h-3 w-3 bg-rose-400/80 ${dot.shape}`}
                />
              ))}
            </div>

            <div className="my-5 flex flex-col items-center gap-2">
              <div className="flow-line h-10 w-0.5 bg-gradient-to-b from-transparent via-indigo-500 to-transparent" />
              <span className="rounded-full bg-indigo-500/10 px-4 py-1.5 font-mono text-xs text-indigo-600 dark:text-sky-300">
                clean + transform
              </span>
              <div className="flow-line h-10 w-0.5 bg-gradient-to-b from-transparent via-indigo-500 to-transparent" />
            </div>

            <p className="font-mono text-xs uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-300">
              Business ready
            </p>
            <div className="mt-3 flex h-28 items-end gap-3">
              {[38, 55, 48, 72, 64, 90].map((height, index) => (
                <span
                  key={index}
                  style={{ height: `${height}%`, '--delay': `${index * 0.15}s` }}
                  className="bar flex-1 rounded-t-lg bg-gradient-to-t from-sky-500 to-indigo-500"
                />
              ))}
            </div>
          </div>
        </header>

        <div className="reveal py-6">
          <p className="mb-5 text-center font-mono text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Technologies I work with
          </p>
          <div className="marquee" aria-label="Technologies I work with">
            <ul className="marquee-track">
              {[...techStrip, ...techStrip].map((tech, index) => (
                <li
                  key={`${tech.name}-${index}`}
                  className="marquee-item"
                  aria-hidden={index >= techStrip.length}
                  style={{ '--brand': tech.color }}
                >
                  <tech.icon size={44} color={tech.color} />
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section id="work" className="py-14">
          <div className="reveal">
            <p className={eyebrow}>Selected work</p>
            <h2 className={heading}>Projects I&apos;ve built</h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {projects.map((project, index) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                style={{ '--delay': `${index * 100}ms` }}
                className="reveal card-hover glass group flex flex-col rounded-3xl p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-indigo-600 dark:text-sky-400">
                    0{index + 1}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-500"
                  />
                </div>
                <h3 className="font-classic mt-4 text-lg font-semibold leading-snug text-slate-900 dark:text-white">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {project.summary}
                </p>
                <p className="mt-4 rounded-xl bg-emerald-500/10 px-3 py-2 text-xs text-emerald-700 dark:text-emerald-300">
                  {project.highlight}
                </p>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-slate-900/5 px-2.5 py-1 font-mono text-[11px] text-slate-600 dark:bg-white/10 dark:text-slate-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </section>

        <section id="skills" className="py-14">
          <div className="reveal">
            <p className={eyebrow}>Tech stack</p>
            <h2 className={heading}>Tools I work with</h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group, index) => (
              <div
                key={group.title}
                style={{ '--delay': `${index * 80}ms` }}
                className="reveal glass rounded-3xl p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-sky-300">
                    <group.icon size={18} />
                  </span>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {group.title}
                  </h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-slate-300/60 px-3 py-1 text-sm text-slate-700 transition hover:border-indigo-400 hover:text-indigo-700 dark:border-slate-600/60 dark:text-slate-200 dark:hover:text-sky-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="journey" className="py-14">
          <div className="reveal">
            <p className={eyebrow}>Journey</p>
            <h2 className={heading}>Experience and education</h2>
          </div>

          <ol className="relative mt-8 ml-4 border-l border-slate-300 dark:border-slate-700">
            {journey.map((item) => (
              <li key={item.title} className="reveal mb-8 ml-8 last:mb-0">
                <span className="absolute -left-[18px] grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/30">
                  <item.icon size={16} />
                </span>
                <div className="glass rounded-2xl p-5">
                  <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
                    {item.period}
                  </p>
                  <h3 className="mt-1 font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-indigo-600 dark:text-sky-300">{item.place}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {recognition.map((group, index) => (
              <div
                key={group.title}
                style={{ '--delay': `${index * 100}ms` }}
                className="reveal glass rounded-3xl p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-300">
                    <group.icon size={18} />
                  </span>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {group.title}
                  </h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {group.items.map((entry) => (
                    <li key={entry} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                      {entry}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-14">
          <div className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500 via-indigo-600 to-purple-600 p-8 text-center text-white shadow-2xl shadow-indigo-500/30 md:p-14">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/80">
              Get in touch
            </p>
            <h2 className="font-classic mx-auto mt-3 max-w-xl text-3xl font-bold md:text-4xl">
              Let&apos;s build something reliable together.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-white/85">
              I&apos;m looking for data engineering opportunities. Drop me a
              message and I&apos;ll get back to you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:bhasithag@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-700 transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Mail size={16} />
                bhasithag@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/bhasitha-sandil"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <FaLinkedin size={15} />
                LinkedIn
              </a>
              <a
                href="https://github.com/BhasithaSan"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <FaGithub size={15} />
                GitHub
              </a>
            </div>
          </div>

          <p className="mt-8 text-center font-mono text-xs text-slate-500 dark:text-slate-400">
            Bhasitha Sandil / Sri Lanka
          </p>
        </section>
      </div>
    </>
  )
}

export default App
