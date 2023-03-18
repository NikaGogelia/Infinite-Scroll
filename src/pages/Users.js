import { useState, useEffect } from "react";
import { usePage } from "../hooks/usePage";
import { fetchData } from "../functions/FetchData";
import UsersWrapper from "../components/UsersWrapper";

function Users() {
  const [users, setUsers] = useState([]);
  const { page, loader } = usePage();

  useEffect(() => {
    fetchData(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/20`
    ).then((res) =>
      setUsers((prev) => {
        if (JSON.stringify(prev) === JSON.stringify(res.list)) {
          return res.list;
        } else {
          return prev.concat(res.list);
        }
      })
    );
  }, [page]);

  return (
    <div className="users-container">
      <h1>Users</h1>
      <UsersWrapper users={users} loader={loader} />
    </div>
  );
}

export default Users;
