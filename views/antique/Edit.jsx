const React = require('react')
const Layout = require('../layout/layout')

class Edit extends React.Component {
  render() {

    const { image,name,description,price,origin,_id,quantity} =this.props.antique
    return (
      <Layout title='Edit Product' group ="antique">
        <div className="wrapper">
          <h1>Edit Product</h1>
          <form action={`/antique/${_id}?_method=PUT`} method="POST">
            <div className="form-control">
              <label htmlFor="title">Image:</label>
              <input
                type="text"
                id="image"
                name="image"
                placeholder="enter new image.."
                defaultValue={image}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="enter new name.."
                defaultValue={name}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="description">Description:</label>
              <textarea name="description" id="description" cols="30" rows="10" placeholder="enter entry.."
              defaultValue={description}
                required></textarea>
             
            </div>
            <div className="form-control" >
              <label htmlFor="origin" >Origin:</label>
              <input type="text" id="origin" name="origin" 
              defaultValue={origin}/>
            </div>
            <div className="form-control" >
              <label htmlFor="price" >Price:</label>
              <input type="text" id="price" name="price" 
              defaultValue={price}/>
            </div>
            <div className="form-control" >
              <label htmlFor="quantity" >Quantity:</label>
              <input type="text" id="quantity" name="quantity" 
              defaultValue={quantity}/>
            </div>
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </Layout>
    )
  }
}

module.exports = Edit
