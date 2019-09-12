import React, {useState}from "react"



const Dashboard = () => {
    const [strikes, setStrikes] = useState(0)
    const [balls, setBalls] = useState(0)
    
    const addStrike = () => {
        if (strikes != 3) {
            setStrikes(strikes++)
        } else {
            setStrikes(0)
        }
    }

    return(
        <div>
            <button>add strike</button>
            <button>add ball</button>
        </div>
    )
}

export default Dashboard