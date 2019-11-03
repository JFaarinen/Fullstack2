import React from 'react';
import ReactDOM from 'react-dom';

const Course = ({course}) => {
    return (
        <div> 
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
        </div>
    )
}

const Courses = ({courses}) => {
    return(
        <div>
            {courses.map((course) => <div><Course key={course.id} course={course}/></div>)}
        </div>
    )
}

const Total = ({parts}) => {
    const osienMaara = parts.map(part => part.exercises)
    const summain = (summattava, nykyinenArvo) => summattava + nykyinenArvo

    return (
        <div>
            <b>Total of {osienMaara.reduce(summain)} exercises.</b>
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
            {parts.map((part ) => <Part key={part.id} part={part} />)}
        </div>       
    )
}

const Part = ({part}) => {
    return (
        <p>{part.name} {part.exercises}</p>
    )
}

const App = () => {
    const courses = [
        {
            name: 'Half Stace application development',
            id: 11,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 22,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]


    return (
        <div>
            <Courses courses={courses} />
            
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

