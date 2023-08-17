import React from "react";
import InputType from "../../components/Shared/Form/InputType";
import Form from "../../components/Shared/Form/Form"; //apna reusuable component ko import kiya
import { useSelector } from "react-redux/es/hooks/useSelector";
import Spinner from './../../components/Shared/Spinner'
const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img src="./assets/images/banner1.jpg" alt="loginImage" />
          </div>
          <div className="col-md-4 form-container">
            <Form
              formTitle={"Login Page"}
              submitBtn={"Login"}
              formType={"login"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
