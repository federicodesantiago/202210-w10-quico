import { InfoGentlemans } from '../../types/gentleman.info';
import { Gentleman } from '../Gentleman/gentleman';
import { Header } from '../header/header';
import { Section } from '../section/section';

export function Layout({
    data,
    children,
}: {
    data: InfoGentlemans;
    children: JSX.Element;
}) {
    return (
        <>
            <Header></Header>
            <Section></Section>
            <main>
                <Gentleman data={data}></Gentleman>
            </main>
        </>
    );
}
