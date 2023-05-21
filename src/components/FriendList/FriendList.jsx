import PropTypes from 'prop-types';
import css from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={css.friendlist}>
      {friends.map(friend => (
        <li key={friend.id} className={css.item}>
          <span
            className={`${css.status} ${
              friend.isOnline ? css.online : css.ofline
            }`}
          ></span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
export default FriendList;
