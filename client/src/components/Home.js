import { useEffect, useState } from "react";

function Home() {

  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    const userHomePage = async () => {
      try {
        const res = await fetch("/getdata", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        });
        const data = await res.json();
        console.log(data);
        setUserName(data.name);
        setShow(true);
      } catch (error) {
          console.log(error);
      }
    };  
    userHomePage();
  }, []);

  return (
    <>
      <div className="home-page">
        <div className="home-div">
          <p className="pt-5">Welcome</p>
          <h1>{userName}</h1>
          <h1>{ show ? 'Happy to see you back' : 'We are the Professionals'}</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
