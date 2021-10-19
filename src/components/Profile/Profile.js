import React from "react";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div class="container">
        <h1 class="text-center my-5">User Profile</h1>
        <div class="row mx-auto justify-content-center">
            <div className="col-sm-6">
            <div class="card-group mb-5">
        <div class="card">
          <img class="card-img-top" src={user?.photoURL} alt="Card" />
          <div class="card-body">
            <h5 class="card-title">Name: {user?.displayName}</h5>
          </div>
        </div>
      </div>
            </div>
        </div>

    </div>
  );
};

export default Profile;
