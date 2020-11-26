import React from "react";
import styles from "../src/styles/item.module.css"

type ItemPropsType = {
    item: number
}

export const Item: React.FC<ItemPropsType> = ({item}) => {
    return <div className={styles.item}>
        {item}
    </div>
}