const Header = (props) => {
    console.log(props)
    return (
      <div>
        <h1>Header {props.course.name}</h1>
      </div>
    )
  }

export default Header
