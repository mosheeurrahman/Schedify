import { createContext, useContext, useState } from 'react'
 
const RoutineContext = createContext()
 
export function RoutineProvider({ children }) {
  const [semester, setSemester] = useState('')
  const [examType, setExamType] = useState('')
  const [courses,  setCourses]  = useState([{ course: '', section: '' }])
  const [routine,  setRoutine]  = useState([])
 
  // Resets all state back to initial values
  const resetAll = () => {
    setSemester('')
    setExamType('')
    setCourses([{ course: '', section: '' }])
    setRoutine([])
  }
 
  return (
    <RoutineContext.Provider value={{
      semester,  setSemester,
      examType,  setExamType,
      courses,   setCourses,
      routine,   setRoutine,
      resetAll
    }}>
      {children}
    </RoutineContext.Provider>
  )
}
 
// Custom hook — import this in every page
export const useRoutine = () => useContext(RoutineContext)