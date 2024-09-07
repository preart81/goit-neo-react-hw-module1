import css from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.profileDescription}>
        <img className={css.profileImg} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsListItem}>
          <span className={css.statName}>Followers</span>
          <span className={css.statValue}>{stats.followers}</span>
        </li>
        <li className={css.statsListItem}>
          <span className={css.statName}>Views</span>
          <span className={css.statValue}>{stats.views}</span>
        </li>
        <li className={css.statsListItem}>
          <span className={css.statName}>Likes</span>
          <span className={css.statValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
