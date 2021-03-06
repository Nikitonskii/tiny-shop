import * as authActionTypes from "../actionTypes/authActionTypes";

export interface AuthRequestType {
  type: typeof authActionTypes.AUTH_REQUEST;
  isLoaded: Boolean;
  email: string;
  password: string;
}

export interface AuthRequestSuccessType {
  type: typeof authActionTypes.AUTH_REQUEST_SUCCESS;
  token: string;
  isLoaded: Boolean;
}

export interface AuthRequestFailType {
  type: typeof authActionTypes.AUTH_REQUEST_FAIL;
  error: string | Error;
  isLoaded: Boolean;
}

export interface AuthRegistrationRequestType {
  type: typeof authActionTypes.AUTH_REGISTRATION_REQUEST;
  userName: string;
  email: string;
  password: string;
}

export interface LogoutRequestSuccessType {
  type: typeof authActionTypes.LOGOUT_SUCCESS;
}

export interface LogoutRequestPendingType {
  type: typeof authActionTypes.LOGOUT_PENDING;
}

export interface LogoutRequestFailType {
  type: typeof authActionTypes.LOGOUT_FAIL;
}

export interface AuthLoginType {
  type: typeof authActionTypes.AUTH_LOGIN;
  token: boolean;
}
