import { TextInput } from '@mantine/core'
import type { FormEvent, ReactElement } from 'react'

interface SearchProps {
  query: string
  setQuery: (query: string) => void
}

const Search = ({ query, setQuery }: SearchProps): ReactElement => {
  const handleSearch = (e: FormEvent<HTMLInputElement>): void => {
    setQuery(e.currentTarget.value)
  }

  return <TextInput placeholder="Search ..." defaultValue={query} onChange={handleSearch} mb="lg" />
}

export default Search
