import { useState } from "react"

type HeaderProps = {
    score: number
}

export default function Header({ score }: HeaderProps) {

    const [highScore, setHighScore] = useState(0)

    if (score > highScore) {
        setHighScore(score)
    }

    return (
        <div className="">
            <h1>Memory Card Game</h1>
            <span>Best Score: {highScore}</span>
            <br />
            <span>Score: {score}</span>
        </div>
    )
}