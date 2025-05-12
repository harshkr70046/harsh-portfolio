import React from "react";
import "./Home.css";
import man from "../../assets/man.png";
import harsh from "../../assets/main.png"
import { Typewriter } from "react-simple-typewriter"; // Correct import
import {useGSAP} from "@gsap/react"
import gsap from "gsap";
function Home() {
  useGSAP(()=>{
    let tl1 = gsap.timeline();
    tl1.from(".line1",{
      y:80,
      duration:1,
      opacity:0
    })
    tl1.from(".line2",{
      y:80,
      duration:1,
      opacity:0
    })
    tl1.from(".line3",{
      y:80,
      duration:1,
      opacity:0
    })
    gsap.from(".righthome img",{
      x:300,
      duration:1,
      opacity:0
    })
  })
  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetail">
          <div className="line1">I'M</div>
          <div className="line2">HARSH KUMAR</div>
          <div className="line3">
            <Typewriter
              words={["WEB DEVELOPER", "SOFTWARE DEVELOPER", "EDITOR"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <button>HIRE ME</button>
        </div>
      </div>
      <div className="righthome">
        <img src={harsh} alt="homelogo" />
      </div>
    </div>
  );
}

export default Home;
