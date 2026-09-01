'use client'

import { Article } from '../../../Articles/domain/article'
import ArticleFooter from '../ArticleFooter/ArticleFooter'
import ArticleHeader from '../ArticleHeader/ArticleHeader'
import ArticleNavbar from '../ArticleNavbar/ArticleNavbar'

interface Props {
  article: Article
  children: React.ReactNode
}

export default function ArticleApp({ article, children }: Props) {
  return (
    <div className="relative min-h-screen dark:text-white bg-dark-blue-1 dark:bg-primaryDarkColor text-black transition-all duration-300 overflow-x-hidden">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="animate-blob absolute -top-[300px] -left-[200px] w-[700px] h-[700px] rounded-full bg-blue-3/50 dark:bg-blue-7/20 blur-[130px]"></div>
        <div
          className="animate-blob absolute top-1/3 -right-[250px] w-[600px] h-[600px] rounded-full bg-blue-2/60 dark:bg-dark-blue-7/25 blur-[130px]"
          style={{ animationDelay: '-11s' }}
        ></div>

        <div className="absolute inset-0 bg-dots"></div>
        <div className="absolute inset-0 bg-noise"></div>
      </div>

      <ArticleNavbar article={article} />

      <main className="animate-fade-up flex w-full justify-center px-8 pt-32 pb-20">
        <div className="w-full max-w-[75ch]">
          <ArticleHeader article={article} />

          <article className="article-prose">{children}</article>

          <ArticleFooter article={article} />
        </div>
      </main>
    </div>
  )
}
