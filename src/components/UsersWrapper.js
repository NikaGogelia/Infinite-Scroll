import Loader from "./Loader";
import UserCard from "./UserCard";

function UsersWrapper({ users, loader }) {
  return (
    <>
      <div className="users d-flex flex-wrap justify-content-between align-items-center">
        {users.map((user, index) => (
          <UserCard {...user} key={`${user.id}:${index}`} />
        ))}
      </div>
      {loader ? <Loader /> : null}
    </>
  );
}

export default UsersWrapper;
