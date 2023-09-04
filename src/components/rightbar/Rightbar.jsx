import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}) {

  const HomeRightbar = () =>{
    return(
      <>
        <div className="birthadayContainer">
          <img className="birthdayImg" src="assests/gift-box.png" alt=""/>
          <span className="birthdayText">
            <b>Reetika </b>and <b>3 others friends</b> have birthday today
        </span>
        </div>
        <img className="rightbarAd" src="assests/ad.jpg" alt=""/>
       <h4 className="rightbarTitle">Online friends</h4>
       <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key ={u.id} user={u}/>
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () =>{
    return (
      <>
        <h5 className="rightbarTitle">User Information</h5>
        <div className=" rightbarInfo">
          <div className="rightbarInfoItem">
             <span className="rightbarInfoKey">City:</span>
             <span className="rightbarInfoKey">New York</span>
          </div>
          <div className="rightbarInfoItem">
             <span className="rightbarInfoKey">From:</span>
             <span className="rightbarInfoKey">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
             <span className="rightbarInfoKey">RelationShip:</span>
             <span className="rightbarInfoKey">Single</span>
          </div>
        </div>
        <h5 className="rightbarTitle">User friends</h5>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
             <img src="assests/profile/AC.jpg" alt="" className="rightbarFollowingImg"/>
             <span className="rightbarFollowingName">Anju Chaudhari</span>
          </div>
          <div className="rightbarFollowing">
             <img src="assests/profile/AG.jpg" alt="" className="rightbarFollowingImg"/>
             <span className="rightbarFollowingName">Amisha Gupta</span>
          </div>
          <div className="rightbarFollowing">
             <img src="assests/profile/PP.jpg" alt="" className="rightbarFollowingImg"/>
             <span className="rightbarFollowingName">Priya Pal</span>
          </div>
          <div className="rightbarFollowing">
             <img src="assests/profile/RK.jpg" alt="" className="rightbarFollowingImg"/>
             <span className="rightbarFollowingName">Ritika</span>
          </div>
          <div className="rightbarFollowing">
             <img src="assests/profile/VN.jpg" alt="" className="rightbarFollowingImg"/>
             <span className="rightbarFollowingName">Vanshika nigam</span>
          </div>
          <div className="rightbarFollowing">
             <img src="assests/profile/SP.jpg" alt="" className="rightbarFollowingImg"/>
             <span className="rightbarFollowingName">Seema Patel</span>
          </div>
          

        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
       <div className="rightWrapper">
       {profile ? <ProfileRightbar /> : <HomeRightbar />}
        </div>
       </div>
  );
}


