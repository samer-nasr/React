import React from 'react'
import Person from './Person'

function NameList() {
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
    const personList = persons.map(person => <Person key={person.id} person={person} />)
  return (
    <div>{ personList}</div>
  )
}

export default NameList
