import React from 'react'
import "./signup.scss"

const Signup = () => {



const data = [
  {
    id: 1,
    Roll:1,

    name: " frank",
    number: "12345678",
    email: "frank@gmail.com",
    
  },

  {
    id: 2,
    
    Roll:2,

    name: " James",
    number: "12345678",
    email: "James@gmail.com",
    
  },

  {
    id: 3,
    Roll:3,

    name: " ben",
    number: "12345678",
    email: "ben@gmail.com",
    // 

  },

  {
    id: 4,
    Roll:4,

    name: " carens",
    number: "12345678",
    email: "carens@gmail.com",
    


  },
  {
    id: 5,
    Roll:5,

    name: " strokes",
    number: "12345678",
    email: "strokes@gmail.com",
   

  },
  {
    id: 6,
    Roll:6,

    name: " bond",
    number: "12345678",
    email: "bond@gmail.com",


  },
  {
    id: 7,
    Roll:7,

    name: " author",
    number: "12345678",
    email: "author@gmail.com",
    

  },
  {
    id: 8,
    Roll:8,

    name: " louis",
    number: "12345678",
    email: "louis@gmail.com",
   

  },

  {
    id: 9,
    Roll:9,

    name: " rick",
    number: "12345678",
    email: "James@gmail.com",
    

  },
  {
    id: 10,
    Roll:10,

    name: " louis",
    number: "12345678",
    email: "louis@gmail.com",
   

  },

];
  
return (
  <>
    
    <div className="container">
     <table className='tabel'>
      <thead>
        <tr>
          <th>Roll</th>
          <th>Student Name</th>
          <th>Phone Number</th>
          <th>Email Id</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item,index) => (
          <tr key={index}>

           <td> {item.Roll} </td>

            <td>{item.name}</td>
            <td> {item.number} </td>
            <td> {item.email} </td>

            

          </tr>
        ))}
      </tbody>
    </table>
    </div> 



  </>









  )
}

export default Signup