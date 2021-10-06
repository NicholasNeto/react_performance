
interface ProductItemProps {
    product: {
        id: number;
        price: number;
        title: string;
    }
}


export function ProductItem({ product }: ProductItemProps) {
    return (
        <div>
            <div>{product.title} - <strong>{product.price}</strong></div>
        </div>
    )
}