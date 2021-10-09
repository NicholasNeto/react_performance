import { useMemo } from 'react';
import { ProductItem } from "./ProductItem"


interface SearchResultProps {
    results: Array<{
        id: number;
        price: number,
        title: string,
        priceFormatted: string,
    }>;
    onAddWishList: (id: number) => void,
    totalPrice: number,
}

export function SearchResult({ results, onAddWishList, totalPrice }: SearchResultProps) {


    /*
            const totalPrice = useMemo(() => {
            return results.reduce((total, product) => {
                return total + product.price;
            }, 0)
        }, [results])
    
    */

    return (
        <div>
            <h2>{totalPrice}</h2>

            {/* <ComponentQualquer teste={totalPrice }>   Neste momento vale a pena usar o hook useMemo para poder passar a mesma referencia nesta props*/}

            {results.map(product => {
                return (
                    <ProductItem
                        product={product}
                        onAddWishList={onAddWishList}
                    />
                )
            })}
        </div>
    )
}


/*
Memo
1. Pure Functional Components
2. Renders too often
3. Re-renders with same props
4. Medium to big size
*/

/*
useMemo

1. Calculos pesados
2. Igualdade referencial (quando a gente repassa aquela informação a um componente filho)
*/

/*
    useCallback
    Somente para functions, isso evita que
    toda vez que fizermos Prop Drilling seja feito
    o re-render do component SearcResult,  porque
    semrpe estaremos passando a mesma referencia.
*/
