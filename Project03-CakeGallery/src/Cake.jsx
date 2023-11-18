/* eslint-disable react/prop-types */

export default function Cake(props) {
  // /console.log("props :",props)
  return (
    <div className="card">
      <img
        src={"../src/images/" + props.cake.image}
        className="card-img-top"
        alt="..."
        style={{width: "600px",height: "600px"}}
      />
      <div className="card-body text-align:center">
        <h5 className="card-title">{props.cake.name}</h5>
        <p className="card-text">Rs. {props.cake.price}</p>
        <a href="#" className="btn btn-primary">
          Add To Cart
        </a>
      </div>
    </div>
  );
}