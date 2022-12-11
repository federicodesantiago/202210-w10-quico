import './sample.css';

export function Header() {
    //Controler del componente

    const title = 'Hola caracola';
    const cssClass = 'sample';
    const items = [
        { path: '/home', label: 'Inicio' },
        { path: '/products', label: 'Productos' },
        { path: '/about', label: 'Nosotros' },
    ];

    // Vista del componente en JSX
    return (
        <div className={cssClass}>
            <h1>{title}</h1>
            <nav>
                <ul>
                    {items.map((item) => (
                        <li key={item.label}>
                            <a href={item.path}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
