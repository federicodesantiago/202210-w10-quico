export function ButtonCheck({
    getGentleman,
    gentlemanSelected,
}: {
    getGentleman: () => void;
    gentlemanSelected: boolean;
}) {
    const handleClick = () => {
        getGentleman();
    };
    return (
        <>
            <i
                className={`icon ${
                    gentlemanSelected ? 'gentleman.selected' : 'gentleman__icon'
                } fas fa-check`}
                onClick={() => {
                    handleClick();
                }}
            ></i>
        </>
    );
}
