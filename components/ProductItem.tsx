import { memo } from 'react'


interface ProductItemProps {
    product: {
        id: number;
        price: number;
        title: string;
    }
    onAddWishList: (id: number) => void,
}


function ProductItemComponent({ product, onAddWishList }: ProductItemProps) {
    return (
        <div>
            <div>
                {product.title} - <strong>{product.price}</strong> -
                <button onClick={() => onAddWishList}>
                    Add Lista Favoritos
                </button>
            </div>
        </div>
    )
}


export const ProductItem = memo(ProductItemComponent)