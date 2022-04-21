import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import service from "../../service";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [reloader, setReloader] = useState(0);
  useEffect(() => {
    (async () => {
      const { data: response } = await service.get(`user-list`);
      console.log(response);
      setUsers(response);
    })();
  }, [reloader]);

  const handleDelete = async (id) => {
    const { data: response } = await service.delete(`users/${id}`);
    console.log(response);
    setReloader((v) => v + 1);
  };
  return (
    <Container>
      <div className="mb-4">
        <div className="mt-4">
          <h2>User{" > "}List</h2>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <div className="table-responsive w-100">
            <table className="table table-hover table-bordered text-center">
              <thead>
                <tr className="text-center align-middle">
                  <th scope="col">#</th>
                  <th scope="col">ID</th>
                  <th scope="col">Role</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="align-middle text-lowercase">
                {users.map((user) => (
                  <tr key={user.id}>
                    <th scope="row">{users.length}</th>
                    <td>{user.id}</td>
                    <td>{user.role}</td>
                    <td>{user.user_name}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link to={`/user-edit/${user.id}`}>
                        <button
                          type="button"
                          className="btn btn-primary mb-2 mb-sm-0"
                        >
                          Profile
                        </button>
                      </Link>
                      <Link to={`/user-edit/${user.id}`}>
                        <button
                          type="button"
                          className="btn btn-success mb-2 mb-sm-0"
                        >
                          Edit
                        </button>
                      </Link>

                      <button
                        onClick={() => handleDelete(user.id)}
                        type="button"
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {/* @foreach($users as $count=>$user ) */}
                {/* <tr>
                        <th scope="row">{{++$count}}</th>
                        <td>{{$user->id}}</td>
                        <td>{{$user->role}}</td>
                        <td>{{$user->user_name}}</td>
                        <td>{{$user->email}}</td>
                        <td>
                            <a to="/user-edit/{{$user->id}}">
                                <button type="button" className="btn btn-primary mb-2 mb-sm-0">Profile</button>
                            </a>
                            <a to="/user-edit/{{$user->id}}">
                                <button type="button" className="btn btn-success mb-2 mb-sm-0">Edit</button>
                            </a>
                            <a to="/user-delete/{{$user->id}}">
                                <button type="button" className="btn btn-danger">Delete</button>
                            </a>
                        </td>
                    </tr>
                    @endforeach */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Users;
