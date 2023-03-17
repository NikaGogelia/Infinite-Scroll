import { useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import UsersWrapper from "../components/UsersWrapper";

function UserDetail() {
  const [userFriends, setUserFriends] = useState([]);
  const user = useLoaderData();
  const {
    id,
    name,
    lastName,
    prefix,
    title,
    jobArea,
    jobType,
    email,
    ip,
    imageUrl,
    company,
    address,
  } = user;

  const userFriendsLoader = useCallback(async () => {
    const usersApi = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/1/20`;

    const response = await fetch(usersApi);

    if (!response.ok) {
      throw Error(`Error Occurred While Fetching Data: ${response.status}`);
    }

    const json = await response.json();
    setUserFriends(json);
  }, [id]);

  useEffect(() => {
    userFriendsLoader();
  }, [userFriendsLoader]);

  return (
    <div className="user-detail-container">
      <Link className="btn btn-primary m-2" to="/">
        Go to home page
      </Link>
      <div className="user-detail d-flex flex-sm-wrap flex-lg-nowrap justify-content-between">
        <img
          src={`${imageUrl}?v=${id}`}
          className="img-thumbnail m-2 rounded"
          style={{ width: "25em" }}
          alt="user-img"
        />
        <div
          className="d-flex flex-column border m-2 px-2 py-3 rounded"
          style={{ width: "100%" }}
        >
          <h3 className="text-primary">Info</h3>
          <p>
            <strong>
              {prefix} {name} {lastName}
            </strong>
          </p>
          <p>{title}</p>
          <p>
            <u>Email:</u> {email}
          </p>
          <p>
            <u>Ip Address:</u> {ip}
          </p>
          <p>
            <u>Job Area:</u> {jobArea}
          </p>
          <p>
            <u>Job Type:</u> {jobType}
          </p>
        </div>
        <div
          className="d-flex flex-column border m-2 px-2 py-3 rounded"
          style={{ width: "100%" }}
        >
          <h3 className="text-primary">Adress</h3>
          <p>
            <strong>
              {company.name} {company.suffix}
            </strong>
          </p>
          <p>
            <u>City:</u> {address.city}
          </p>
          <p>
            <u>Country:</u> {address.country}
          </p>
          <p>
            <u>State:</u> {address.state}
          </p>
          <p>
            <u>Street Address:</u> {address.steetAddress}
          </p>
          <p>
            <u>Zip Code:</u> {address.zipCode}
          </p>
        </div>
      </div>
      <div className="user-friends">
        <h3 className="mx-2 mt-5 mb-3">Friends:</h3>
        <UsersWrapper users={userFriends} />
      </div>
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
