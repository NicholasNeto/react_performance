import { FormEvent, useCallback, useState } from "react"
import { SearchResult } from '../components/SearchResult'

export default function Home() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()
    setResults(data)
  }

  /*
      useCallback  
      Somente para functions, isso evita que 
      toda vez que fizermos Prop Drilling seja feito 
      o re-render do component SearcResult,  porque 
      semrpe estaremos passando a mesma referencia. 
  */


  const addToWishList = useCallback(async (id: number) => {
    console.log(id)
  }, []) // se precisar de alguma informação de la de dentro poderia colocar no array, igual o useEffect


  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>


      <SearchResult
        results={results}
        onAddWishList={addToWishList}
      />

    </div>
  )
}