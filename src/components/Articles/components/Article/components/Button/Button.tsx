import { clsx } from 'clsx'
import useTranslation from '../../../../../../modules/language/hooks/useTranslation'
import ArrowRight from '../../../../../../modules/icon/components/ArrowRight'

export default function Button() {
  const { TEXT } = useTranslation({ TEXT: { en: 'Read more', es: 'Leer más' } })

  const CLASS = clsx(
    'flex items-center',
    'py-2 px-5',
    'xl:text-base text-sm',
    'text-secondColor dark:text-primaryColor group-hover:text-white dark:group-hover:text-white',
    'border-2 border-secondColor dark:border-primaryColor',
    'group-hover:bg-secondColor dark:group-hover:bg-blue-8',
    'transition-all duration-300',
    'stroke-secondColor dark:stroke-primaryColor group-hover:stroke-white dark:group-hover:stroke-white',
    'gap-x-3',
    'rounded-lg',
  )

  return (
    <div className="flex justify-end mt-auto">
      <div className={CLASS}>
        <p className="font-fontCode">{TEXT}</p>

        <div className="transition-transform duration-200 group-hover:translate-x-1.5">
          <ArrowRight size={20} />
        </div>
      </div>
    </div>
  )
}
