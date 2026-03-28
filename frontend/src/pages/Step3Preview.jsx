import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import html2canvas from 'html2canvas'
import { useRoutine } from '../context/RoutineContext'
import RoutineTable from '../components/RoutineTable'
import { useEffect } from 'react';
import Footer from '../components/Footer'

function Step3Preview() {
  const navigate = useNavigate()
  const tableRef = useRef(null)
  const { semester, examType, routine, resetAll } = useRoutine()
 
  // Guard: if no routine data, send back to start
  useEffect(() => {
    if (!routine || routine.length === 0) {
      navigate('/');
    }
  }, [routine, navigate]);
 
  // Capture the table div and download as JPG
  async function handleDownload() {
    if (!tableRef.current) return
    const canvas = await html2canvas(tableRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff'
    })
    const link = document.createElement("a")
    link.download = `${semester}-${examType}-routine.jpg`
    link.href = canvas.toDataURL('image/jpeg', 0.95)
    link.click()
  }
 
  function handleStartOver() {
    resetAll()
    navigate('/')
  }
 
  return (
    <div
      className="page"
      style={{ justifyContent: 'flex-start', paddingTop: '48px', flexDirection: 'column' }}
    >
      <div style={{ width: '100%', maxWidth: '960px', padding: '0 20px' }}>
 
        <div className="logo-bar">
          <h1>Schedify</h1>
          <p>BRACU Exam Routine Generator</p>
        </div>
 
        <span className="badge">Your Routine is Ready 🎉</span>
        <h2 className='card-title' style={{ marginBottom: '6px' }}>
          Exam Schedule
        </h2>
        <p className='card-sub' style={{ marginBottom: '24px' }}>
          Review your schedule below and download it as an image.
        </p>
 
        {/* Table — ref is passed here for html2canvas */}
        <RoutineTable
          ref={tableRef}
          routine={routine}
          semester={semester}
          examType={examType}
        />
 
        {/* Bottom action bar */}
        <div className="action-bar">
          <button className='btn-ghost' onClick={() => navigate('/courses')}>
            ← Go Back
          </button>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className='btn-secondary' onClick={handleStartOver}>
              ↺ Start Over
            </button>
            <button className='btn-primary' onClick={handleDownload}>
              ↓ Download JPG
            </button>
          </div>
        </div>
 
      </div>
      <Footer /> 
    </div>
  )
}
 
export default Step3Preview