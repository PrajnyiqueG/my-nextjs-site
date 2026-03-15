import { getPostData, getSortedPostsData } from '@/lib/posts'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const post = await getPostData(params.slug)
    return { title: `${post.title} — NextSite`, description: post.excerpt }
  } catch {
    return { title: 'Post Not Found' }
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  let post
  try {
    post = await getPostData(params.slug)
  } catch {
    notFound()
  }

  return (
    <div className="pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-dm text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors mb-10"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post!.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-dm font-medium rounded-full bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="font-syne text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
          {post!.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm font-dm text-gray-500 dark:text-gray-400 mb-12 pb-8 border-b border-gray-100 dark:border-white/10">
          <span>{post!.author}</span>
          <span>·</span>
          <span>{post!.date}</span>
          <span>·</span>
          <span>{post!.readTime}</span>
        </div>

        {/* Content */}
        <div
          className="prose prose-gray dark:prose-invert max-w-none prose-headings:font-syne prose-a:text-cyan-500 dark:prose-a:text-cyan-400 prose-code:text-cyan-600 dark:prose-code:text-cyan-300"
          dangerouslySetInnerHTML={{ __html: post!.content }}
        />

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-white/10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-dm font-medium text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
          >
            ← More posts
          </Link>
        </div>
      </article>
    </div>
  )
}
