import UserCard from "./UserCard";

function UsersWrapper({ users }) {
  return (
    <div className="users d-flex flex-wrap justify-content-between align-items-center">
      {users?.list?.map((user) => (
        <UserCard {...user} key={user.id} />
      ))}
    </div>
  );
}

export default UsersWrapper;
