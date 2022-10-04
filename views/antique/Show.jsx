const React = require('react')
const Layout = require('../layout/layout')

class Show extends React.Component {
  render() {
    const { image,name,description,origin,price,_id,createdAt,updatedAt} = this.props.antique
    return (
      <Layout title="Product details" group ="antique">
        <div className='show'>
            <h1>Product Details</h1>
            <a href='/antique'>Back to home page</a>
       <ul className='item' >
         <li>
                    <span className="bold"><img  className="img" src ={image} /></span> 
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
                  <span className="bold">TimeCreated: </span>{String(createdAt)}
                  </li>
                  <li>
                  <span className="bold">TimeUpdated: </span>{String(updatedAt)}
                  </li>
                  <form action={`/antique/${_id}?_method=DELETE`} method ='POST'>
                   <a href={`/antique/${_id}/edit`}>Edit</a>
                   <button typr = "submit" className = "delete">Delete</button>
                  </form>
       </ul>
      
       
    </div>
      </Layout>

    )
    }
}
module.exports = Show