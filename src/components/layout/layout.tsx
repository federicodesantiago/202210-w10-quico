import { useState } from 'react';
import { data } from '../../model/type';
import { Gentleman } from '../Gentleman/gentleman';
import { Header } from '../header/header';
import { Section } from '../section/section';

export function Layout() {
    const [gentelmanData, setSelected] = useState(data);

    const changeSelected = (id: number) => {
        setSelected(
            gentelmanData.map((item) =>
                item.id === id ? { ...item, selected: true } : item
            )
        );
    };

    const filterGentlemen = (_id: number) => {
        setSelected(gentelmanData.filter((item) => _id !== item.id));
    };

    const counterSelected = () => {
        setSelected(
            gentelmanData.map((item) =>
                item ? { ...item, selected: true } : item
            )
        );
    };

    return (
        <div className="container">
            <Header></Header>
            <Section
                gentelmanIndiviualData={gentelmanData}
                sendingData={counterSelected}
            ></Section>
            <main className="main">
                <ul className="gentlemen">
                    {gentelmanData.map((gItem) => (
                        <Gentleman
                            key={gItem.name}
                            gentelmanDataPass={gItem}
                            deleteGentleman={filterGentlemen}
                            checkGentleman={changeSelected}
                        ></Gentleman>
                    ))}
                </ul>
            </main>
        </div>
    );
}
