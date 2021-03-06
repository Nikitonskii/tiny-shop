import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../../components/Button";
import { ButtonTypes } from "../../components/Button/types";
import Form from "../../components/Form";

import { config } from "./config";
import { RegisterProp } from "./types";

import * as action from "../../store/actions/authActions/registrate";

const SignUp: React.FC = (): JSX.Element => {
  const [success, setSuccess] = useState<boolean>(false);
  const dispatch = useDispatch();
  let timer: NodeJS.Timeout;

  const register = (email: string, password: string, firstName: string) => {
    dispatch(action.registration(email, password, firstName));
    timer = setTimeout(() => setSuccess(true), 1000);
  };

  const getRegistrationFields = ({
    email,
    password,
    firstName,
    repeatedPassword,
  }: RegisterProp) => {
    if (password === repeatedPassword) {
      register(email, password, firstName);
    }
  };

  // avoid memory leak
  useEffect(() => {
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setSuccess(false);

  return (
    <div className="sign-up-container">
      <Form config={config} onSubmit={getRegistrationFields} buttonTitle="Register now" />
      {success && (
        <div className="sign-up-popup">
          <h3>Congrat Champ !! you did it</h3>
          <Button buttonType={ButtonTypes.button} onClick={closePopup} title="close me" />
        </div>
      )}
    </div>
  );
};

export default SignUp;
