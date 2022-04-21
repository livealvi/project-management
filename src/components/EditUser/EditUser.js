import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import service from "../../service";
import "./EditUser.css";

const EditUser = () => {
  const params = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      const { data: response } = await service.get(`users/${params.id}`);
      console.log(response);
      setUser(response);
    })();
  }, []);
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const { data: response } = await service.put(`users/${user.id}`, user);
    console.log(response);
  };
  if (user == null) return <>Loading...</>;
  return (
    <>
      <Container>
        <div className="mb-4">
          <div className="mt-4">
            <h2>User Edit</h2>
          </div>

          <div className="d-flex justify-content-center mt-5">
            <div className="user_edit">
              <div className="user_edit__form">
                <form
                  action=""
                  method="post"
                  className="needs-validation form-element"
                >
                  {/* -- for error -- */}
                  {/* @if ($errors->any())
                    <div className="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                    @endif */}
                  <div className="user_edit__form__box">
                    {/* -- role -- */}
                    <div className="mb-3">
                      <label for="role" className="form-label">
                        Role
                      </label>
                      <select
                        className="form-select"
                        name="role"
                        aria-label="Default select example"
                        value={user.role}
                        onChange={(e) =>
                          setUser((v) => ({ ...v, role: e.target.value }))
                        }
                      >
                        <option selected>Not Selected</option>
                        <option value="admin">Admin</option>
                        <option value="manager">Manager</option>
                        <option value="tester">Tester</option>
                        <option value="developer">Developer</option>
                      </select>
                      {/* -- show error message -- */}

                      <span className="text-danger"></span>
                    </div>

                    {/* -- name -- */}
                    <div className="mb-3">
                      <label for="user_name" className="form-label">
                        Name
                      </label>
                      <input
                        type="name"
                        className="form-control"
                        id="user_name"
                        name="user_name"
                        placeholder="Your name"
                        value={user.user_name}
                        onChange={(e) =>
                          setUser((v) => ({ ...v, user_name: e.target.value }))
                        }
                      />
                      {/* -- show error message -- */}
                      {/* @error('name') */}
                      <span className="text-danger"></span>
                      {/* @enderror */}
                    </div>
                    {/* -- email -- */}
                    <div className="mb-3">
                      <label for="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="your@email.com"
                        value={user.email}
                        onChange={(e) =>
                          setUser((v) => ({ ...v, email: e.target.value }))
                        }
                      />
                      {/* -- show error message -- */}
                      {/* @error('email') */}
                      <span className="text-danger"></span>
                      {/* @enderror */}
                    </div>
                    {/* -- DOB -- */}
                    <div className="mb-3">
                      <label for="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="password"
                        name="password"
                        value={user.password}
                        onChange={(e) =>
                          setUser((v) => ({ ...v, password: e.target.value }))
                        }
                      />
                      {/* -- show error message -- */}
                      {/* @error('passowrd') */}
                      <span className="text-danger"></span>
                      {/* @enderror */}
                    </div>
                    {/* -- phone -- */}
                    <div className="mb-3">
                      <label for="address" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        placeholder="Your Address"
                        value={user.address}
                        onChange={(e) =>
                          setUser((v) => ({ ...v, address: e.target.value }))
                        }
                      />
                      {/* -- show error message -- */}
                      {/* @error('address') */}
                      <span className="text-danger"></span>
                      {/* @enderror */}
                    </div>
                    {/* -- phoen -- */}
                    <div className="mb-3">
                      <label for="phone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={user.phone}
                        onChange={(e) =>
                          setUser((v) => ({ ...v, phone: e.target.value }))
                        }
                      />
                      {/* -- show error message -- */}
                      {/* @error('phone') */}
                      <span className="text-danger"></span>
                      {/* @enderror */}
                    </div>
                  </div>
                  <div className="user_edit__form__box">
                    {/* -- joining_date -- */}
                    <div className="mb-3">
                      <label for="joiningDate" className="form-label">
                        Joining Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="joiningDate"
                        name="joiningDate"
                        value={user.joiningDate}
                        onChange={(e) =>
                          setUser((v) => ({
                            ...v,
                            joiningDate: e.target.value,
                          }))
                        }
                      />
                      {/* -- show error message -- */}
                      {/* @error('joiningDate') */}
                      <span className="text-danger"></span>
                      {/* @enderror */}
                    </div>
                    {/* -- status -- */}
                    <div className="mb-3">
                      <label for="status" className="form-label">
                        Status
                      </label>
                      <select
                        className="form-select"
                        name="status"
                        aria-label="Default select example"
                        value={user.status}
                        onChange={(e) =>
                          setUser((v) => ({ ...v, status: e.target.value }))
                        }
                      >
                        <option value={null}>Not Selected</option>
                        <option value="valid">Valid</option>
                        <option value="invalid">Invalid</option>
                      </select>
                      {/* -- show error message -- */}
                      {/* @error('email') */}
                      <span className="text-danger"></span>
                      {/* @enderror */}
                    </div>
                    {/* -- team -- */}
                    <div className="mb-3">
                      <label for="team" className="form-label">
                        Assign Team
                      </label>
                      <select
                        className="form-select"
                        name="team_id"
                        aria-label="Default select example"
                        value={user.team_id}
                        onChange={(e) =>
                          setUser((v) => ({ ...v, team_id: e.target.value }))
                        }
                      >
                        <option value={null}>Not Selected</option>
                        <option value="1">Manager</option>
                        <option value="2">Tester</option>
                        <option value="3">Developer</option>
                      </select>
                      {/* -- show error message -- */}
                      {/* @error('team') */}
                      <span className="text-danger"></span>
                      {/* @enderror */}
                    </div>
                  </div>
                  {/* -- submit -- */}
                  <div className="user_edit__form__box_button">
                    <button
                      onClick={handleSubmitForm}
                      type="submit"
                      className="btn btn-primary"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default EditUser;
