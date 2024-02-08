import { Image } from '@mantine/core'
import type { ThumbnailType } from '@/app-types/GifType'
import type { ReactElement } from 'react'

interface ThumbnailProps {
  image: ThumbnailType
  onClick: (image: ThumbnailType) => void
}

const Thumbnail = ({ image, onClick }: ThumbnailProps): ReactElement => {
  const {
    preview_gif: { url }
  } = image

  return (
    <div
      onClick={() => {
        onClick(image)
      }}
    >
      <Image maw={240} src={url} />
    </div>
  )
}

export default Thumbnail
