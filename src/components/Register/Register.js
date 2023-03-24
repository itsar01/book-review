import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Register = () => {
  return (
    <div className="d-flex justify-content-center">
      <form className="w-25" method="POST">
        <div className="form-group my-2">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="exampleInputPassword1">Repeat Password</label>
          <input
            type="password"
            className="form-control"
            id="re-password"
            name="rePassword"
            placeholder="Repeat password"
          />
        </div>

        <div className="d-flex justify-content-center mx-5 my-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
