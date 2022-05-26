import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context";

const ProfileInfo = () => {
  const {
    authState: { userDetails },
    logoutUser,
  } = useAuth();

  const navigate = useNavigate();

  return (
    <div className=' account-wrapper'>
      <Link to='/account' className='btn account-btn outline-secondary'>
        <h3>
          {"<  "}
          Account
        </h3>
      </Link>
      <div className=' card-container account-head flex flex-col ai-center jc-center'>
        <h1 className='flex jc-center'>Profile</h1>
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
            onClick={(e) => logoutUser(e, navigate)}
            className='btn outline-primary'>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
