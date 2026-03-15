import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact — NextSite',
  description: "Get in touch — I'd love to hear from you.",
}

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="py-20 bg-gray-50 dark:bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-dm font-medium mb-6">
            Contact
          </div>
          <h1 className="font-syne text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-dm max-w-xl">Have a project, question, or just want to say hello? I&apos;d love to hear from you.</p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {/* Info */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mb-4">Let&apos;s connect</h3>
                <p className="text-sm font-dm text-gray-500 dark:text-gray-400 leading-relaxed">I&apos;m currently available for freelance work and interesting full-time opportunities.</p>
              </div>

              {[
                { icon: '\uD83D\uDCE7', label: 'Email', value: 'hello@nextsite.dev' },
                { icon: '\uD83D\uDCCD', label: 'Location', value: 'San Francisco, CA' },
                { icon: '\u23F0', label: 'Response Time', value: 'Within 24 hours' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-navy-800 border border-gray-100 dark:border-white/5 flex items-center justify-center text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-dm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5">{item.label}</div>
                    <div className="text-sm font-dm text-gray-700 dark:text-gray-300">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <div className="p-8 rounded-2xl bg-white dark:bg-navy-800 border border-gray-100 dark:border-white/5 shadow-xl shadow-gray-100/50 dark:shadow-black/20">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
