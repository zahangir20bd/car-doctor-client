import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={img} alt="" />
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-center">Sign Up</h2>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="my-4">
              Already Have an Account?
              <Link className="text-blue-600 font-bold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
