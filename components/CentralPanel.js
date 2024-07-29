import Post from "./Post";

const CentralPanel = () => {
    return (
        <section className="mainCol">
            <div className="welcome plate">
                <img src="images/night.png" alt="night" width="43" height="43" />
                <div className="welcomeText">
                    <p id="goodDay" className="goodDay">Добрий вечір, пане Тестер</p>
                    <p id="goodDay2" className="goodDay">Сподіваємося Ви приєднаєтесь до нашого вечору</p>
                </div>
            </div>
            <div className="delimiter">
                Нові пости
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
        </section>
    )
}

export default CentralPanel