import { SearchResultItem } from "./SearchResultItem"


interface SearchResultProps {
    results: Array<{
        id: number;
        price: number,
        title: string,
    }>;
}

export function SearchResult({ results }: SearchResultProps) {
    return (
        <div>
            {results.map(product => {
                return <SearchResultItem product={product} />
            })}
        </div>
    )
}