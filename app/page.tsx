import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'

export default function HomePage() {
  const recentPosts = getSortedPostsData().slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh">
        {/* Decorative orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/20 text-cyan-400 text-sm font-dm mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for new projects
          </div>

          {/* Headline */}
          <h1 className="font-syne text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
              Remarkable
            </span>
            <br />
            Web Experiences
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 font-dm max-w-2xl mx-auto mb-10 leading-relaxed">
            A modern, performant website built with Next.js 14, Tailwind CSS, and a passion for
            exceptional user experiences. Dark mode included.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/blog"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-white font-syne font-semibold hover:from-cyan-600 hover:to-cyan-500 transition-all shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-1 active:translate-y-0"
            >
              Read the Blog →
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 rounded-xl glass border border-white/20 text-white font-syne font-semibold hover:bg-white/10 transition-all hover:-translate-y-1 active:translate-y-0"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs font-dm tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-navy-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-syne text-4xl font-bold text-gray-900 dark:text-white mb-4">What&apos;s Inside</h2>
            <p className="text-gray-500 dark:text-gray-400 font-dm max-w-xl mx-auto">Everything you need to build and ship a production-ready website.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '\uD83C\uDF19', title: 'Dark Mode', desc: 'Seamless light/dark theme switching with next-themes and Tailwind CSS.' },
              { icon: '\uD83D\uDCDD', title: 'Blog System', desc: 'Markdown-powered blog with frontmatter support, read time, and tags.' },
              { icon: '\uD83D\uDCF1', title: 'Fully Responsive', desc: 'Mobile-first design that looks perfect on any screen size.' },
              { icon: '\u26A1', title: 'Lightning Fast', desc: 'Optimized with Next.js App Router for maximum performance.' },
              { icon: '\uD83C\uDFA8', title: 'Tailwind CSS', desc: 'Utility-first styling with a custom design system and animations.' },
              { icon: '\uD83D\uDD17', title: 'TypeScript', desc: 'Fully typed codebase for better developer experience and safety.' },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-navy-800 border border-gray-100 dark:border-white/5 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 transition-all hover:-translate-y-1 group"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
                <p className="text-sm font-dm text-gray-500 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <section className="py-24 bg-gray-50 dark:bg-navy-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="font-syne text-4xl font-bold text-gray-900 dark:text-white mb-2">Recent Posts</h2>
                <p className="text-gray-500 dark:text-gray-400 font-dm">Thoughts, tutorials, and insights.</p>
              </div>
              <Link href="/blog" className="hidden sm:inline-flex text-sm font-dm font-medium text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">
                View all →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group p-6 rounded-2xl bg-white dark:bg-navy-900 border border-gray-100 dark:border-white/5 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5"
                >
                  <div className="flex items-center gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs font-dm font-medium rounded-md bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-syne font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-sm font-dm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs font-dm text-gray-400 dark:text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-white dark:bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-syne text-4xl font-bold text-gray-900 dark:text-white mb-4">Let&apos;s Work Together</h2>
          <p className="text-gray-500 dark:text-gray-400 font-dm mb-8 text-lg">Have a project in mind? I&apos;d love to hear about it.</p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-white font-syne font-semibold hover:from-cyan-600 hover:to-cyan-500 transition-all shadow-xl shadow-cyan-500/25 hover:-translate-y-1"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  )
}
