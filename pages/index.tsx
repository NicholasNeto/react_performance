import { FormEvent, useCallback, useState } from "react"
import { SearchResult } from '../components/SearchResult'

type ResultsType = {
  totalPrice: number,
  data: any[]
}


export default function Home() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<ResultsType>({
    totalPrice: 0,
    data: []
  })

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    const products = data.map((product: any) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        priceFormatted: formatter.format(product.price),
      }
    })


    const totalPrice = data.reduce((total:number, product:any) => {
      return total + product.price;
    }, 0)

    setResults({ totalPrice, data: products })
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
        results={results.data}
        totalPrice={results.totalPrice}
        onAddWishList={addToWishList}
      />

    </div>
  )
}