import React,{Component} from 'react'
import axios from 'axios'

class App extends Component{
  constructor(props) {
    super(props);
    this.state={
       recipe:[],
       detail:{},
       totalpage:1,
       page:1
    }
  }
  componentDidMount() {
     axios.get("http://localhost/web/recipe/list.do",{
       params:{
         page:1
       }
     }).then(response=>{
        this.setState({recipe:response.data})
     })
  }
  render() {
     const html=this.state.recipe.map(m=>
         <div className="col-md-3">
           <div className="thumbnail">
               <img src={m.poster} alt="Lights" style={{"width":"100%"}}/>
                 <div className="caption">
                   <p>{m.title}</p>
                 </div>
           </div>
         </div>
     )
    return (
        <div className={"row"}>
          {html}
        </div>
    )
  }
}
export default App;
