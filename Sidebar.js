import React, {Component} from 'react'


class Sidebar extends Component{
    render(){
        return(
        <div>
            <div className="container-fluid text-center">    
                <div className="row content">
                    <div className="col-sm-3">
                        <div className="sidenav1 collapse navbar-collapse" id="myNavbar">
                            <p align="left"><a><span className="glyphicon glyphicon-user" >AsgarHussain</span></a></p>
                            <p align="left"><a href="#" ><span className="glyphicon glyphicon-film">NewsFeed</span></a></p>
                            <p align="left"><a href="#"><span className="glyphicon glyphicon-comment">Messenger</span></a></p>
                            <p align="left"><a href="#"><span className="glyphicon glyphicon-book">Watch</span></a></p>
                            <p align="left"><a href="#"><span className="glyphicon glyphicon-king">Market Place</span></a></p>
                            <p align="left"><a href="#"><span>Explore</span></a></p>
                            <p align="left"><a href="#"><span className="glyphicon glyphicon-king">Groups</span></a></p>
                            <p align="left"><a href="#"><span className="glyphicon glyphicon-hdd">Pages</span></a></p>
                            <p align="left"><a href="#"><span className="glyphicon glyphicon-calendar">Events</span></a></p>
                            <p align="left"><a href="#"><span className="glyphicon glyphicon-user">Friendslist</span></a></p>
                            <p align="left"><a href="#"><span className="glyphicon glyphicon-chevron-down">Seemore</span></a></p>

                        </div>
                    </div>
                    <div className="col-sm-6 text-left"> 
                        <h1>Welcome</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                         nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat 
                         cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                         anim id est laborum consectetur adipiscing elit, sed do eiusmod 
                         tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                         ex ea commodo consequat.
                         </p>
                        <hr/>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <hr/>
                        <p>Lorem ipsum...</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <hr/>
                        <p>Lorem ipsum...</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <hr/>
                        <p>Lorem ipsum...</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <hr/>
                        <h3>Test</h3>
                        <p>Lorem ipsum...</p>
                    </div>
                    <div className="col-sm-3 sidenav2">
                        <div className="well">
                            <img src="..//photo1.jpg" height="200px" width="250px" />
                        </div>
                        <div className="well">
                        <img  id="wrap img"src="..//pineapple.jpg" height="200px" width="250px" />
                        </div>
                        <div className="well">
                        <img  id="wrap img"src="..//ar.jpg" height="200px" width="250px" />
                        </div>
                        <div className="well">
                        <img  id="wrap img"src="..//balloon.jpg" height="200px" width="250px" />
                        </div>
                        <div className="well">
                        <img  id="wrap img"src="..//happy.jpg" height="200px" width="250px" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
    }
}
export default Sidebar