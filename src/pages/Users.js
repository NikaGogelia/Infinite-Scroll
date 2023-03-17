import UsersWrapper from "../components/UsersWrapper";
import { useLoaderData } from "react-router-dom";

function Users() {
  const users = useLoaderData();

  return (
    <div className="users-container">
      <h1>Users</h1>
      <UsersWrapper users={users} />
    </div>
  );
}

async function usersLoader() {
  const userNum = 20;
  const pageNum = 1;
  const usersApi = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${pageNum}/${userNum}`;

  const response = await fetch(usersApi);

  if (!response.ok) {
    throw Error(`Error Occurred While Fetching Data: ${response.status}`);
  }

  const json = await response.json();
  return json;
}

export default Users;
export { usersLoader };
