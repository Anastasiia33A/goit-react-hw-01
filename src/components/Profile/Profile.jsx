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
                <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>
            <ul className={css.list}>
                <li className={css.stats}>
                    <p className={css.text}>Followers</p>
                    <p className={css.numbers}>{stats.followers}</p>
                </li>
                <li className={css.stats}>
                    <p className={css.text}>Views</p>
                    <p className={css.numbers}>{stats.views}</p>
                </li>
                <li className={css.stats}>
                    <p className={css.text}>Likes</p>
                    <p className={css.numbers}>{stats.likes}</p>
                </li>
            </ul>
            </div>

    )
}