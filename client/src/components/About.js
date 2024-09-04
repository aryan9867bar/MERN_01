import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    useEffect(() => {
      const callAboutPage = async () => {
        try {
          const res = await fetch("/about", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application.json"
            },
            credentials: "include"
          });
  
          const data = await res.json();
          console.log(data);
          setUserData(data);
  
          if(!res.status === 200) {
            const error = new Error(res.error);
            throw error;
          }
  
        } catch (error) {
            console.log(error);
            navigate("/login");
        }
      };  

      callAboutPage();
    }, [navigate]);

    return (
      <>
        <div className="container emp-profile">
          <form method="GET">
            <div className="col-md-4">
              <div className="profile-img">
                <img src="" alt=""/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>
                <p className="profile-rating mt-3 mb-5">RANKINKGS: <span>1/10</span></p>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <NavLink className="nav-link active" id="home-tab" data-toggle="tab" to="#home" role="tab" >About</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link active" id="profile-tab" data-toggle="tab" to="#profile" role="tab" >TimeLine</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="profile-work">
                  <p> Work Link </p>
                  <NavLink to="" target="aryan">Youtube</NavLink><br/>
                  <NavLink to="" target="aryan">Youtube</NavLink><br/>
                  <NavLink to="" target="aryan">Youtube</NavLink><br/>
                  <NavLink to="" target="aryan">Youtube</NavLink><br/>
                </div>
              </div>
              <div className="col-md-8 pl-5 about-info">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="row">
                      <div className="col-md-6">
                        <label>User ID</label>
                      </div>
                      <div className="col-md-6">
                        <p>4578963210</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>{userData.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
          </form>
        </div>
      </>
    );
  }
  
  export default About;
  