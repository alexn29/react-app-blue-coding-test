import { useState, type ReactElement } from 'react'
import type { ThumbnailType } from '@/app-types/GifType'
import { Container, LoadingOverlay, Modal, SimpleGrid } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { useDebouncedState } from '@mantine/hooks'
import { searchThumnails } from '@/services/api'
import Thumbnail from '@/modules/Home/components/Thumbnail'
import Search from './components/Search'

const Home = (): ReactElement => {
  const [query, setQuery] = useDebouncedState('', 500)
  const [openModal, setOpenModal] = useState<boolean>(false)

  const { isLoading, data = [] } = useQuery({
    queryKey: [`search-thumbnails-${query}`],
    queryFn: async () => await searchThumnails(query)
  })

  if (isLoading) return <LoadingOverlay visible={isLoading} />

  const handleClick = (image: ThumbnailType): void => {
    setOpenModal(true)
  }

  return (
    <Container py="lg">
      <Search query={query} setQuery={setQuery} />

      <SimpleGrid cols={4}>
        {data.map(({ id, images }) => (
          <Thumbnail key={id} image={images} onClick={handleClick} />
        ))}
      </SimpleGrid>

      <>
        <Modal opened={openModal} onClose={close} title="Carrousel">
          <h1>modal content</h1>
        </Modal>
      </>
    </Container>
  )
}

export default Home
