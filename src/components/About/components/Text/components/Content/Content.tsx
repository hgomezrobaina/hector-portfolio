import { useTranslationComponent } from '../../../../../../modules/language/hooks'
import { Strong } from './components'

export default function Content() {
  const { FIRST, SECOND, THIRD } = useTranslationComponent({
    FIRST: {
      en: (
        <p>
          I am <Strong text="Software Engineering" /> and a fullstack programmer with extensive knowledge in the use of
          modern technologies, both <Strong text="frontend" /> and <Strong text="backend" />.
        </p>
      ),
      es: (
        <p>
          Soy un <Strong text="Ingeniero Informático" /> y un programador fullstack con amplios conocimientos en el uso
          de tecnologías modernas tanto <Strong text="frontend" /> como <Strong text="backend" />.
        </p>
      ),
    },
    SECOND: {
      en: (
        <p>
          Passionate about learning, <Strong text="Software Architecture" /> and the implementation of clean, scalable,
          extensible and testable code.
        </p>
      ),
      es: (
        <p>
          Apasionado del aprendizaje, la <Strong text="Arquitectura de Software" /> y de la implementación de un código
          limpio, escalable, extensible y testeable.
        </p>
      ),
    },
    THIRD: {
      en: (
        <p>
          I am currently looking for new goals that help my professional training and collaborate in the creation of
          useful applications for the community along with teams that enrich the experience.
        </p>
      ),
      es: (
        <p>
          Actualmente estoy buscando nuevas metas que ayuden a mi formación profesional y colaborar en la creación de
          apliaciones útiles para la comunidad junto a equipos que enriquezcan la experiencia.
        </p>
      ),
    },
  })

  return (
    <div className="flex flex-col text-lg gap-y-3 text-left leading-relaxed text-scale-8 dark:text-scale-12 w-full">
      {FIRST}
      {SECOND}
      {THIRD}
    </div>
  )
}
