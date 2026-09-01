import SectionContainer from '../../modules/app/components/SectionContainer/SectionContainer'
import SectionHeader from '../../modules/app/components/SectionHeader/SectionHeader'
import { ARTICLES as ARTICLES_SECTION } from '../../modules/app/constants/SECTIONS'
import useLanguage from '../../modules/language/hooks/useLanguage'
import ArticleComp from './components/Article/Article'
import { ARTICLES } from './constants/articles'

export default function Articles() {
  const { language } = useLanguage()

  return (
    <SectionContainer id={ARTICLES_SECTION.id}>
      <SectionHeader title={ARTICLES_SECTION.title[language]} index={5} />

      <div className="flex flex-col gap-y-3">
        {ARTICLES.map((article, index) => (
          <ArticleComp key={index} article={article} left={index % 2 === 0} />
        ))}
      </div>
    </SectionContainer>
  )
}
