import React from 'react'
import ReactDOM from 'react-dom'

const Part = (params) => {
    console.log(params)
    return (
        <p>
            {params.part.name} {params.part.exercises}
        </p>
    )
}
const Header = (params) => {
    return (
        <h1>{params.course}</h1>
    )

}
const Content = (params) => {
    return (
        <div>
            <Part part={params.parts[0]} />
            <Part part={params.parts[1]} />
            <Part part={params.parts[2]} />
        </div>
    )

}
const Total = (params) => {
    console.log(params.parts);
    return (
        <p>Number of exercises {params.parts[0].exercises + params.parts[1].exercises + params.parts[2].exercises}</p>
    )


}
const App = () => {
    const course = {
        name: ' ',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }


    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))