import React, {Component} from 'react';

getNumbers = () =>{

}

class NumberBaseball extends Component{
    state = {
        result:'',
        value:'',
        answer:getNumbers(),
        tries : [],
    }
    onChange = () => {

    }
    onSubmit = () =>{

    }
    render(){
        return(
          <>
           <h1>{this.state.result}</h1>
           <form onSubmit={this.onSubmit}>
               <input maxLength={4} value={this.state.value} onChange= {this.onChange}/>
           </form>
           <div>시도: {this.state.tries.length}</div>
           <ul>
               {['like','like','like','like','like'].map(()=>{
                   return (
                    <li>like</li>
                   );
               })}
           </ul>
          </>
        ); 
    }
}
export default NumberBaseball;