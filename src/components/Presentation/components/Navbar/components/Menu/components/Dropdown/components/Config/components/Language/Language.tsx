import { APP_IMAGES } from '../../../../../../../../../../../../modules/app/constants/APP_IMAGES'
import { LANGUAGES } from '../../../../../../../../../../../../modules/language/constants/LANGUAGES'
import Button from './components/Button/Button'

export default function Language() {
  return (
    <div className="flex items-center gap-x-3.5">
      <Button language={LANGUAGES.EN} image={APP_IMAGES.FLAGS.US} />
      <Button language={LANGUAGES.ES} image={APP_IMAGES.FLAGS.SPAIN} />
    </div>
  )
}
