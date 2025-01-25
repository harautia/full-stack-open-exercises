const Total = (props) => {
    console.log(props)
    return (
        <div>
            <h4> Number of exercises {props.course.parts.reduce((total, part) => total + part.exercises, 0)} </h4>
        </div>
        )
      }
  
export default Total
