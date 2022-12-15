import { InfoGentlemanType } from '../../types/gentleman.info';
import { SelectAllButton } from '../buttons/selectAll';

export function Section({
    gentelmanIndiviualData,
    sendingData,
}: {
    gentelmanIndiviualData: InfoGentlemanType[];
    sendingData: () => void;
}) {
    let counter = 0;

    const sendGentlemen = () => {
        sendingData();
    };

    const countSelected = () => {
        gentelmanIndiviualData.forEach((item) =>
            item.selected ? counter++ : item
        );
    };
    countSelected();

    return (
        <section className="controls">
            <p className="info">{counter} gentlemen pointing at you</p>
            <SelectAllButton getGentlemen={sendGentlemen}></SelectAllButton>
        </section>
    );
}
