import css from "../Profile/Profile.module.css"

export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={css.container}>
            <div className={css.profile}>
            <img className={css.avatar}
                src={image}
            alt={tag}
            />
            <p className={css.name}>{name}</p>
            <p>{location}</p>
        </div>
        <ul>
                <li>
                    <p>Followers</p>
                    <p>{stats.followers}</p>
                </li>
                <li>
                    <p>Views</p>
                    <p>{stats.views}</p>
                </li>
                <li>
                    <p>Likes</p>
                    <p>{stats.likes}</p>
                </li>
            </ul>
            </div>

    )
}