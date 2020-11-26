import {GridContextProvider, GridDropZone, GridItem, swap} from "react-grid-dnd";
import React, {useState} from "react";
import styles from "../src/styles/example.module.css"
import {Item} from "./Item";

export const Example = () => {
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    const [count, setCount] = useState(0)
    const onChange = (sourceId: string, sourceIndex: number, targetIndex: number) => {
        const nextState = swap(items, sourceIndex, targetIndex);
        setItems(nextState);
    }

    const addItem = () => {
        setCount(count => count + 1)
        const newItem = [...items, 0]
        setItems(newItem)
    }

    const buttonDisabled = () => {
        if (count === 8) {
            return true;
        }
    }

    return (
        <GridContextProvider onChange={onChange}>
            <GridDropZone
                id="items"
                boxesPerRow={4}
                rowHeight={100}
                className={styles.gridDropZone}
            >
                {
                    items.map((item) => {
                        if (item === 8) {
                            return <GridItem key={item} className={styles.gridItemSecond}>
                                <Item item={item}/>
                            </GridItem>
                        } else return <GridItem key={item}
                                                className={styles.gridItem}>
                            <Item item={item}/>
                        </GridItem>
                    })
                }
            </GridDropZone>
            <div className={styles.buttonAdd}>
                <button onClick={addItem} disabled={buttonDisabled()}>Add new</button>
            </div>
        </GridContextProvider>
    );
}