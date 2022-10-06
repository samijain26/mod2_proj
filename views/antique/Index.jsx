const React = require('react')
const Layout = require('../layout/layout')

class Index extends React.Component {
  render() {
    const  antiqueModel  = this.props.antiqueModel
    
    return(
        <Layout title="Listing of available item" group="antiques">
          
            <div className="wrapper1">
                <div className="header" >
                 <img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPWtfgPbSveBJ2-g_Nkznsm3kGiV_WUS1EHQ&usqp=CAU"/>
                  Jewels of India
                 <button className='btn1'><a href="/antique/new">Add New</a></button>
                 </div>
           
          {/* </div> */}
          <div className="items">
            { antiqueModel.map(antique => {
              const {name, description, _id, origin, price, image,quantity} = antique

              return (
                
                <a href={`/antique/${_id}`} key={_id} className="item">
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
                  <li>
                  <span className="bold">Quantity: </span>{quantity>0 ? quantity : 'Out of Stock'}
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
         
