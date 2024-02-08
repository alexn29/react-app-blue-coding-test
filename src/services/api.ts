import axios from 'axios'
import type { ImagesType } from '@/app-types/GifType'

const API_KEY = 'pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa'
const API_URL = `https://api.giphy.com/v1/gifs/search`

const api = axios.create({
  baseURL: API_URL
})

export const searchThumnails = async (query: string): Promise<ImagesType[]> => {
  const { data } = await api.get(`?api_key=${API_KEY}&q=${query}`)
  const { data: images } = data
  return images as ImagesType[]
}
