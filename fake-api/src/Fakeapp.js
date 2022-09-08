import axios from 'axios';
import React, { useEffect,useState } from 'react'

function Fakeapp() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            setProducts(res.data);
        })
    }, [])
    return (
        <div className="container">
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <td className='one'>Product Id</td>
                        <td className='one'>Image</td>
                        <td className='one'>Description</td>
                        <td className='one'>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(res => {
                            return (
                                <tr key={res.id}>
                                    <td>{res.id}</td>
                                    <td><img src={res.image} alt={res.id} style={{ height: "200px", width: "200px" }} /></td>
                                    <td>{res.description}</td>

                                    <td>{res.price}</td>

                                </tr>

                            )

                        })

                    }



                </tbody>

            </table>



        </div>
    )}
         export default Fakeapp
