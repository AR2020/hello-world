import React, {Component} from 'react';


const Greet=props=>
{
    const{name,fName}=props
    return(
        <div>
            <h1>The {name} a.k.a {fName}</h1>
        </div>

    )
}
// class Greet extends Component{
//     render(){
//         return (
        
//         <div>
//         <h1>Hello {this.props.name} a.k.a {this.props.fName}</h1>
//         {this.props.children}
//         </div>
//             );
//     }
    
// }
export default Greet;