import * as React from 'react';
import * as ReactDom from 'react-dom';

export class Book extends React.Component<{},IBookState>{
     constructor(props) {
        super(props)

        //declare initial state
        this.state={
            book:{
                name:'',
                description:'',
                category:'',
                price:0,
                publisheddate:null
            }
        }
     }
     render(){        
         return <React.Fragment>
            <h5>Manage Book</h5>
            <form>
            <div className="form-group row mb-1">
                <label className="col-sm-3 col-form-label">Book Name:</label>
                    <div className="col-sm-9">
                        <input type="text" 
                                id="bookname" 
                                className="form-control"
                                name="bookname" 
                                placeholder="Book name" 
                                onChange={(e)=>{
                                    //collect the textbox current value
                                    var val=e.target.value;
                                    //using react setState() function to update
                                    //name property of the state->book object
                                    this.setState(prevState=>({
                                        book:{ ...prevState.book,
                                            name:val}
                                    }))
                                }}
                                value={this.state.book.name}
                                />
                    </div>
                </div>
                <div className="form-group row mb-1">
                    <label className="col-sm-3 col-form-label">Description:</label>
                    <div className="col-sm-9">                
                        <input type="text" 
                            id="description"
                            className="form-control" 
                            name="description" 
                            placeholder="Book description"
                            onChange={(e)=>{
                                var val=e.target.value;
                                this.setState(prevState=>({
                                    book:{...prevState.book,description:val}
                                }))
                            }}
                            value={this.state.book.description}
                            />
                    </div>
                </div>
                <div className="form-group row mb-1">
                    <label className="col-sm-3 col-form-label">Category:</label>
                    <div className="col-sm-9"> 
                        <select id="category" 
                            onChange={(e)=>{
                                var val=e.target.value;
                                this.setState(prevState=>({
                                    book:{...prevState.book,category:val}
                                }))
                            }}
                            value={this.state.book.category}
                            className="form-control"
                            >
                            <option>--select--</option>
                            <option>Fiction</option>
                            <option>Story</option>
                            <option>Adventure</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row mb-1">
                    <label className="col-sm-3 col-form-label">Price:</label>
                    <div className="col-sm-9">
                        <input type="number" 
                            id="price" 
                            className="form-control" 
                            placeholder="Price" 
                            value={this.state.book.price}
                            onChange={(e)=>{
                                //a special momant, since the state price
                                //property is number we need to use parseFloat()
                                //function to convert the text value in number
                                var val=parseFloat(e.target.value);
                                this.setState(prevState=>({
                                    book:{...prevState.book,price:val}
                                }))
                            }}
                            />
                    </div>
                </div>
                <div className="form-group row mb-1">
                    <label className="col-sm-3 col-form-label">Date published:</label>
                    <div className="col-sm-5">
                        <input type="date"
                            id="datepublished"
                            className="form-control"
                            placeholder="Date published" 
                            value={this.state.book.publisheddate}
                            onChange={(e)=>{
                                var val=e.target.value;
                                this.setState(prevState=>({
                                    book:{...prevState.book,publisheddate:val}
                                }))
                            }}
                            />
                    </div> 
                </div>                 
                <div className="text-right">
                    <button type="button"
                        className="btn btn-success mr-2"
                        onClick={(e)=>{
                            console.log(this.state.book);
                        }}
                    >Submit</button>
                    <button 
                    className="btn btn-danger"
                    type="button">Cancel</button>
                </div>   
            </form>            
            <h5>Book State</h5>
            <table className="table table-bordered">
                <tr>
                    <td>Name</td>
                    <td>{this.state.book.name}</td>
                </tr>
                <tr>
                    <td>Description</td>
                    <td>{this.state.book.description}</td>
                </tr>
                <tr>
                    <td>Category</td>
                    <td>{this.state.book.category}</td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td>{this.state.book.price}</td>
                </tr>
                <tr>
                    <td>Published Date</td>
                    <td>{this.state.book.publisheddate}</td>
                </tr>
            </table>
            
         </React.Fragment>
     }
 }
 //State interface
 interface IBookState{
     book:{
         name:string;
         description:string;
         category:string;
         price:number;
         publisheddate:any;
     }
 }
 export default Book;