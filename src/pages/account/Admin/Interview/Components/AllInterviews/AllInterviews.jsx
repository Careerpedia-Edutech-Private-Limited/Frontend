import React from 'react'

import './AllInterviews.scss';

const AllInterviews = () => {
    // Sample data
    const data = [
        { Level: 5, Course: 'Design', StudentName: "Serena Woodsen", Interviewer: "John Doe", Time: "10:00 to 11:00", Date: "20 Apr 2023", Recordings: "https //meet.google com/rcd-sini-tyj" },
        { Level: 5, Course: 'Design', StudentName: "Blair Waldorf", Interviewer: "Monica Geller", Time: "10:00 to 11:00", Date: "20 Apr 2023", Recordings: "https //meet.google com/rcd-sini-tyj" },
        { Level: 5, Course: 'Development', StudentName: "Dan Humfrey", Interviewer: "Chandler Bing", Time: "10:00 to 11:00", Date: "20 Apr 2023", Recordings: "https //meet.google com/rcd-sini-tyj" },
        { Level: 5, Course: 'Design', StudentName: "Chuck Bass", Interviewer: "Joey Tribbiani", Time: "10:00 to 11:00", Date: "20 Apr 2023", Recordings: "https //meet.google com/rcd-sini-tyj" },
        { Level: 5, Course: 'Testing', StudentName: "Nate Archibald", Interviewer: "Phoebe Buffay", Time: "10:00 to 11:00", Date: "20 Apr 2023", Recordings: "https //meet.google com/rcd-sini-tyj" },
        { Level: 5, Course: 'Development', StudentName: "Georgina Sparks", Interviewer: "Janice Wheeler", Time: "10:00 to 11:00", Date: "20 Apr 2023", Recordings: "https //meet.google com/rcd-sini-tyj" },
    ];

    // const onClick = ()=>{

    // }
    return (
        <>
           
            <section className="sector1">
               
                
                <div className="container1">

                    
                    <table>
                        <thead>
                            <tr>
                                <th>Level</th>
                                <th>Course</th>
                                <th>Student Name</th>
                                <th>Interviewer</th>
                                <th>Time</th>
                                <th>Date</th>
                                <th>Recordings</th>

                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.Level}>
                                    <td>{item.Level}</td>
                                    <td>{item.Course}</td>
                                    <td>{item.StudentName}</td>
                                    <td>{item.Interviewer}</td>
                                    <td>{item.Time}</td>
                                    <td>{item.Date}</td>
                                    <td>{item.Recordings}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

        </>


    )
}

export default AllInterviews