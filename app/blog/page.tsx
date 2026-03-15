import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'

export const metadata = {
  title: 'Blog — NextSite',
  description: 'Thoughts, tutorials, and insights on web development.',
}

export default function BlogPage() {
  const posts = getSortedPostsData()

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="py-20 bg-gray-50 dark:bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-dm font-medium mb-6">
            Blog
          </div>
          <h1 className="font-syne text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Writing</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-dm">Thoughts on web development, design, and the craft of building things.</p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {posts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-white dark:bg-navy-800 border border-gray-100 dark:border-white/5 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 transition-all hover:shadow-xl hover:shadow-cyan-500/5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center font-syne font-bold text-cyan-500 dark:text-cyan-400 text-lg">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs font-dm rounded-md bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-syne font-bold text-xl text-gray-900 dark:text-white mb-2 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm font-dm text-gray-500 dark:text-gray-400 line-clamp-2 mb-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs font-dm text-gray-400 dark:text-gray-500">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                    <span>·</span>
                    <span>{post.author}</span>
                  </div>
                </div>
                <div className="flex-shrink-0 self-center text-gray-300 dark:text-gray-600 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
