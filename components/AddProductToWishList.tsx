
export interface AddProductToWishListProps {
    onAddToWishList: () => void;
    onRequestClose: () => void;
}


export function AddProductToWishList({
    onAddToWishList,
    onRequestClose
}: AddProductToWishListProps) {
    return (
        <span>
            Deseja adcionar a lista?
            <button onClick={onAddToWishList}>Sim</button>
            <button onClick={onRequestClose}>Não</button>
        </span>
    )
}