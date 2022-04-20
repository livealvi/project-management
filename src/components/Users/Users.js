import React from "react";
import { Container } from "react-bootstrap";

const Users = () => {
  return (
    <Container>
      <div class="mb-4">
        <div class="mt-4">
          <h2>User{" > "}List</h2>
        </div>

        <div class="d-flex justify-content-center mt-5">
          <div class="table-responsive w-100">
            <table class="table table-hover table-bordered text-center">
              <thead>
                <tr class="text-center align-middle">
                  <th scope="col">#</th>
                  <th scope="col">ID</th>
                  <th scope="col">Role</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody class="align-middle text-lowercase">
                {/* @foreach($users as $count=>$user ) */}
                {/* <tr>
                        <th scope="row">{{++$count}}</th>
                        <td>{{$user->id}}</td>
                        <td>{{$user->role}}</td>
                        <td>{{$user->user_name}}</td>
                        <td>{{$user->email}}</td>
                        <td>
                            <a href="/user-edit/{{$user->id}}">
                                <button type="button" class="btn btn-primary mb-2 mb-sm-0">Profile</button>
                            </a>
                            <a href="/user-edit/{{$user->id}}">
                                <button type="button" class="btn btn-success mb-2 mb-sm-0">Edit</button>
                            </a>
                            <a href="/user-delete/{{$user->id}}">
                                <button type="button" class="btn btn-danger">Delete</button>
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
