const Post = () => {
    return (
        <div className="post plate">
            <div className="postHeader">
                <img className="postHeaderAvatar" src="images/avatar.png" alt="avatar"></img>
                <div className="postHeaderText">
                    <p className="postOwner">Тестер Тестерович</p>
                    <p className="postDate">2 дні тому</p>
                </div>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure nihil blanditiis, aliquam odit nobis repellat officia quisquam exercitationem at pariatur dolore minus quam soluta mollitia laudantium voluptatum. Deleniti, odio illo.</p>
        </div>
    )
}

export default Post