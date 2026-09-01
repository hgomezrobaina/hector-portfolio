import Language from './components/Language/Language'
import Theme from './components/Theme/Theme'

export default function Config() {
  return (
    <div className="flex justify-between w-full items-center pt-6 border-t border-blue-4/30 dark:border-dark-blue-9">
      <Language />
      <Theme />
    </div>
  )
}
