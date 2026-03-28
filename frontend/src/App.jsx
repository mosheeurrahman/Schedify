import { Routes, Route } from 'react-router-dom'
import { RoutineProvider } from './context/RoutineContext'
import Step1Semester from './pages/Step1Semester'
import Step2Courses  from './pages/Step2Courses'
import Step3Preview  from './pages/Step3Preview'
 
function App() {
  return (
    <RoutineProvider>
      <Routes>
        <Route path='/'         element={<Step1Semester />} />
        <Route path='/courses'  element={<Step2Courses />}  />
        <Route path='/preview'  element={<Step3Preview />}  />
      </Routes>
    </RoutineProvider>
  )
}
 
export default App
