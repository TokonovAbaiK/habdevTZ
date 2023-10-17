import { Navigation } from "./Navigation"

const Header = () => {
    const navItems = [
        { label: "Home", href: "/" },
        { label: "About" , href: "/about"}
    ]
    return (
        <header >
            <div className="container">
                <Navigation navLink={navItems}/>
            </div>
        </header>
    )
}

export default Header