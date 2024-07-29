

export default function Home() {
    return (
        <main className="container">
            <section className="aside">

            </section>
            <section className="mainCol">
                <div className="plate sign">
                    <form method="post">
                        <label htmlFor="fname">First name</label><br />
                        <input type="text" id="fname" name="fname" value="John" /><br />

                        <label htmlFor="lname">Last name</label><br />
                        <input type="text" id="lname" name="lname" value="Doe" /><br />

                        <label htmlFor="email">Email</label><br />
                        <input type="email" id="email" name="email" /><br />

                        <label htmlFor="pswd">Password</label><br />
                        <input type="password" id="pswd" name="pswd" /><br />

                        <label htmlFor="cpswd">Confirm password</label><br />
                        <input type="password" id="cpswd" name="cpswd" />
                        <input type="checkbox" id="hidePswd" name="hidePswd" />
                        <label htmlFor="hidePswd" className="hidePswdCheck">показати пароль</label>
                        <br /><br />
                        <input type="submit" value="Зареєструватись" id="Submit" />
                    </form>
                    <br />
                    <a href="signin.html">Немає аккаунту? Реєстрація.</a>
                </div>
            </section>
            <section className="aside">

            </section>
        </main>
    );
}