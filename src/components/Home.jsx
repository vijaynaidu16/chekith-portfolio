import { useState } from "react";
import { LOGO } from "../utils/constants"
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
    const [login, setLogin] = useState(true);

    const handle = () => {
        setLogin(!login);
    }

  return (
    <div className="home">
        <div className="home-1">
           <h1> Hi, I am Chekith & </h1>
           <h2>I am a UI UX Designer</h2>
           <div className="icons">
           <a href="https://github.com/chekith" target="_blank"><spam><FaGithub /></spam></a>
           <a href="https://x.com/Chekith4?t=lWxDFpnhRelw76Ts4KsUkQ&s=08" target="_blank"><spam><FaXTwitter /></spam></a>
           </div>

        </div>
        <div className="home-2">
            <img src="src\assets\chekith.jpg" alt="" />
        </div>

        {/* <button onClick={handle}>{login ? "login" : "logout"}</button> */}
    </div>
  )
}

export default Home