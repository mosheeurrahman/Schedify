import { useState, useRef, useEffect } from 'react'
 
function SearchInput({ label, placeholder, suggestions = [],
                        value, onChange, onSelect, disabled = false }) {
 
  const [open, setOpen] = useState(false)
  const ref  = useRef(null)
 
  // Filter the suggestions list to max 5 matches
  const filtered = suggestions
    .filter(s => s.toLowerCase().includes(value.toLowerCase()) && s !== '')
    .slice(0, 5)
 
  // Close dropdown if user clicks anywhere outside
  useEffect(() => {
    function handleOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])
 
  return (
    <div className="search-wrap" ref={ref}>
      {label && <label className="label">{label}</label>}
      <input
        className="input"
        type="text"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        autoComplete="off"
        onChange={e => { onChange(e.target.value); setOpen(true) }}
        onFocus={() => setOpen(true)}
      />
      {open && filtered.length > 0 && (
        <div className="dropdown">
          {filtered.map(item => (
            <div
              key={item}
              className="dropdown-item"
              onMouseDown={() => { onSelect(item); setOpen(false) }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
 
export default SearchInput