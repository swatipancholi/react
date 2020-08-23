import React,{Component} from 'react';
import './Avatar.css';
import  Avatarlist from './Avatarlist';
import 'tachyons';


    class Avatar extends Component{
       constructor(){
           super();
           this.state = {
               name:"welcome to my world"
           }
       }

       namechange(){
           this.setState({
               name:"welcome to your world"
           })
       }
        render(){
             const avatarlistarray =[
        {
            id:1,
            name:"tanu",
            work:"ladai"
        },
         {
            id:2,
            name:"singh",
            work:"ladai"
        },
         {
            id:3,
            name:"bahadur",
            work:"ladai"
        },
         {
            id:4,
            name:"nanu",
            work:"ladai"
        }
    ]
    const arraycard = avatarlistarray.map( (avatarcard,i) => {
        return <Avatarlist key={i} id={avatarlistarray[i].name}
                         name={avatarlistarray[i].name}
                         work={avatarlistarray[i].work}/> 
    })

             return (
        <div className="mainpage">
        <h1>{this.state.name}</h1>
            {arraycard} 
        <button onClick = { () => this.namechange() }>subscribe</button>
        </div>
     )
    }
}
export default Avatar;