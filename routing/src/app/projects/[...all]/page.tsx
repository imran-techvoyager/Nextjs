import React from 'react'

const Project = async ({params}: {params: {all: string[]}}) => {
    const { all } = await params;
  return (
    <div>
        <h1>Project {all}</h1>
        <h2>all routes</h2>
        {all.map((s, index) => (
            <ul key={index}>
                <li>{s}</li>
            </ul>
        ))}
    </div>
  )
}

export default Project