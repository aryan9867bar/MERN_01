import { useEffect, useState } from "react";

function Contact() {
    const [userData, setUserData] = useState({name:"", email:"", phone:"", message:""});
    useEffect(() => {
      const userContact = async () => {
        try {
          const res = await fetch("/getdata", {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            },
          });

          const data = await res.json();
          console.log(data);
          setUserData({...data, name:data.name, email:data.email, phone:data.phone });

          if(!res.status === 200) {
            const error = new Error(res.error);
            throw error;
          }

        } catch (error) {
            console.log(error);
        }
      };  

      userContact();
    }, []);


    //we are storing data in states
    const handleInputs = (e) => {
      const name = e.target.value;
      const value = e.target.value;

      setUserData({...userData, [name]:value });
    };

    //send the data to backend
    const contactForm = async (e) => {
      e.preventDefault();

      const { name, email, phone, message } = userData;

      const res = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, phone, message
        })
      });

      const data = await res.json();

      if(!data) {
        console.log("message not send");
      } else {
        alert("Message Send");
        setUserData({...userData, message:""});
      }
    }

    return (
      <>
        <div className="contact_info">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
                <div className="contact_info_item d-flex justify-content-start align-items-center">
                  <img src="" alt="phone" />
                  <div className="contact_info_content">
                    <div className="contact_info_title">
                      Phone
                    </div>
                    <div className="contact_info_text">
                      +91 1111 543 2198
                    </div>
                  </div>
                </div>
                <div className="contact_info_item d-flex justify-content-start align-items-center">
                  <img src="" alt="phone" />
                  <div className="contact_info_content">
                    <div className="contact_info_title">
                      Email
                    </div>
                    <div className="contact_info_text">
                      aryan@gmail.com
                    </div>
                  </div>
                </div>
                <div className="contact_info_item d-flex justify-content-start align-items-center">
                  <img src="" alt="phone" />
                  <div className="contact_info_content">
                    <div className="contact_info_title">
                      Address
                    </div>
                    <div className="contact_info_text">
                      California
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="contact_form">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="contact_form_container py-5">
                  <div className="contact_form_title">
                    Get in Touch
                  </div>
                  <form method="POST" id="contact_form">
                    <div className="contact_form_name d-flex justify-content-between align-items-between">
                        <input type="text" id="contact_form_name" className="contact_form_name input_field" name="name" value={userData.name} onChange={handleInputs} placeholder="Your Name" required="true" />
                        <input type="email" id="contact_form_email" className="contact_form_email input_field" name="email" value={userData.email} onChange={handleInputs}  placeholder="Your Email" required="true" />
                        <input type="number" id="contact_form_phone" className="contact_form_phone input_field" name="phone" value={userData.phone} onChange={handleInputs}  placeholder="Your Phone Number" required="true" />
                    </div>
                    <div className="contact_form_text mt-5">
                      <textarea className="text_field contact_form_message" name="message" value={userData.message} onChange={handleInputs} placeholder="Message" cols="30" rows="10"></textarea>
                    </div>
                    <div className="contact_form_button">
                      <button type="submit" className="button contact_submit_button"
                        onClick={contactForm}>Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Contact;
  