import Header from './Header';
import {useState} from 'react'

function AddProduct()
{
    const [name, setName] = useState("");
    const [file, setFile] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    async function addProduct()
    {
        console.warn(name,file,price,description);
        const formData = new FormData();
        FormData.append("file",file);
        FormData.append("name",name);
        FormData.append("price",price);
        FormData.append("description",description);

        let result = await fetch("http://localhost:8000/api/addproduct",{
            method:'POST'
        });
    }
    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <br/>
                <input type="text" className="form-control" 
                onChange={(e)=>setName(e.target.value)}
                 placeholder="Name" /> 
                <br/>
                <input type="file" className="form-control"
                onChange={(e)=>setFile(e.target.files[0])}
                 placeholder="File" /> 
                <br/>
                <input type="text" className="form-control"
                onChange={(e)=>setPrice(e.target.value)}
                 placeholder="Price" />
                <br/>
                <input type="text" className="form-control"
                onChange={(e)=>setDescription(e.target.value)}
                 placeholder="Description" />
                <br/>
                <button onClick={addProduct} className="btn btn-primary">Add Product</button>
            </div>
        </div>
    )
}

export default AddProduct;