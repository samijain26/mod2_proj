
const React = require('react')
const Layout = require('../layout/layout')

class New extends React.Component {
  render() {
    return (
      <Layout title='Add New Product' group ="antiques">
        <div className="wrapper">
          <h1>Add New Product</h1>
          {/* <form action="/antique" encType="multipart/form-data" method="POST"> */}
             <form action="/antique"  method="POST"> 

            <div className="form-control">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="enter title.."
                required
              />
            </div>
            <div className="form-control ">
              <label htmlFor="description">Description:</label>
              <textarea name="description" id="description" cols="30" rows="5" placeholder="enter entry.."
                required></textarea>
              
            </div>
            <div className="form-control " >
              <label htmlFor="Origin" >Origin:</label>
              <input type="text" id="origin" name="origin" />
            </div>
            <div className="form-control" >
              <label htmlFor="price" >Price:</label>
              <input type="number" id="price" name="price" />
            </div>
            <div className="form-control" >
              <label htmlFor="price" >Quantity:</label>
              <input type="number" id="quantity" name="quantity" />
            </div>
            <div className="form-control" >
              <label htmlFor="image" >Image:</label>
              <input type="text" id="image" name="image" />
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

module.exports = New
