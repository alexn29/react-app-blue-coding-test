export interface ImagesType {
  id: string
  images: ThumbnailType
}

export interface ThumbnailType {
  preview_gif: {
    height: string
    size: string
    width: string
    url: string
  }
}
