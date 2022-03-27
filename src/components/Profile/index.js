import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/auth/auth-context";
import "./profile.css";

const Profile = () => {
  const {
    authDispatch,
    authState: { userDetails },
  } = useAuth();

  const navigate = useNavigate();

  const logoutHandler = (e) => {
    e.preventDefault();
    authDispatch({ type: "LOGOUT_USER" });
    navigate("/");
  };

  return (
    <div className=' account-wrapper'>
      <div className=' card-container account-head flex flex-col ai-center jc-center'>
        <h1>Account</h1>
        <div className='card-divider'></div>
        <div
          style={{ marginTop: "1rem" }}
          className='card-content flex flex-col flex-start flex-gap'>
          <div style={{ gap: "2rem" }} className='flex flex-col flex-gap'>
            <div className='flex flex-gap jc-between'>
              <h4>Full Name : </h4>
              <h4>
                {userDetails.firstName} {userDetails.lastName}
              </h4>
            </div>
            <div className='flex flex-gap jc-between'>
              <h4>Email Address : </h4>
              <h4>{userDetails.email}</h4>
            </div>
          </div>
          <button
            style={{ marginTop: "2rem" }}
            onClick={logoutHandler}
            className='btn outline-primary'>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
