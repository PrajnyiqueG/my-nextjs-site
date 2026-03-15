import Link from 'next/link'

export const metadata = {
  title: 'About — NextSite',
  description: 'Learn more about who we are and what we do.',
}

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="py-20 bg-gray-50 dark:bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-dm font-medium mb-6">
            About Me
          </div>
          <h1 className="font-syne text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Crafting Digital
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-300">Experiences</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-dm leading-relaxed max-w-2xl">
            I&apos;m a full-stack developer passionate about building performant, accessible, and visually stunning web applications.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-syne text-3xl font-bold text-gray-900 dark:text-white mb-6">My Story</h2>
              <div className="space-y-4 font-dm text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>I started my journey in web development over 5 years ago, fascinated by the intersection of design and technology. What began as curiosity quickly became a passion.</p>
                <p>Today, I specialize in building modern web applications with React, Next.js, and TypeScript — always with a focus on performance, accessibility, and developer experience.</p>
                <p>When I&apos;m not coding, you&apos;ll find me writing about web development, contributing to open source, or exploring new technologies.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '50+', label: 'Projects Shipped' },
                { number: '5+', label: 'Years Experience' },
                { number: '20+', label: 'Happy Clients' },
                { number: '100%', label: 'Passion' },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-2xl bg-gray-50 dark:bg-navy-800 border border-gray-100 dark:border-white/5 text-center">
                  <div className="font-syne text-3xl font-extrabold text-cyan-500 dark:text-cyan-400 mb-1">{stat.number}</div>
                  <div className="text-sm font-dm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-gray-50 dark:bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-syne text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Tech Stack</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Prisma', 'Vercel', 'Git', 'Figma', 'GraphQL', 'REST APIs'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-xl bg-white dark:bg-navy-900 border border-gray-200 dark:border-white/10 text-sm font-dm font-medium text-gray-700 dark:text-gray-300 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-syne text-3xl font-bold text-gray-900 dark:text-white mb-4">Want to collaborate?</h2>
          <p className="text-gray-500 dark:text-gray-400 font-dm mb-8">I&apos;m always open to interesting projects and opportunities.</p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-white font-syne font-semibold hover:from-cyan-600 hover:to-cyan-500 transition-all shadow-xl shadow-cyan-500/25 hover:-translate-y-1"
          >
            Let&apos;s Talk →
          </Link>
        </div>
      </section>
    </div>
  )
}
