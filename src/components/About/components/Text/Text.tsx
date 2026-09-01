import Content from './components/Content/Content'
import Links from './components/Links/Links'

export default function Text() {
  return (
    <div className="flex flex-col xl:pl-10">
      <Content />
      <Links />
    </div>
  )
}
