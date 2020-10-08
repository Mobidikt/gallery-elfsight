import React from "react";

const User = ({ user, onUserClick }) => {
  const handleClickUser = () => {
    onUserClick(user);
  };
  return (
    <li className="user" onClick={handleClickUser}>
      <img
        className="user__image"
        src="https://img2.freepng.ru/20180616/st/kisspng-computer-icons-login-google-account-internet-clip-user-5b25d3b3d94249.7401456915292056838899.jpg"
        alt={user.name}
      />
      <p className="user__name">{user.name}</p>
    </li>
  );
};
export default User;
