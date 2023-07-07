import React from 'react'
import meeting from "../assests/meeting.svg";
import question from "../assests/question-mark.svg";
import schedule from "../assests/schedule.svg";

function BottomButton () {
  return (
    <div style={{width:'100px',height:'200px',position:'absolute',bottom:0,right:0,position:'fixed',display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
        <div style={{backgroundColor:'blue',width:'60px',height:'60px',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            
            <img width={25} src={question} alt="question" />
        </div>
        <div style={{backgroundColor:'blue',width:'60px',height:'60px',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            
            <img width={32} src={meeting} alt="meeting" />
        </div>
        <div style={{backgroundColor:'blue',width:'60px',height:'60px',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            
            <img width={32} src={schedule} alt="schedule" />
        </div>

    </div>
  )
}

export default BottomButton
