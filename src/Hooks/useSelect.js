import React, {useState} from 'react'

const useSelect = (initialState, options) => {

  //Hook Initial State
  const [state, updateState] = useState('')

  const SelectNews = () => (
    <select
      className="browser-default"
    >
      <option value="">Select an option</option>
    </select>
  )

  return [state, SelectNews]
}

export default useSelect
