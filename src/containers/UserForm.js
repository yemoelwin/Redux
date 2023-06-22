import { useDispatch, useSelector,useEffect } from "react-redux";
import { signupUser, loginUser } from "../redux/actions/productsActions";
import UserLogin from './UserLogin'
import UserSignUp from "./UserSignUp";

const SignUpForm = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch(); 

    useEffect(() => {
      dispatch(signupUser());
    }, [dispatch]);

    console.log("User :", user);
    return (
      <div className="ui grid container">
        <UserSignUp />
      </div>
    );
};

const LoginForm = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginUser());
  }, [dispatch])
  
  console.log("Login User:", user);
  return (
    <div className="ui grid container">
      <UserLogin />
    </div>
  )
};

export const UserForm = { SignUpForm , LoginForm}