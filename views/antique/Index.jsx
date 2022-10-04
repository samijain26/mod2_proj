const React = require('react')
const Layout = require('../layout/layout')

class Index extends React.Component {
  render() {
    const  antiqueModel  = this.props.antiqueModel
    console.log(antiqueModel)
    return(
        <Layout title="Listing of available item" group="antiques">
            <div className="wrapper1">
                <div className="header" >
                 <h1 > Antiques  aroud the World</h1>
            <a href="/antique/new">Add new piece in inventiory</a>
          </div>
          <div className="items">
            { antiqueModel.map(antique => {
              const {name, description, _id, origin, price, image} = antique

              return (
                
                <a href={`/antique/${_id}`}  className="item">
                    <li>
                   
                    {/* <span className="bold"><img src ="./images/1664755171217.png"/>Image: </span> */}
                    <span className="bold"><img  className="img" src ={image} /></span>
                  </li>
                  <li>
                    <span className="bold">Name: </span> {name}
                  </li>
                  <li>
                    <span className="bold">Description: </span> {description}
                  </li>
                  <li>
                    <span className="bold">Origin: </span>
                    {origin}
                  </li>
                  <li>
                  <span className="bold">Price: </span>${price}
                  </li>
                  
                </a>
              )
            })}
          </div>
        </div>
      </Layout>
    )
  }
}

module.exports = Index
         
