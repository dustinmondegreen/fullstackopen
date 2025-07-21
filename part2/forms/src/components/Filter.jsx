const Filter = ({newfilter, setFilter}) => {
  const filterHandler = (event) => setFilter(event.target.value)
  return(
    <p>filter shown with <input value={newfilter} onChange={filterHandler}/></p>
  )
}

export default Filter