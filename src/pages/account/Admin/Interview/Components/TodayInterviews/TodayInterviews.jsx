import React from 'react'

import './TodayInterviews.scss';

const TodayInterviews = () => {

    // Sample data
    const data = [
        { Level: 5, Course: 'Design', StudentName: "John Doe", Interviewer: "John", Time: "10:00 to 11:00", Date: "20 Apr 2023" },
        { Level: 5, Course: 'Design', StudentName: "John Doe", Interviewer: "John", Time: "10:00 to 11:00", Date: "20 Apr 2023" },
        { Level: 5, Course: 'Design', StudentName: "John Doe", Interviewer: "John", Time: "10:00 to 11:00", Date: "20 Apr 2023" },
        { Level: 5, Course: 'Design', StudentName: "John Doe", Interviewer: "John", Time: "10:00 to 11:00", Date: "20 Apr 2023" },
        { Level: 5, Course: 'Design', StudentName: "John Doe", Interviewer: "John", Time: "10:00 to 11:00", Date: "20 Apr 2023" },
        { Level: 5, Course: 'Design', StudentName: "John Doe", Interviewer: "John", Time: "10:00 to 11:00", Date: "20 Apr 2023" },

    ];

    return (
        <>
            
            <section className="sector">
              

                <div className="container">
                    
                    <table>
                        <thead>
                            <tr>
                                <th>Level</th>
                                <th>Course</th>
                                <th>Student Name</th>
                                <th>Interviewer</th>
                                <th>Time</th>
                                <th>Date</th>

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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </section>


        </>


    )
}

export default TodayInterviews