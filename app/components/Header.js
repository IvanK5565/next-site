import Link from "next/link"

export default function Header() {
    return (
        <header className="container">
            <aside>
                <Link href="/" className="logo">MySocial</Link>
            </aside>
            <form action="search.html" className="search mainCol">
                <input type="text" placeholder="Search" />
                <button className="searchIcon">
                    <img src="images/search.png" width="18" height="18" alt="searchIcon" />
                </button>
            </form>
            <nav className="navigate aside">
                <Link href="Profile"><img width="26" height="26" src="images/avatar.png" alt="avatar" /></Link>
                <Link href="Messages"><img width="26" height="26" src="images/messages.png" alt="messages" /></Link>
                <Link href="AddFriend"><img width="26" height="26" src="images/friends.png" alt="friends" /></Link>
            </nav>
        </header>
    )
}