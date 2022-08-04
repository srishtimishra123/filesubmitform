import React, { useState } from "react";
import './FormValidate1.css'

const FormValidate1 = () => {

    const[customer,setCustomer]=useState({
        Date:"",Amount:"",PaymentMode:"Cash",Remarks:""
    })
    const [users, setUsers] = useState([]);

    const handleChange=(e)=>{
        // const name=e.target.name;
        // const value=e.target.value;
        const{name,value}=e.target;
        setCustomer({...customer,[name]:value})
    }

    const submitClick=(e)=>{
        e.preventDefault();
        if(customer.Date && customer.Amount && customer.PaymentMode && customer.Remarks ){
            const newCustomer={id:new Date().getTime().toString(), ...customer};
            setUsers([...users,newCustomer]);
            setCustomer({Date:'',Amount:'',PaymentMode:'',Remarks:''});
        }
    }

    const deleteClick = (index) => {
        let deleteItem = users.filter((ele) => {
            return index !== ele.id;
        })
        setUsers(deleteClick)
    }
    return (
        <div className="container w-50">
            <h2>Receipt Details</h2>
            <form className="form bg-danger p-3 rounded">
                <div className="myform">
            <label  className="mb-0 mt-2" style={{marginRight:"220px"}}>Date:</label>
                <input
                    type="date"
                    value={customer.Date}
                    name="Date"
                    id=""
                    className="form-control  mt-1"
                    placeholder="Enter Date"
                    onChange={  handleChange }
                />
                <br/>
                <label  className="mb-0 mt-2" style={{marginRight:"196px"}}>Amount:</label>
                <input
                    type="text"
                    value={customer.Amount}
                    name="Amount"
                    id=""
                    className="form-control  mt-1"
                    placeholder="Enter Amount (in INR)"
                    onChange={  handleChange }
                />
                <br/>
                <label  className="mb-0 mt-2" style={{marginRight:"145px"}}>Payment Mode:</label>
                <select name="PaymentMode" id="" value={customer.PaymentMode} onChange={  handleChange } >
                <option value="Cash">Cash</option>
                <option value="Net Banking">Net Banking</option>
                <option value="UPI">UPI</option>
                </select>
                
                <br/>
                <label  className="mb-0 mt-2" style={{marginRight:"200px"}}>Remark:</label>
                <input
                    type="text"
                    value={customer.Remarks}
                    name="Remarks"
                    id=""
                    className="form-control  mt-1"
                    placeholder="Enter Remarks"
                    onChange={ handleChange }
                />
                
                <div className="text-center">
                    <button type="submit" className="custom-btn btn-5 mt-1 "
                        onClick={submitClick} style={{marginLeft:"200px"}}>Cancel</button> 
                    <button type="submit" className="custom-btn btn-10" 
                        onClick={submitClick} style={{marginLeft:"50px"}}>Submit</button>  
                </div>
                </div>
                
            </form>
            <div>
                {users.map((user) => {
                    return (
                        <div className="bg-success p-2 text-white  mt-2 rounded-1" key={user.id}>
                            <div>
                                <i className="fa fa-trash-alt" style={{ float: "right" }}></i>
                                {/* <p className="ml-3">ID:{user.id}</p> */}
                                <p className="ml-3">Date: {user.Date}</p>
                                <p className="ml-3">Amount: {user.Amount}</p>
                                <p className="ml-3">Payment Mode:{user.PaymentMode}</p>
                                <p className="ml-3">Remarks:{user.Remarks}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default FormValidate1;