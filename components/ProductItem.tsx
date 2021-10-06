import { memo } from 'react'


interface ProductItemProps {
    product: {
        id: number;
        price: number;
        title: string;
    }
}


function ProductItemComponent({ product }: ProductItemProps) {
    return (
        <div>
            <div>{product.title} - <strong>{product.price}</strong></div>
        </div>
    )
}


export const ProductItem = memo(ProductItemComponent)