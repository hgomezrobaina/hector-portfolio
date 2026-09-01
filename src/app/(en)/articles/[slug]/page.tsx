import type { Metadata } from 'next'
import ArticlePage from '../../../../components/ArticlePage/ArticlePage'
import { ARTICLES } from '../../../../components/Articles/constants/articles'
import { buildArticleMetadata } from '../../../../components/Articles/utils/build-article-metadata'
import { getArticleBySlug, loadArticleContent } from '../../../../components/Articles/utils/get-article'
import JsonLd from '../../../../modules/app/components/JsonLd/JsonLd'
import { buildArticleJsonLd } from '../../../../modules/app/utils/buildArticleJsonLd'
import { LANGUAGES } from '../../../../modules/language/constants/LANGUAGES'

interface Props {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return ARTICLES.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  return buildArticleMetadata(LANGUAGES.EN, slug)
}

export default async function ArticleRoute({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  const { default: Content } = await loadArticleContent(slug, LANGUAGES.EN)

  return (
    <>
      <JsonLd data={buildArticleJsonLd(article, LANGUAGES.EN)} />

      <ArticlePage language={LANGUAGES.EN} article={article}>
        <Content />
      </ArticlePage>
    </>
  )
}
