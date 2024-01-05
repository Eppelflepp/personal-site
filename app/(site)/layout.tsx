import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import Link from 'next/link'
import { getPages } from '@/sanity/sanity-utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Eppelflep's Awesome site",
  description: "A site filled with Eppelflep's projects and some abouts!",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // get all pages
  const pages = await getPages();

  return (
    <html lang="en">
      <body className='max-w-3xl mx-auto py-10'>
        <header className='flex items-center justify-between'>
          <Link href="/"
            className='bg-gradient-to-r from-yellow-400 via-orange-500 to-blue-300 bg-clip-text text-transparent text-lg font-bold'>Eppelflep</Link>

          <div className='flex items-center gap-5 text-sm text-gray-500'>
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className='hover:underline'>
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className='py-20'>
        {children}
        </main>
      </body>
    </html>

  )
}