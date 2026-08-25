// eslint-disable-next-line import/named
import { LegacyAnimationControls, motion } from 'framer-motion';
import NextImage from 'next/image';
import { APP_IMAGES } from '../../../../modules/app/constants/APP_IMAGES';

interface Props {
  meImageAnimation: LegacyAnimationControls;
}

export default function Image({ meImageAnimation }: Props) {
  return (
    <motion.div
      animate={meImageAnimation}
      initial={{ translateX: '500px' }}
      transition={{ duration: 0.6 }}
      className="2xl:block hidden relative"
    >
      <NextImage
        src={APP_IMAGES.ME_IMAGE.image}
        alt={APP_IMAGES.ME_IMAGE.alt}
        width={471}
        height={840}
        className="relative w-[350px] h-auto animate-float drop-shadow-2xl"
      />
    </motion.div>
  );
}
