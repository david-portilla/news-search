import React from 'react'
import useSelect from '../Hooks/useSelect'
import styles from './Form.module.css'

const Form = ({saveCategory}) => {
  const OPTIONS = [
    {value: 'general', label: 'General'},
    {value: 'business', label: 'Business'},
    {value: 'entertainment', label: 'Entertainment'},
    {value: 'health', label: 'Health'},
    {value: 'science', label: 'Science'},
    {value: 'sports', label: 'Sports'},
    {value: 'technology', label: 'Technology'}
  ]

  // useSelect Custom Hook
  const [category, SelectNews] = useSelect('technology', OPTIONS)

  // on submit pass category to app
  const searchNews = e => {
    e.preventDefault()
    saveCategory(category)
  }

  return (
    <div className={`${ styles.searchbar } row`}>
      <div className="col s12 m8 offset-m2">
        <form
          onSubmit={searchNews}
        >
          <h2 className={styles.heading}>Find news by Category</h2>

          <SelectNews />

          <div className="input-field col s12">
            <input
              type="submit"
              className={`${ styles.btn_block } btn-large amber darken-2`}
              value="Search"
            />

          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
