// import React from "react";
// import { connect } from "react-redux";

// class Counter extends React.Component {
//     render(){
//         return (
        
//         <div>
//             Counter: {this.props.counter}
//             <br></br>
//             <button onClick={this.props.inc}>-</button>
//             <button onClick={this.props.add}>+</button>
//         </div>
//         );
//     }
// }

// const mapDispatch =(dispatch) =>{
//     return{
//         inc : ()=> dispatch({type :'inc'}),
//         add : ()=> dispatch({type :'add'})

//     }
// }

// const map =(state) =>{
//     return{
//         counter :state.counter
//     }
// }

// export default connect(map, mapDispatch)(Counter);