import { useEffect, useState } from 'react'
import {
  Activity,
  Briefcase,
  Cloud,
  Database,
  Download,
  Mail,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {
  SiApacheairflow,
  SiApachekafka,
  SiApachespark,
  SiDbt,
  SiDocker,
  SiGooglebigquery,
  SiMysql,
  SiPython,
  SiSnowflake,
  SiTerraform,
} from 'react-icons/si'

const specializations = [
  {
    icon: Database,
    title: 'Data Platform Engineering',
    description: 'Reliable pipelines with observability by design.',
  },
  {
    icon: Cloud,
    title: 'Cloud Data Warehousing',
    description: 'Fast analytics models with cost-aware transformations.',
  },
  {
    icon: Workflow,
    title: 'DataOps and Automation',
    description: 'CI/CD, orchestration, and validation that scale.',
  },
]

const projects = [
  {
    icon: Briefcase,
    name: 'Customer 360 Pipeline',
    summary: 'Unified CRM and billing sources into one trusted mart.',
    stack: ['Airflow', 'dbt', 'BigQuery'],
    impact: '70% faster reporting prep',
  },
  {
    icon: Activity,
    name: 'Real-Time Metrics Lakehouse',
    summary: 'Near real-time clickstream metrics for experiments.',
    stack: ['Kafka', 'Spark', 'Delta Lake'],
    impact: 'Experiment readouts in < 5 minutes',
  },
  {
    icon: ShieldCheck,
    name: 'Data Quality Control Tower',
    summary: 'Data quality monitoring with alerting and triage.',
    stack: ['Great Expectations', 'Monte Carlo', 'Slack'],
    impact: '45% fewer critical data incidents',
  },
]

const education = [
  {
    degree: 'M.S. in Data Science',
    institution: 'University of Technology',
    period: '2022 - 2024',
    focus: 'Distributed systems, advanced analytics, and machine learning engineering.',
  },
  {
    degree: 'B.Tech in Computer Science',
    institution: 'National Institute of Engineering',
    period: '2018 - 2022',
    focus: 'Algorithms, databases, software engineering, and cloud fundamentals.',
  },
]

const toolbelt = [
  { name: 'Python', icon: SiPython },
  { name: 'SQL', icon: SiMysql },
  { name: 'dbt', icon: SiDbt },
  { name: 'Apache Airflow', icon: SiApacheairflow },
  { name: 'Spark', icon: SiApachespark },
  { name: 'Kafka', icon: SiApachekafka },
  { name: 'BigQuery', icon: SiGooglebigquery },
  { name: 'Snowflake', icon: SiSnowflake },
  { name: 'Docker', icon: SiDocker },
  { name: 'Terraform', icon: SiTerraform },
]

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yourusername',
    icon: FaLinkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/yourusername',
    icon: FaGithub,
  },
]

const navItems = [
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#toolbelt', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
  { href: '#social', label: 'Social' },
]

