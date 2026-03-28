import { forwardRef } from 'react'
 
const RoutineTable = forwardRef(function RoutineTable(
  { routine, semester, examType }, ref
) {
 
  // Convert "2026-03-31" → "March 31, 2026"
  function niceDate(str) {
    return new Date(str).toLocaleDateString("en-US", {
      year:  "numeric",
      month: "long",
      day:   "numeric"
    })
  }
 
  return (
    <div className="routine-card" ref={ref}>
 
      {/* Gradient header */}
      <div className="routine-head">
        <h2>Exam Routine</h2>
        <p>
          {semester}&nbsp;&nbsp;•&nbsp;&nbsp;
          {examType === 'midterm' ? 'Midterm' : 'Final'} Examination
        </p>
      </div>
 
      {/* Scrollable table */}
      <div style={{ overflowX: "auto" }}>
        <table className="routine-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Section</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Room</th>
              <th>Dept</th>
            </tr>
          </thead>
          <tbody>
            {routine.map((row, i) => (
              <tr key={i}>
                <td><strong>{row.course}</strong></td>
                <td>{row.section}</td>
                <td>{niceDate(row.date)}</td>
                <td>{row.startTime}</td>
                <td>{row.endTime}</td>
                <td>{row.room}</td>
                <td>{row.dept}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
 
    </div>
  )
})
 
export default RoutineTable