import React, { Component } from 'react';
import  'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import axios from 'axios';




class ListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],



        }
    }
    componentDidMount() {
        axios.get('http://localhost:3000/users').then(res => {
            this.setState({ data: res.data });
        });
        $(document).ready(function () {
            setTimeout(function () {
                $('#example').DataTable();
            }, 1000);
        });
    }
    render() {
        return (
            <div className="MainDiv">
                <div class="jumbotron text-center">
                    <h3>LaraTutorials.com</h3>
                </div>





                <div className="container">





                    <table id="example" class="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((result) => {
                                return (





                                    <tr>
                                        <td>{result.id}</td>
                                        <td>{result.pname}</td>
                                        <td>{result.qty}</td>
                                        <td>{result.price}</td>
                                    </tr>





                                )
                            })}






                        </tbody>
                    </table>





                </div>
            </div>
        );
    }
}
export default ListComponent;