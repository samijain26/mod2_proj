const React = require('react')
const Layout = require('../layout/layout')

class Index extends React.Component {
  render() {
    const  antiqueModel  = this.props.antiqueModel
    console.log(antiqueModel)
    return(
        <Layout title="Listing of available item" group="antiques">
            <div className="wrapper">
                <div className="header">
                 <h1 > Antiques  aroud the World</h1>
            <a href="/antique/new">Add new piece in inventiory</a>
          </div>
          <div className="items">
            { antiqueModel.map(antique => {
              const { name, description,_id, origin ,price} = antique

              return (
                
                <a href={`/antique/${_id}`} key={_id} className="item">
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
                  {/* <li>
                  <span className="bold">Image </span>{image}
                  </li> */}
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
         
