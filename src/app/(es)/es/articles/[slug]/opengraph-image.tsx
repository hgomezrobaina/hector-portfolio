import { ImageResponse } from 'next/og'
import { ARTICLES } from '../../../../../components/Articles/constants/articles'
import { getArticleBySlug } from '../../../../../components/Articles/utils/get-article'
import { LANGUAGES } from '../../../../../modules/language/constants/language'
import { ogArticleImageElement } from '../../../../_og/og-article-image-element'

export const dynamic = 'force-static'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export function generateStaticParams() {
  return ARTICLES.map(({ slug }) => ({ slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  return new ImageResponse(ogArticleImageElement(article.title[LANGUAGES.ES]), size)
}
