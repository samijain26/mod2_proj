const React = require("react");
const Layout = require("../layout/layout");

class Show extends React.Component {
  render() {
    const {
      image,
      name,
      description,
      origin,
      price,
      _id,
      quantity,
      createdAt,
      updatedAt,
    } = this.props.antique;

    // if (quantity > 0){
    //   flag=false
    // }
    return (
      <Layout title="Product details" group="antique">
        <div className="show">
          <h1>{name}</h1>

          <ul className="item">
            <li>
              <span className="bold">
                <img className="imgShow" src={image} />
              </span>
            </li>
            <li>
              <span className="bold">Name: </span> {name}
            </li>
            <li>
              <span className="bold">Description: </span>
              {description}
            </li>
            <li>
              <span className="bold">Origin: </span>
              {origin}
            </li>
            <li>
              <span className="bold">Price: $</span>
              {price}
            </li>
            <li>
              <span className="bold">Quantity: </span>
              {quantity > 0 ? quantity : "Out of Stock"}
            </li>

            <li>
              <span className="bold">TimeCreated: </span>
              {String(createdAt.toDateString())}
            </li>
            <li>
              <span className="bold">TimeUpdated: </span>
              {String(updatedAt.toDateString())}
            </li>
            <div className="lineup">
            {/* <button className="btn1"> */}
             <div  className="btn1" >
             <a href={`/antique/${_id}/edit`}>Edit</a>
             </div>
                  
                {/* </button> */}
              <form action={`/antique/${_id}?_method=DELETE`} method="POST">
                

                <button type="submit" className="delete ">
                  Delete
                </button>
              </form>
              {quantity > 0 ? (
                <form
                  action={`/antique/${_id}/purchase?_method=PUT`}
                  method="POST">
                
                  <button className="purchase" type="submit" value="purchase">
                    Purchase
                  </button>
                </form>
              ) : (
                ""
              )}
             
                {/* <button className= "goback">  */}
                <a className="btn1" href="/antique">Back</a>
                {/* </button> */}
              
            </div>
          </ul>
        </div>
      </Layout>
    );
  }
}
module.exports = Show;
