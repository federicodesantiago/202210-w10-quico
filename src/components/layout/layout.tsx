import { Header } from '../header/header';
// import footer

export function Layout({ children }: { children: JSX.Element }) {
    return (
        <div className="container">
            <Header></Header>
            <main>{children}</main>
            <footer></footer>
        </div>
    );
}
