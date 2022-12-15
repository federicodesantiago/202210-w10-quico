import { InfoGentlemanType } from '../../types/gentleman.info';
import { ButtonCheck } from '../buttons/buttons';
import { DeleteButton } from '../buttons/deletebutton';

export function Gentleman({
    gentelmanDataPass,
    deleteGentleman,
    checkGentleman,
}: {
    gentelmanDataPass: InfoGentlemanType;
    deleteGentleman: (arg0: number) => void;
    checkGentleman: (arg0: number) => void;
}) {
    const sendGentlemanCheck = () => {
        checkGentleman(gentelmanDataPass.id);
    };

    const sendGentlemanId = () => {
        deleteGentleman(gentelmanDataPass.id);
    };

    return (
        <li key={gentelmanDataPass.name} className="gentleman">
            <div className="gentleman__avatar-container">
                <img
                    className="gentleman__avatar"
                    src={gentelmanDataPass.picture}
                    alt={gentelmanDataPass.alternativeText}
                />
                <span className="gentleman__initial">
                    {gentelmanDataPass.name.slice(0, 1)}
                </span>
            </div>
            <div className="gentleman__data-container">
                <h2 className="gentleman__name">{gentelmanDataPass.name}</h2>
                <ul className="gentleman__data-list">
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">
                            Profession:
                        </span>
                        {gentelmanDataPass.profession}
                    </li>
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">Status:</span>
                        {gentelmanDataPass.status}
                    </li>
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">Twitter:</span>
                        {gentelmanDataPass.twitter}
                    </li>
                </ul>
            </div>
            <ButtonCheck
                getGentleman={sendGentlemanCheck}
                gentlemanSelected={gentelmanDataPass.selected}
            ></ButtonCheck>
            <DeleteButton getGentleman={sendGentlemanId}></DeleteButton>
        </li>
    );
}
