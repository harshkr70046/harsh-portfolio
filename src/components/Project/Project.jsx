import React from 'react'
import Card from "../Card/Card"
import "./Project.css"
import va from "../../assets/va.png"
import fw from "../../assets/fw.png"
import tti from "../../assets/tti.png"
import br from "../../assets/br.png"
import bot from "../../assets/cb.png"

import {useGSAP} from "@gsap/react"
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all"
gsap.registerPlugin(ScrollTrigger)
function Project() {
  useGSAP(()=>{
    gsap.from("#para",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:"#para",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%"
      }
    })
  })
  return (
    <div id='project'>
      <h1 id='para'> 6+ MONTHS EXPERIENCED IN PROJECTS</h1>
      <div className='slider'>
        <Card title="VIRTUAL ASSISTANT" image={va}/>
        
        <Card title="AI POWERED FITNESS WEBSITE" image={fw}/>
        <Card title="AI TEXT TO IMAGE" image={tti}/>
        <Card title="AI BACKGROUND REMOVER" image={br}/>
        <Card title="AI CHATBOT" image={bot}/>
      </div>
    </div>
  )
}

export default Project
