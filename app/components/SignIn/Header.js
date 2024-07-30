import Link from "next/link"

export default function Header() {
    return (
        <header className="container">
            <aside className="mainCol">
            <Link href="/" className="logo">MySocial</Link>
            </aside>
        </header>
    )
}