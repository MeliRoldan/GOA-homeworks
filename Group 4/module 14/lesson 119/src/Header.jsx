function Header (props) {
    return (
        <header>
            <nav>
                <div>
                    <h1>{props.title}</h1>
                </div>
                <ul>
                    <li>Home</li>
                    <li>{props.about}</li>
                    <li>Contact us</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header