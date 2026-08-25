import Image from 'next/image';
import { APP_IMAGES } from '../../../../../../modules/app/constants/APP_IMAGES';

export default function Logo() {
  return (
    <div className="w-max">
      <Image
        src={APP_IMAGES.LOGO.image}
        alt={APP_IMAGES.LOGO.alt}
        width={40}
        height={40}
        className="w-[40px] h-[40px] min-w-[40px] esm:w-[30px] esm:h-[30px] esm:min-w-[30px]"
      />
    </div>
  );
}
