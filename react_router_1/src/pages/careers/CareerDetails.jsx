import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const CareerDetails = () => {

    const {id} = useParams()
    const career = useLoaderData()
  return (
        <div className="career-details">
            <h2>Careers Detail for {career.title}</h2>
            <p>Starting Salary: {career.salary}</p>
            <p>Location: {career.location}</p>

            <div className="details">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolores velit ratione laudantium ab eaque neque aspernatur laborum corrupti ipsum?</p>
            </div>
        </div>
  )
}

export default CareerDetails


//loader function
export const careerDetailsLoader =  async ({params}) => {

    const {id} = params

    const res = await fetch('http://localhost:4000/careers/' + id);

    if(!res.ok)
    {
        throw Error('Could not find that career')
    }

    return res.json()


}