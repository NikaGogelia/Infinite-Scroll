import { useLoaderData } from "react-router-dom";

function UserDetail() {
  const user = useLoaderData();
  return (
    <div className="user-detail-container">
      <h1>{user.name}</h1>
    </div>
  );
}

async function userDetailLoader({ params }) {
  const { id } = params;
  const usersApi = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`;

  const response = await fetch(usersApi);

  if (!response.ok) {
    throw Error(`Error Occurred While Fetching Data: ${response.status}`);
  }

  const json = await response.json();
  return json;
}

export default UserDetail;
export { userDetailLoader };
