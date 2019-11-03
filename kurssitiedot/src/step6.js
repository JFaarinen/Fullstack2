import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({course}) => {
    return (
        <div> 
        <Header course={course.name} />
        <Content parts={course.parts}/> 
        </div>
    )
}

const Header = ({course}) => {
    return(<div>
        <h1>{course}</h1>
    </div>)
}

const Content = ({parts}) => {
    return (
        <div>
            {parts.map((part, i) => <Part key={i} part={part} />)}
        </div>       
    )
}

const Part = ({part}) => {
    return (
        <p>{part.name} {part.exercises}</p>
    )
}

const App = () => {
    const course = {
        name: 'Half Stace application development', 
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
            <Course course={course} />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

