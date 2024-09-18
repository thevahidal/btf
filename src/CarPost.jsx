function CarPost(props) {
  return (
    <div style={{
      display: "flex", flexDirection: "column",
      border: "1px solid",
      margin: "5px"
    }}>
      <img
        src={props.carImage}
        width="200px"
      />
      <div>
        {props.brandModel}
      </div>
      <div>
        {props.carPrice} T
      </div>

    </div>
  )
}

export default CarPost
