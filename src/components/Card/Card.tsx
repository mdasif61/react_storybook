import { twMerge } from "tailwind-merge";
import Title from "../Title/Title";

interface CardType {
    bg: 'bg-blue-500'| 'bg-gray-800'|'bg-red-500'
    className?: string
}

const Card = ({ bg, className }: CardType) => {
    return (
        <div className={twMerge(bg, 'p-5 w-96', className)}>
            <Title label="Card Text Title" fw="font-semibold"></Title>
        </div>
    );
};

export default Card;