function Box(props) {
  return (
    <div style={{
      backgroundColor: 'limegreen',
      padding: '10px',
    }}>
      I'm {props.name} and my age is {props.age}
    </div>
  )
}

export default Box
