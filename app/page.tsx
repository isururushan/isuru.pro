"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  type?: string;
  points: string[];
};

type Education = {
  program: string;
  institute: string;
  period: string;
  notes?: string[];
};

type Project = {
  title: string;
  description: string;
  tech: string[];
  links?: { label: string; href: string }[];
};

type SkillGroup = {
  title: string;
  items: string[];
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Home() {
  const [dark, setDark] = useState(false);
  const [projectQuery, setProjectQuery] = useState("");

  // ✅ Update these links if needed
  const links = {
    github: "https://github.com/isururushan",
    linkedin: "https://www.linkedin.com/in/isuru-rushan-069582214/",
    email: "isururushan63@gmail.com",
    phone: "+94 78 146 8942",
    location: "Kalutara, Sri Lanka",
    address: "No.167 Dediyawala, Kalutara North",
    resumePath: "doc/Isuru.pdf",
  };

  // Persist theme
  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (saved === "dark") setDark(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const experiences: Experience[] = useMemo(
    () => [
      {
        role: "Software Engineer | Full Stack",
        company: "Beyond IT Solutions (Japan)",
        period: "Sep 2023 – Present",
        location: "Japan · Remote",
        type: "Full-time",
        points: [
          "Developed efficient backend systems with Laravel, delivering robust and scalable API implementations.",
          "Streamlined deployment processes using CI/CD pipelines to enhance delivery efficiency.",
          "Conducted thorough testing and debugging to maintain high code quality and data integrity.",
          "Collaborated with frontend teams to integrate backend functionality for responsive applications.",
          "Managed and optimized MySQL databases to ensure performance and reliability.",
        ],
      },
      {
        role: "Associate Software Engineer",
        company: "Stephen Innovations (Pvt) Ltd",
        period: "Nov 2021 – Apr 2023",
        location: "Negombo, Sri Lanka",
        type: "Full-time",
        points: [
          "Designed and developed functional databases and applications to support dynamic websites.",
          "Implemented RESTful APIs to ensure seamless communication between frontend and backend components.",
          "Developed server-side logic and APIs using Express.js for scalable backend operations.",
          "Leveraged technologies like PHP, SQL, and Bootstrap for efficient application development.",
          "Improved code quality by implementing unit tests and automation practices.",
        ],
      },
      {
        role: "Information Technology Assistant (Internship)",
        company: "Ministry of Fisheries & Aquatic Resources Development",
        period: "Oct 2020 – Apr 2021",
        location: "Colombo, Sri Lanka · On-site",
        type: "Internship",
        points: [
          "Supported day-to-day IT operations and basic system administration tasks.",
          "Assisted users with troubleshooting and technical support requests.",
          "Helped maintain documentation and improved internal process efficiency.",
        ],
      },
    ],
    []
  );

  const education: Education[] = useMemo(
    () => [
      {
        program: "BIT (Hons) Information Technology — Reading",
        institute: "Eurasia Campus (Contributed with Nile University of Science and Technology)",
        period: "2022",
      },
      {
        program: "Higher Diploma in Information Technology",
        institute: "Sri Lanka Institute of Advanced Technological Education (SLIATE)",
        period: "May 2018 – May 2020",
        notes: ["Tangalle"],
      },
    ],
    []
  );

  const skills: SkillGroup[] = useMemo(
    () => [
      {
        title: "Programming & Frameworks",
        items: ["Laravel", "PHP", "Java", "JavaScript", "Vue.js", "jQuery"],
      },
      {
        title: "Frontend & UI",
        items: ["HTML", "CSS", "Tailwind CSS", "Bootstrap"],
      },
      {
        title: "Databases",
        items: ["MySQL", "Database Design", "Query Optimization"],
      },
      {
        title: "Tools & Platforms",
        items: ["AWS", "CI/CD Pipelines", "GitLab", "GitHub", "Jira", "Confluence"],
      },
      {
        title: "Methodologies",
        items: ["Scrum", "Agile Development", "Team Collaboration"],
      },
      {
        title: "Other",
        items: ["Canva", "MS Office Suite", "Documentation"],
      },
    ],
    []
  );

  const achievements = useMemo(
    () => [
      {
        title: "Software Architecture Improvement",
        description:
          "Designed and implemented scalable software architectures to improve maintainability and performance.",
      },
      {
        title: "API Optimization",
        description:
          "Optimized existing APIs for better performance and reliability, improving integration efficiency.",
      },
      {
        title: "Team Collaboration",
        description:
          "Worked closely with cross-functional teams to analyze requirements and deliver high-quality solutions.",
      },
    ],
    []
  );

  const projects: Project[] = useMemo(
    () => [
      {
        title: "Laravel API Platform",
        description:
          "Built scalable Laravel APIs with authentication, validation, and clean modular architecture.",
        tech: ["Laravel", "PHP", "MySQL", "REST"],
        links: [{ label: "GitHub", href: links.github }],
      },
      {
        title: "Express.js REST APIs",
        description:
          "Implemented REST services with token-based auth, structured routing, and test-ready code practices.",
        tech: ["Node.js", "Express.js", "JWT", "REST"],
        links: [{ label: "GitHub", href: links.github }],
      },
      {
        title: "CI/CD Delivery Improvements",
        description:
          "Streamlined deployments using CI/CD pipelines to reduce release friction and improve reliability.",
        tech: ["CI/CD", "GitLab", "Automation"],
      },
      {
        title: "MySQL Reporting & Performance",
        description:
          "Designed schemas and reports and improved data access patterns for better system performance.",
        tech: ["MySQL", "Schema Design", "Reporting"],
      },
    ],
    [links.github]
  );

  const filteredProjects = useMemo(() => {
    const q = projectQuery.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter((p) =>
      `${p.title} ${p.description} ${p.tech.join(" ")}`.toLowerCase().includes(q)
    );
  }, [projectQuery, projects]);

  return (
    <div className={dark ? "dark" : ""}>
      <main className="min-h-screen text-gray-900 dark:text-gray-100 transition-colors bg-gradient-to-b from-slate-50 to-slate-100 dark:from-gray-950 dark:to-black">
        {/* Header */}
        <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-black/40 border-b border-black/5 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
            <a href="#top" className="font-semibold tracking-tight">
              Isuru Rushan Aberathne
              <span className="ml-2 text-xs px-2 py-1 rounded-full bg-blue-600/10 text-blue-700 dark:text-blue-300 dark:bg-blue-500/10">
                Full Stack Engineer
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a className="hover:opacity-70" href="#about">About</a>
              <a className="hover:opacity-70" href="#experience">Experience</a>
              <a className="hover:opacity-70" href="#skills">Skills</a>
              <a className="hover:opacity-70" href="#projects">Projects</a>
              <a className="hover:opacity-70" href="#education">Education</a>
              <a className="hover:opacity-70" href="#contact">Contact</a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={links.resumePath}
                download
                className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold shadow-sm hover:opacity-95"
              >
                Resume
              </a>

              <button
                onClick={() => setDark((v) => !v)}
                className="px-4 py-2 rounded-xl bg-white dark:bg-gray-900 shadow-sm border border-black/10 dark:border-white/10 hover:opacity-95"
                aria-label="Toggle theme"
              >
                {dark ? "☀ Light" : "🌙 Dark"}
              </button>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section id="top" className="max-w-7xl mx-auto px-6 pt-14 pb-12 md:pt-20 md:pb-16">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-xl">
              <motion.p variants={fadeUp} className="text-sm opacity-80">
                Software Engineer • Full Stack
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="mt-3 text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]"
              >
                Isuru Rushan Aberathne
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed opacity-90">
                Self-motivated Full Stack Developer with 3+ years of experience in designing and
                implementing scalable software solutions. Strong focus on backend engineering,
                API development, performance, and maintainable architecture.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
                <a
                  href={links.resumePath}
                  download
                  className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow-sm hover:opacity-95"
                >
                  Download Resume
                </a>

                <a
                  href={links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-2xl border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5"
                >
                  GitHub
                </a>

                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-2xl border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5"
                >
                  LinkedIn
                </a>

                <a
                  href="#contact"
                  className="px-6 py-3 rounded-2xl border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5"
                >
                  Contact
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-6 grid sm:grid-cols-3 gap-3">
                <Stat label="Location" value={links.location} />
                <Stat label="Focus" value="Backend • APIs" />
                <Stat label="Stack" value="Laravel • Node • MySQL" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-2xl" />
                <Image
                  src="images/profile.jpg"
                  alt="Isuru Rushan Aberathne"
                  width={420}
                  height={520}
                  priority
                  className="relative rounded-[2rem] shadow-2xl object-cover border border-black/10 dark:border-white/10"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="max-w-7xl mx-auto px-6 pb-16">
          <div className="rounded-3xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 p-8 md:p-10">
            <div className="grid md:grid-cols-3 gap-10 items-start">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-bold">About Me</h2>
                <p className="mt-2 text-sm opacity-80">
                  Reliable backend systems, clean APIs, and practical delivery.
                </p>
              </div>

              <div className="md:col-span-2 text-base leading-relaxed opacity-90 space-y-4">
                <p>
                  I build scalable backend solutions and APIs with a strong focus on performance,
                  security basics, and maintainability. I enjoy designing clean architectures that
                  are easy to extend and support in real projects.
                </p>
                <p>
                  I work comfortably with cross-functional teams, contribute to delivery improvements
                  through CI/CD, and help ensure quality through testing and debugging.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <Pill>Laravel</Pill>
                  <Pill>REST APIs</Pill>
                  <Pill>Express.js</Pill>
                  <Pill>MySQL</Pill>
                  <Pill>CI/CD</Pill>
                  <Pill>AWS</Pill>
                  <Pill>Agile</Pill>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-16 bg-white dark:bg-gray-950 border-y border-black/5 dark:border-white/10">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-4xl font-bold text-center">
                Experience
              </motion.h2>
              <motion.p variants={fadeUp} className="text-center mt-3 opacity-80">
                Roles and impact across backend, APIs, and delivery.
              </motion.p>

              <motion.div variants={stagger} className="mt-12 space-y-8">
                {experiences.map((e) => (
                  <motion.div key={`${e.company}-${e.role}`} variants={fadeUp}>
                    <ExperienceCard {...e} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-4xl font-bold text-center">
                Skills
              </motion.h2>

              <motion.div variants={stagger} className="mt-12 grid md:grid-cols-3 gap-6">
                {skills.map((s) => (
                  <motion.div key={s.title} variants={fadeUp}>
                    <SkillCard title={s.title} items={s.items} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="py-16 bg-white dark:bg-gray-950 border-y border-black/5 dark:border-white/10">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-4xl font-bold text-center">
                Key Achievements
              </motion.h2>

              <motion.div variants={stagger} className="mt-12 grid md:grid-cols-3 gap-6">
                {achievements.map((a) => (
                  <motion.div key={a.title} variants={fadeUp}>
                    <Card title={a.title} description={a.description} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-4xl font-bold text-center">
                Projects
              </motion.h2>

              <motion.div variants={fadeUp} className="mt-8 max-w-xl mx-auto">
                <input
                  value={projectQuery}
                  onChange={(e) => setProjectQuery(e.target.value)}
                  placeholder="Search projects (e.g., Laravel, API, CI/CD, MySQL)..."
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 outline-none focus:ring-2 focus:ring-blue-500/40"
                />
              </motion.div>

              <motion.div variants={stagger} className="mt-10 grid md:grid-cols-2 gap-6">
                {filteredProjects.map((p) => (
                  <motion.div key={p.title} variants={fadeUp}>
                    <ProjectCard {...p} />
                  </motion.div>
                ))}
                {filteredProjects.length === 0 && (
                  <motion.div variants={fadeUp} className="md:col-span-2 text-center opacity-80 py-10">
                    No projects match your search.
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="py-16 bg-white dark:bg-gray-950 border-y border-black/5 dark:border-white/10">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-4xl font-bold text-center">
                Education
              </motion.h2>

              <motion.div variants={stagger} className="mt-12 space-y-6">
                {education.map((ed) => (
                  <motion.div key={ed.program} variants={fadeUp}>
                    <EducationCard {...ed} />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="mt-10 grid md:grid-cols-3 gap-6">
                <Card title="Languages" description="English • Sinhala" />
                <Card title="Interests" description="Latest technologies • Open-source contribution • Skill improvement" />
                <Card title="Work Style" description="Agile • Collaboration • Quality-focused delivery" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="rounded-3xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 p-8 md:p-10">
              <div className="grid md:grid-cols-3 gap-10 items-start">
                <div>
                  <h2 className="text-3xl font-bold">Contact</h2>
                  <p className="mt-2 opacity-80">
                    Feel free to reach out for collaboration or opportunities.
                  </p>

                  <div className="mt-6 space-y-2 text-sm">
                    <p className="opacity-80">Email: <span className="font-medium">{links.email}</span></p>
                    <p className="opacity-80">Phone: <span className="font-medium">{links.phone}</span></p>
                    <p className="opacity-80">Location: <span className="font-medium">{links.location}</span></p>
                    <p className="opacity-80">Address: <span className="font-medium">{links.address}</span></p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={`mailto:${links.email}`}
                      className="px-5 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow-sm hover:opacity-95"
                    >
                      Email Me
                    </a>
                    <a
                      href={links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-3 rounded-2xl border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-3 rounded-2xl border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <ContactCard toEmail={links.email} />
                </div>
              </div>
            </div>

            <footer className="mt-10 text-center text-sm opacity-70">
              © {new Date().getFullYear()} Isuru Rushan Aberathne · Built with Next.js
            </footer>
          </div>
        </section>

        {/* Back to top */}
        <a
          href="#top"
          className="fixed bottom-6 right-6 z-40 px-4 py-2 rounded-full bg-white dark:bg-gray-900 shadow-sm border border-black/10 dark:border-white/10 hover:opacity-95"
        >
          ↑ Top
        </a>
      </main>
    </div>
  );
}

/* UI COMPONENTS */

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/10 border border-black/5 dark:border-white/10">
      {children}
    </span>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 p-4">
      <p className="text-xs opacity-70">{label}</p>
      <p className="mt-1 font-semibold">{value}</p>
    </div>
  );
}

function ExperienceCard({ role, company, period, location, type, points }: Experience) {
  return (
    <div className="rounded-3xl bg-slate-50 dark:bg-gray-900 border border-black/5 dark:border-white/10 p-8 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
        <div>
          <h3 className="text-2xl font-semibold">{role}</h3>
          <p className="mt-1 text-blue-700 dark:text-blue-300 font-medium">
            {company}
            {location ? <span className="opacity-70 font-normal"> · {location}</span> : null}
            {type ? <span className="opacity-70 font-normal"> · {type}</span> : null}
          </p>
        </div>
        <p className="text-sm opacity-70">{period}</p>
      </div>

      <ul className="mt-5 list-disc pl-5 space-y-2 opacity-90">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl bg-slate-50 dark:bg-gray-900 border border-black/5 dark:border-white/10 p-8 shadow-sm">
      <h4 className="text-xl font-semibold">{title}</h4>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((it) => (
          <span
            key={it}
            className="text-sm px-3 py-1.5 rounded-full bg-white dark:bg-gray-950 border border-black/10 dark:border-white/10"
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ title, description, tech, links }: Project) {
  return (
    <div className="rounded-3xl bg-slate-50 dark:bg-gray-900 border border-black/5 dark:border-white/10 p-8 shadow-sm">
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="mt-3 opacity-90 leading-relaxed">{description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1.5 rounded-full bg-white dark:bg-gray-950 border border-black/10 dark:border-white/10"
          >
            {t}
          </span>
        ))}
      </div>

      {links?.length ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5 text-sm"
            >
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function EducationCard({ program, institute, period, notes }: Education) {
  return (
    <div className="rounded-3xl bg-slate-50 dark:bg-gray-900 border border-black/5 dark:border-white/10 p-8 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold">{program}</h3>
          <p className="mt-1 opacity-90">{institute}</p>
          {notes?.length ? (
            <p className="mt-2 text-sm opacity-70">{notes.join(" • ")}</p>
          ) : null}
        </div>
        <p className="text-sm opacity-70">{period}</p>
      </div>
    </div>
  );
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-3xl bg-slate-50 dark:bg-gray-900 border border-black/5 dark:border-white/10 p-8 shadow-sm">
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="mt-3 opacity-90 leading-relaxed">{description}</p>
    </div>
  );
}

function ContactCard({ toEmail }: { toEmail: string }) {
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio Contact — ${name || "New message"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${fromEmail}\n\nMessage:\n${message}\n`);
    return `mailto:${toEmail}?subject=${subject}&body=${body}`;
  }, [name, fromEmail, message, toEmail]);

  return (
    <div className="rounded-3xl bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 p-7 md:p-8">
      <h3 className="text-xl font-semibold">Send a message</h3>
      <p className="mt-2 text-sm opacity-80">This opens your email client (no server required).</p>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm opacity-80">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full px-4 py-3 rounded-2xl bg-white dark:bg-gray-950 border border-black/10 dark:border-white/10 outline-none focus:ring-2 focus:ring-blue-500/40"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="text-sm opacity-80">Email</label>
          <input
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
            className="mt-2 w-full px-4 py-3 rounded-2xl bg-white dark:bg-gray-950 border border-black/10 dark:border-white/10 outline-none focus:ring-2 focus:ring-blue-500/40"
            placeholder="you@example.com"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm opacity-80">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="mt-2 w-full px-4 py-3 rounded-2xl bg-white dark:bg-gray-950 border border-black/10 dark:border-white/10 outline-none focus:ring-2 focus:ring-blue-500/40"
            placeholder="Tell me about your project or opportunity..."
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={mailto}
          className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow-sm hover:opacity-95"
        >
          Open Email
        </a>

        <button
          type="button"
          onClick={() => {
            setName("");
            setFromEmail("");
            setMessage("");
          }}
          className="px-6 py-3 rounded-2xl border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/5"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
