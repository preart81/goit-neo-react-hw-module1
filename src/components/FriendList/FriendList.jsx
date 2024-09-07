import clsx from "clsx";
import css from "./FriendList.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p
        className={clsx(css.status, {
          [css.online]: isOnline,
          [css.offline]: !isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
}

function FriendList({ friends }) {
  const FriendListItemS = friends.map((friend, index) => {
    return (
      <li key={index} className={css.friend}>
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      </li>
    );
  });

  return <ul className={css.friendList}>{FriendListItemS}</ul>;
}

export default FriendList;
