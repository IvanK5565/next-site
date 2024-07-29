export default function Home() {
    return (
        <main className="container">
            <section className="aside">

            </section>
            <section className="mainCol">
                <div className="plate sign">
                    <form method="post">
                        <label htmlFor="email">Email</label><br />
                        <input type="email" id="email" name="email" /><br />
                        <label htmlFor="pswd">Password</label><br />
                        <input type="password" id="pswd" name="pswd" /><br />
                        <input type="checkbox" name="hidePswd" id="hidePswd" />
                        <label htmlFor="hidePswd" className="hidePswdCheck">показати пароль</label><br /><br />
                        <input type="submit" value="Увійти" id="Submit" />
                    </form>
                    <br />
                    <a href="signup.html">Вже є аккаунт? Вхід.</a>
                </div>

            </section>
            <section className="aside">

            </section>
        </main>
    );
}