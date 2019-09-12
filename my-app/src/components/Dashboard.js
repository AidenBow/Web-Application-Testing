import React, {useState}from "react"
import Display from "./Display"


const Dashboard = () => {
    const [strikes, setStrikes] = useState(0)
    const [balls, setBalls] = useState(0)
    
    const addStrike = () => {
        if (strikes !== 2) {
            let newScore = (strikes + 1)
            setStrikes(newScore)
        } else {
            setStrikes(0)
            console.log("out!")
        }
        
    }

    return(
        <div>
            <Display strikes={strikes} balls={balls}/>
            <button onClick={addStrike}>add strike</button>
            <button>add ball</button>
        </div>
    )
}

export default Dashboard