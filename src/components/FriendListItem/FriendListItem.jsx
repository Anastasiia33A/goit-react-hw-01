
import css from  '../FriendListItem/FriendListItem.module.css'
import clsx from 'clsx';

export default function FriendListItem({ friends: { avatar, name, isOnline } }) {
    return (
        <div className={css.list}>
            <img src={avatar} alt="Avatar" width="100px" />
            <p className={css.name}>{name}</p>
            <span className={clsx(isOnline ? css.online : css.offline)}>{isOnline === true ? "Online" : "Offline"}</span>
      </div>
    )
}