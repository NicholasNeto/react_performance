
interface SearchResultItemProps {
    product: {
        id: number;
        price: number;
        title: string;
    }
}


export function SearchResultItem({ product }: SearchResultItemProps) {
    return (
        <div>
            <div>{product.title} - <strong>{product.price}</strong></div>
        </div>
    )
}