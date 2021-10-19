import React from "react";
import useAuth from "../../hooks/useAuth";

const Appointment = () => {
    const {user} = useAuth();
  return (
    <div>
            <div class="vh-100" style={{ backgroundColor: "#eee" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                class="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div class="card-body p-5 text-center">
                  <h3 class="mb-5">Make Appointment</h3>


                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      placeholder="Enter your name"
                      value={user?.displayName}
                      readOnly
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      class="form-control form-control-lg"
                      placeholder="Enter your email"
                      value={user?.email}
                      readOnly
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      placeholder="Address"
                      required
                      
                    />
                  </div>
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      placeholder="Phone"
                      required
                    />
                  </div>
                  <div class="form-outline mb-4">
                    <textarea
                      type="text"
                      class="form-control form-control-lg"
                      placeholder="Describe health issue"
                      required
                    />
                  </div>
                  <div class="d-grid">
                    <button
                      class="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Make Appointment
                    </button>
                    
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
  );
};

export default Appointment;
