function HelloWorld(){
    return <h1> Hello World</h1>
}

// function App(){

// }

const List = function(props){
    return (
        <div>
            <p>This {props.name}'s list of things to do</p>
            <ul>
                <li></li>
            </ul>
        </div>
    )
}
const Hello = function(props){
    return(
        <div>
            <h1>
                Hello {props.name}
            </h1>
            <List name={props.name}/>
        </div>
    )
}
const App = function(){
    return (
        <div>
            <Hello name="WaterMeolon"/>
            <HelloClass name="Banana"/>
            {new HelloClass({name: "New instantiated banana"}).render()}
          
        </div>
    )
}

// const App = () => {
//     return <div className="container">
//         <HelloWorld/>
//     </div>
// }

class HelloClass extends React.Component{
    render(){
        return(
            <div>
            <h1>
                Hello {this.props.name}
            </h1>
            <List name={this.props.name}/>
        </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))

