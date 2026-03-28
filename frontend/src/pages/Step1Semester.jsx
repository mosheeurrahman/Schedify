import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useRoutine } from '../context/RoutineContext'
import SearchInput from '../components/SearchInput'
 
const API = 'http://localhost:5000/api'
 
function Step1Semester() {
  const navigate = useNavigate()
  const { semester, setSemester, examType, setExamType } = useRoutine()
 
  const [allSemesters, setAllSemesters] = useState([])
  const [loading,      setLoading]      = useState(false)
  const [error,        setError]         = useState('')
 
  // Fetch all available semesters when page loads
  useEffect(() => {
    axios.get(`${API}/semesters`)
      .then(res => setAllSemesters(res.data))
      .catch(() => {})
  }, [])
 
  async function handleNext() {
    if (!semester.trim()) { setError('Please select a semester.'); return }
    if (!examType)         { setError('Please select Midterm or Final.'); return }
    setError('')
    setLoading(true)
    try {
      const res = await axios.post(`${API}/validate`, { semester, examType })
      if (res.data.valid) navigate('/courses')
    } catch (err) {
      setError(err.response?.data?.message || 'No exam found for this combination.')
    } finally {
      setLoading(false)
    }
  }
 
  return (
    <div className="page">
 
      {/* Logo */}
      <div className="logo-bar">
        <h1>Schedify</h1>
        <p>BRACU Exam Routine Generator</p>
      </div>
 
      {/* Card */}
      <div className="card">
 
        <span className="badge">Step 1 of 2</span>
        <h2 className="card-title">Find Your Routine</h2>
        <p className="card-sub">Select your semester and exam type to continue.</p>
 
        {/* Semester Search */}
        <div className="form-group">
          <SearchInput
            label="Semester"
            placeholder="e.g. Spring26"
            suggestions={allSemesters}
            value={semester}
            onChange={val => setSemester(val)}
            onSelect={val => setSemester(val)}
          />
        </div>
 
        {/* Exam Type */}
        <div className="form-group">
          <label className="label">Exam Type</label>
          <div className="exam-group">
            <button
              className={`exam-btn ${examType === 'midterm' ? 'selected' : ''}`}
              onClick={() => setExamType('midterm')}
            >
              📝 Midterm
            </button>
            <button
              className={`exam-btn ${examType === 'final' ? 'selected' : ''}`}
              onClick={() => setExamType('final')}
            >
              🎓 Final
            </button>
          </div>
        </div>
 
        {/* Error message */}
        {error && <div className="error-box">{error}</div>}
 
        {/* Next button */}
        <div style={{ marginTop: "28px" }}>
          <button
            className="btn-primary"
            style={{ width: "100%" }}
            onClick={handleNext}
            disabled={loading}
          >
            {loading
              ? <><span className="spinner" />Checking...</>
              : 'Next  →'
            }
          </button>
        </div>
 
      </div>
    </div>
  )
}
 
export default Step1Semester