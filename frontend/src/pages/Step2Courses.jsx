import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useRoutine } from '../context/RoutineContext'
import SearchInput from '../components/SearchInput'
import Footer from '../components/Footer'
 
const API = import.meta.env.VITE_API_URL
 
function Step2Courses() {
  const navigate = useNavigate()
  const { semester, examType, courses, setCourses, setRoutine } = useRoutine()
 
  const [allCourses, setAllCourses] = useState([])
  const [sectionMap, setSectionMap] = useState({}) // { rowIndex: ["01","02",...] }
  const [loading,    setLoading]    = useState(false)
  const [error,      setError]      = useState('')
 
  // If user lands here without selecting semester, redirect
  useEffect(() => {
    if (!semester || !examType) { navigate("/"); return }
    axios.get(`${API}/courses/${semester}/${examType}`)
      .then(res => setAllCourses(res.data))
      .catch(() => {})
  }, [semester, examType])
 
  // Called when user selects a course from dropdown
  async function handleCourseSelect(index, courseCode) {
    const updated = [...courses]
    updated[index] = { course: courseCode, section: '' }
    setCourses(updated)
    try {
      const res = await axios.get(
        `${API}/sections/${semester}/${examType}/${courseCode}`
      )
      setSectionMap(prev => ({ ...prev, [index]: res.data }))
    } catch {
      setSectionMap(prev => ({ ...prev, [index]: [] }))
    }
  }
 
  // Called when user types in the course input
  function handleCourseChange(index, value) {
    const updated = [...courses]
    updated[index] = { course: value, section: '' }
    setCourses(updated)
    setSectionMap(prev => ({ ...prev, [index]: [] }))
  }
 
  // Called when user selects a section
  function handleSectionSelect(index, section) {
    const updated = [...courses]
    updated[index] = { ...updated[index], section }
    setCourses(updated)
  }
 
  // Add a new empty course row
  function addCourse() {
    if (courses.length >= 7) return
    setCourses([...courses, { course: '', section: '' }])
  }
 
  // Remove a course row by index
  function removeCourse(index) {
    if (courses.length <= 1) return
    setCourses(courses.filter((_, i) => i !== index))
  }
 
  // Call backend to get routine
  async function handleGenerate() {
    setError('')
    for (let i = 0; i < courses.length; i++) {
      if (!courses[i].course) {
        setError(`Please select a course for row ${i + 1}.`); return
      }
      if (!courses[i].section) {
        setError(`Please select a section for row ${i + 1}.`); return
      }
    }
    setLoading(true)
    try {
      const res = await axios.post(`${API}/routine`, {
        semester, examType, courses
      })
      setRoutine(res.data)
      navigate('/preview')
    } catch (err) {
      setError(err.response?.data?.message || 'Could not generate routine.')
    } finally {
      setLoading(false)
    }
  }
 
  return (
    <div className="page" style={{ flexDirection: 'column' }}>
 
      <div className="logo-bar">
        <h1>Schedify</h1>
        <p>BRACU Exam Routine Generator</p>
      </div>
 
      <div className="card card-wide">
 
        <span className="badge">Step 2 of 2</span>
        <h2 className="card-title">Select Your Courses</h2>
        <p className="card-sub">
          {semester} &nbsp;•&nbsp;
          {examType === 'midterm' ? 'Midterm' : 'Final'} Exam
          &nbsp;•&nbsp; Max 7 courses
        </p>
 
        {/* Course Rows */}
        {courses.map((row, i) => (
          <div key={i} className="course-card">
 
            {/* Row header */}
            <div className="course-card-top">
              <span className="course-num">Course {i + 1}</span>
              {courses.length > 1 && (
                <button className="btn-remove" onClick={() => removeCourse(i)}>
                  ✕ Remove
                </button>
              )}
            </div>
 
            {/* Course + Section inputs */}
            <div className="two-col">
              <SearchInput
                label="Course Code"
                placeholder="e.g. CSE301"
                suggestions={allCourses}
                value={row.course}
                onChange={val => handleCourseChange(i, val)}
                onSelect={val => handleCourseSelect(i, val)}
              />
              <SearchInput
                label="Section"
                placeholder={row.course ? 'Pick section' : 'Select course first'}
                suggestions={sectionMap[i] || []}
                value={row.section}
                onChange={val => {
                  const u = [...courses]
                  u[i] = { ...u[i], section: val }
                  setCourses(u)
                }}
                onSelect={val => handleSectionSelect(i, val)}
                disabled={!row.course || !(sectionMap[i]?.length > 0)}
              />
            </div>
 
          </div>
        ))}
 
        {/* Add More */}
        <button
          className="btn-add"
          onClick={addCourse}
          disabled={courses.length >= 7}
        >
          {courses.length >= 7
            ? '✓ Maximum 7 courses reached'
            : '＋ Add Another Course'
          }
        </button>
 
        {/* Error */}
        {error && <div className="error-box">{error}</div>}
 
        {/* Action Bar */}
        <div className="action-bar">
          <button className='btn-ghost' onClick={() => navigate('/')}>
            ← Go Back
          </button>
          <button
            className="btn-primary"
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading
              ? <><span className="spinner" />Generating...</>
              : 'Generate Routine  →'
            }
          </button>
        </div>
 
      </div>
      <Footer /> 
    </div>
  )
}
 
export default Step2Courses