const themePreferenceKey = 'portfolio-theme'

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  if (document.documentElement.classList.contains('dark')) {
    return 'dark'
  }

  const savedTheme = window.localStorage.getItem(themePreferenceKey)
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return 'dark'
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    window.localStorage.setItem(themePreferenceKey, theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'dark' ? 'light' : 'dark',
    )
  }

  return (
    <div className="mx-auto grid w-full max-w-6xl gap-5 px-4 py-8 md:px-6 md:py-10">
      <nav className="sticky top-3 z-30 rounded-2xl border border-slate-200/80 bg-white/90 px-3 py-2 backdrop-blur-md dark:border-slate-400/40 dark:bg-slate-900">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <a
            href="#top"
            className="font-mono text-xs uppercase tracking-[0.16em] text-slate-700 dark:text-slate-300"
          >
            Data Engineer
          </a>

          <div className="flex max-w-full flex-wrap items-center gap-2 text-sm">
            {navItems.map((item) => {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white"
                >
                  <span>{item.label}</span>
                </a>
              )
            })}
            <a
              href="/resume.pdf"
              download
              className="rounded-full border border-slate-300 bg-white px-3 py-1.5 font-medium text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 dark:border-slate-400/40 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
            >
              <span>Resume</span>
            </a>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200/90 bg-white px-2 py-1 dark:border-slate-300/40 dark:bg-slate-800"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            role="switch"
            aria-checked={theme === 'dark'}
          >
            <span className="text-xs font-mono uppercase tracking-[0.12em] text-slate-600 dark:text-slate-300">
              Theme
            </span>
            <span
              className={`relative inline-flex h-7 w-14 items-center rounded-full border p-1 transition-colors duration-300 ${
                theme === 'dark'
                  ? 'border-slate-500 bg-slate-700'
                  : 'border-slate-300 bg-slate-100'
              }`}
            >
              <span
                className="block h-5 w-5 rounded-full bg-white shadow-sm ring-1 ring-black/5 transition-transform duration-300 dark:bg-slate-100"
                style={{ transform: `translateX(${theme === 'dark' ? '1.75rem' : '0'})` }}
              />
            </span>
          </button>
        </div>
      </nav>

      <header className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-100 via-amber-50 to-sky-100 p-6 shadow-xl shadow-slate-500/20 backdrop-blur-sm dark:border-slate-400/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 dark:shadow-black/40 md:p-10">
        <p id="top" className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-slate-700 dark:text-slate-300">
          Data Engineer Portfolio
        </p>
        <h1 className="font-classic max-w-[20ch] text-3xl font-extrabold leading-tight text-slate-900 dark:text-slate-50 md:text-5xl md:leading-[1.05]">
          I build robust data systems that turn noisy sources into trusted
          decisions.
        </h1>
        <p className="mt-5 max-w-3xl text-slate-700 dark:text-slate-200">
          Portfolio website template focused on projects, specialization depth,
          and measurable business impact. Replace this copy with your profile
          summary and project outcomes.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-500 to-blue-700 px-5 py-3 font-mono text-sm text-white shadow-lg shadow-slate-600/30 transition hover:-translate-y-0.5 hover:from-slate-400 hover:to-blue-600"
            href="#projects"
          >
            <Briefcase size={15} />
            View Projects
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 font-mono text-sm text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 dark:border-slate-300/35 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
            href="/resume.pdf"
            download
          >
            <Download size={15} />
            Download Resume
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 font-mono text-sm text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 dark:border-slate-300/35 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
            href="#contact"
          >
            <Mail size={15} />
            Contact
          </a>
        </div>
      </header>

      <section
        className="overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/70 p-6 shadow-sm shadow-slate-200/50 backdrop-blur-sm dark:border-slate-400/40 dark:from-slate-900 dark:to-slate-900 dark:shadow-none md:p-8"
        id="specializations"
      >
        <div className="mb-5">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate-600 dark:text-slate-300">
            Core Strengths
          </p>
          <h2 className="font-classic mt-2 text-2xl font-bold text-slate-900 dark:text-slate-50">
            Specializations
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {specializations.map((item) => (
            <article
              className="overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-b from-white to-slate-50/70 p-5 shadow-sm shadow-slate-100/80 dark:border-slate-400/40 dark:from-slate-800 dark:to-slate-800 dark:shadow-none"
              key={item.title}
            >
              <item.icon
                size={18}
                className="mb-3 text-slate-500 dark:text-slate-300"
                aria-hidden="true"
              />
              <div className="flex items-center gap-2">
                <h3 className="font-classic text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 text-slate-700 dark:text-slate-200">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/70 p-6 shadow-sm shadow-slate-200/50 backdrop-blur-sm dark:border-slate-400/40 dark:from-slate-900 dark:to-slate-900 dark:shadow-none md:p-8"
        id="projects"
      >
        <div className="mb-5">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate-600 dark:text-slate-300">
            Selected Work
          </p>
          <h2 className="font-classic mt-2 text-2xl font-bold text-slate-900 dark:text-slate-50">
            Individual Projects
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              className="overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-b from-white to-slate-50/70 p-5 shadow-sm shadow-slate-100/80 dark:border-slate-400/40 dark:from-slate-800 dark:to-slate-800 dark:shadow-none"
              key={project.name}
            >
              <project.icon
                size={18}
                className="mb-3 text-slate-500 dark:text-slate-300"
                aria-hidden="true"
              />
              <div className="flex items-center gap-2">
                <h3 className="font-classic text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {project.name}
                </h3>
              </div>
              <p className="mt-3 text-slate-700 dark:text-slate-200">
                {project.summary}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700 dark:border-slate-400/40 dark:bg-slate-900 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-3 inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-sm text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200">
                <ShieldCheck size={14} />
                {project.impact}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/70 p-6 shadow-sm shadow-slate-200/50 backdrop-blur-sm dark:border-slate-400/40 dark:from-slate-900 dark:to-slate-900 dark:shadow-none md:p-8"
        id="education"
      >
        <div className="mb-5">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate-600 dark:text-slate-300">
            Academic Background
          </p>
          <h2 className="font-classic mt-2 text-2xl font-bold text-slate-900 dark:text-slate-50">
            Education
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <article
              className="overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-b from-white to-slate-50/70 p-5 shadow-sm shadow-slate-100/80 dark:border-slate-400/40 dark:from-slate-800 dark:to-slate-800 dark:shadow-none"
              key={item.degree}
            >
              <h3 className="font-classic text-lg font-semibold text-slate-900 dark:text-slate-100">
                {item.degree}
              </h3>
              <p className="mt-2 font-semibold text-slate-900 dark:text-slate-100">
                {item.institution}
              </p>
              <p className="mt-1 font-mono text-xs text-slate-600 dark:text-slate-300/85">
                {item.period}
              </p>
              <p className="mt-3 text-slate-700 dark:text-slate-200">{item.focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/70 p-6 shadow-sm shadow-slate-200/50 backdrop-blur-sm dark:border-slate-400/40 dark:from-slate-900 dark:to-slate-900 dark:shadow-none md:p-8"
        id="toolbelt"
      >
        <div className="mb-5">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate-600 dark:text-slate-300">
            Tech Stack
          </p>
          <h2 className="font-classic mt-2 text-2xl font-bold text-slate-900 dark:text-slate-50">
            Tools I Work With
          </h2>
        </div>
        <ul className="flex flex-wrap gap-2">
          {toolbelt.map((item) => {
            const TechIcon = item.icon
            return (
            <li
              className="rounded-full border border-slate-100 bg-white px-4 py-2 font-mono text-sm text-slate-800 shadow-sm shadow-slate-100/80 dark:border-slate-400/40 dark:bg-slate-800 dark:text-slate-100 dark:shadow-none"
              key={item.name}
            >
              <span className="inline-flex items-center gap-2">
                <TechIcon size={14} />
                {item.name}
              </span>
            </li>
            )
          })}
        </ul>
      </section>

      <section
        className="grid justify-items-center gap-3 rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/70 p-6 text-center shadow-sm shadow-slate-200/50 backdrop-blur-sm dark:border-slate-400/40 dark:from-slate-900 dark:to-slate-900 dark:shadow-none md:p-8"
        id="contact"
      >
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate-600 dark:text-slate-300">
          Let&apos;s Build Reliable Data Together
        </p>
        <h2 className="font-classic max-w-xl text-2xl font-bold text-slate-900 dark:text-slate-50">
          Open to Full-Time and Consulting Data Engineering Roles
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-500 to-blue-700 px-5 py-3 font-mono text-sm text-white shadow-lg shadow-slate-600/30 transition hover:-translate-y-0.5 hover:from-slate-400 hover:to-blue-600"
            href="mailto:yourname@email.com"
          >
            <Mail size={15} />
            yourname@email.com
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 font-mono text-sm text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 dark:border-slate-300/35 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
            href="/resume.pdf"
            download
          >
            <Download size={15} />
            Download Resume
          </a>
        </div>
      </section>

      <section
        className="rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50/70 p-6 text-center shadow-sm shadow-slate-200/50 backdrop-blur-sm dark:border-slate-400/40 dark:from-slate-900 dark:to-slate-900 dark:shadow-none md:p-8"
        id="social"
      >
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate-600 dark:text-slate-300">
          Social Media
        </p>
        <h2 className="font-classic mt-2 text-2xl font-bold text-slate-900 dark:text-slate-50">
          Find Me Online
        </h2>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 font-mono text-sm text-slate-800 shadow-sm shadow-slate-100/70 transition hover:-translate-y-0.5 hover:bg-slate-50 dark:border-slate-300/40 dark:bg-slate-800 dark:text-slate-100 dark:shadow-none dark:hover:bg-slate-700"
            >
              <item.icon size={15} />
              {item.name}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App


