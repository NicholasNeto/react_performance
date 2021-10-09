import { memo, useState } from 'react'
import dynamic from 'next/dynamic'  // React --> React.lazy
import { AddProductToWishListProps } from './AddProductToWishList'
import lodash from 'lodash'

const AddProductToWishList = dynamic<AddProductToWishListProps>(() => {
    return import('./AddProductToWishList').then((mod) => mod.AddProductToWishList)
}, {
    loading: () => (<span>Carregando...</span>)
})

interface ProductItemProps {
    product: {
        id: number;
        price: number;
        title: string;
        priceFormatted: string,
    }
    onAddWishList: (id: number) => void,
}

function ProductItemComponent({ product, onAddWishList }: ProductItemProps) {

    const [isAddingToWishList, setIsAddingToWishList] = useState(false)


    /*

    libs exemplo : moment | lodash importação somente se o usuario for utilizar
    async function showFormattedDate(){
        const { format } = await import('date-fns')

        format()
    }
    
    */




    return (
        <div>
            <div>
                {product.title} - <strong>{product.priceFormatted}</strong> -
                <button onClick={() => setIsAddingToWishList(true)}>
                    Add Lista Favoritos
                </button>

                {isAddingToWishList &&
                    <AddProductToWishList
                        onAddToWishList={() => onAddWishList(product.id)}
                        onRequestClose={() => setIsAddingToWishList(false)}
                    />
                }


            </div>
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return lodash.isEqual(prevProps.product, nextProps.product);
})