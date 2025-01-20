const Total = (props) => {
    console.log(props)
    return (
        <div>
            <p>
                Number of exercises {props.course.parts.reduce((total, part) => total + part.exercises, 0)}
            </p>
        </div>
        )
      }
  
export default Total
