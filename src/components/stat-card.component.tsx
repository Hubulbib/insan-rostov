"use client"

const StatCardComponent = ({numberStat, textStat}: {numberStat: string, textStat: string}) => {
    return (
        <div className='stat-card'>
            <h1>{numberStat}</h1>
            <h3>{textStat}</h3>
        </div>
    )
}

export default StatCardComponent