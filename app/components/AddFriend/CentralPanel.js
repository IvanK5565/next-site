import NewFriend from "./NewFriend";

const CentralPanel = () => {
    const news = []
    return (
        <section className="mainCol" id="mainCol">
            <div className="delimiter">
                Нові запроси у друзі
            </div>
            {news.length == 0
                ? <div className="defaultText plate">Заявки відсутні</div>
                : news.map(el => (<NewFriend />))
            }
        </section>
    )
}

export default CentralPanel