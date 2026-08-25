// eslint-disable-next-line import/named
import { AnimationControls, motion } from 'framer-motion';
import NextImage from 'next/image';
import { APP_IMAGES } from '../../../../modules/app/constants/APP_IMAGES';

interface Props {
  meImageAnimation: AnimationControls;
}

export default function Image({ meImageAnimation }: Props) {
  return (
    <motion.div
      animate={meImageAnimation}
      initial={{ translateX: '500px' }}
      transition={{ duration: 0.6 }}
      className="2xl:block hidden"
    >
      <NextImage
        src={APP_IMAGES.ME_IMAGE.image}
        alt={APP_IMAGES.ME_IMAGE.alt}
        width={471}
        height={840}
        className="w-[350px] h-auto"
      />
    </motion.div>
  );
}
