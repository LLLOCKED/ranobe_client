import Link from "next/link";
import { FC } from "react";
import { ILinkItem } from "./menu-item.interface";

interface IMenuItem{
    item: ILinkItem;
}

const MenuItem:FC<IMenuItem> = ({item}) => {
    return (
        <li>
            <Link href={item.link}>{item.name}</Link>
        </li>
    )
}

export default MenuItem;