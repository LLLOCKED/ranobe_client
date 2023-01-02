import { FC } from "react";

type TName = {
    name: string;
}

const CategoryItem:FC<TName> = ({name}) => {
    return(
        <li>
            <span>{name}</span>
        </li>
    )
}

export default CategoryItem;