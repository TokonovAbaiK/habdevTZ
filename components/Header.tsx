import { Navigation } from "./Navigation"

const Header = () => {
    const navItems = [
        { label: "Home", href: "/" },
        { label: "About" , href: "/about"}
    ]
    return (
        <header>
            <Navigation navLink={navItems}/>
        </header>
    )
}

export default Header