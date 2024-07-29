const NewFriend = () => {
    return (
        <div className="newFriend plate">
            <div className="postHeader">
                <img className="postHeaderAvatar" src="images/avatar.png" alt="avatar"/>
                    <div className="postHeaderText">
                        <p className="postOwner">Тестер Тестерович</p>
                        <p className="postDate">2 дні тому</p>
                    </div>
            </div>
            <div className="row">
                <button className="custButton">Додати у друзі</button>
                <button className="custButton">Видалити</button>
            </div>
        </div>
    )
}

export default NewFriend