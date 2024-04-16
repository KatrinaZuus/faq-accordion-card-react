
import women from "/images/illustration-woman-online-mobile.svg"
import shadow from "/images/bg-pattern-mobile.svg"
import desktopShadow from "/images/bg-pattern-desktop.svg"
import desktopWomen from "/images/illustration-woman-online-desktop.svg"
import desktopIllustration from "/images/illustration-box-desktop.svg"
import data from "../../data.json"
import { useState } from "react"

export default function Faq() {
const [question, setquestion] = useState()
const [answer, setanswer] = useState(false)
console.log(question)
console.log(answer)




    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="img">
                        <div className="mobile">
                            <img className="women" src={women} alt="mobile-illustration"></img>
                            <img className="shadow" src={shadow} alt="mobile-bg"></img>
                        </div>

                        <div className="desktop">
                            <img className="desktop-shadow" src={desktopShadow} alt="desktop-bg"></img>
                            <img className="desktop-women" src={desktopWomen} alt="desktop-illustration"></img>
                        </div>
                    </div>
                </div>
                <img className="desktop-illustration" src={desktopIllustration} alt="desktop-illustration-box"></img>
           
        
        <section className="faq">
            <h1>faq</h1>



        {data.map((item, index)=> (
            <div key={index}>
            <div className="question-container" >
                <div className="q-a" >
                    <button className="question" onClick={()=>{setquestion(index), setanswer(!answer)}}>{item.question}</button>
                    
                    <img className="arrow" src={item.arrow} alt="" style = {question == index && answer ? {transform: "rotate(180deg)"} : {transform : "rotate(0deg)"}}></img>
                </div>
                    <p className="answer" style = {question == index/*item.id-1*/ && answer ? {display:"flex"} : {display: "none"}} >{item.answer}</p>
                    
                    <div className="line"></div>
            </div>
            </div>
        ))
           
        }


        </section>
        </div>

        </>
    )
}


