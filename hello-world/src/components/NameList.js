import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['dany' , 'elie' , 'georges']
    const persons =[
        {
            id : 1,
            name : 'dany',
            age : 30,
            skill : 'React'
        },

        {
            id : 2,
            name : 'elie',
            age : 25,
            skill : 'Vue'
        },

        {
            id : 3,
            name : 'georges',
            age : 20,
            skill : 'Angular'
        }
    ]
    const nameList = names.map((name,index) => <h2 key ={index}>{index} {name}</h2>)
    // const personList = persons.map(person => <Person key={person.id} person={person} />)
  return (
    // <div>{ personList}</div>
    <div>{nameList}</div>
  )
}

export default NameList
