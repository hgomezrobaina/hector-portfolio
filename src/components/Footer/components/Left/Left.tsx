import Copyright from '../../../../modules/icon/components/Copyright'

export default function Left() {
  return (
    <div className="flex justify-center w-max">
      <div className="flex items-center gap-x-2 font-fontCode text-base esm:text-sm text-center text-scale-8 dark:text-scale-11 fill-scale-8 dark:fill-scale-11">
        <p>Handcrafted by me</p> <Copyright size={22} /> <p>Héctor Gómez</p>
      </div>
    </div>
  )
}
