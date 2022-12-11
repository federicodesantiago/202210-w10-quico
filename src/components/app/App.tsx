import './App.css';
import { Layout } from '../layout/layout';
import { InfoGentlemans } from '../../types/gentleman.info';

export function App() {
    const data: InfoGentlemans = [
        {
            id: 1,
            name: 'Bertin Osborne',
            status: 'Alive',
            profession: 'Youtuber',
            twitter: '@osbourne',
            picture: 'img/bertin.jpg',
            alternativeText: 'Osbourne pointing at you',
            selected: true,
        },
        {
            name: 'The Farytale',
            status: 'RIP',
            profession: 'Influencer',
            twitter: 'pending',
            picture: 'img/fary.jpg',
            alternativeText: 'The Fary pointing at you',
            id: 2,
            selected: false,
        },
        {
            id: 3,
            name: 'Julius Churchs',
            status: 'Alive',
            profession: 'Java developer',
            twitter: '@julius_churchs',
            picture: 'img/julio.jpg',
            alternativeText: 'Churchs pointing at you',
            selected: true,
        },
    ];

    return (
        <div className="container">
            <Layout data={data}>
                <></>
            </Layout>
        </div>
    );
}
