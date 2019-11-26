import React,{Component} from 'react'
import './toso.css'

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>                        
                            </button>
                        <a className="navbar-brand" href="#">
                            <img src="../facebook.png" alt="facebooklogo" width="30px" height="20px" />
                        </a>
                        <p className="navbar-text">Facebook</p>
                    </div>
                </div>
            </nav>
        )
        }
    }
export default Navbar