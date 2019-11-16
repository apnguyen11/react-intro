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


//starting out count vall is zero

class Counter extends React.Component{
    state={
        count:0,
        color: "blue"
    }
    handleAdd= ()=>{
        this.setState({
            count:this.state.count +1
            
        }
            
        )
    }
    handleToggle=()=>{
        // const color1 = (this.state.color === 'blue')?"green" : "blue";

        let color = "blue"
        if(this.state.color === 'blue'){
            color = 'green'
        } 

        this.setState({
            color:color
        })

    }
    render(){
        console.log('this render step in the lifecylce is happening', this.state)
        return(
            <div>
                <h1 style={{
                    color: this.state.color
                }}>Hello{this.props.name}</h1>
                <p>The count is {this.state.count}</p>
                <button onClick = {this.handleToggle}>Toggle</button>
                <button onClick={this.handleAdd}>Add</button>
            </div>
            
        )

    }
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
// const App = function(){
//     const component = new HelloClass({name: 'joey is cool'})
//     return (
//         <div>
//             <p>functional example</p>
//             <Hello name="WaterMeolon"/>
//             <HelloClass name="Banana"/>
//             <p>class example</p>
//             {new HelloClass({name: "New instantiated banana"}).render()}
//             {component.render()}
//         </div>
//     )
// }
const App = function(){
   
    return (
        <div>
            <Counter name="first counter"/>
            <Counter name="first counter"/>
            <Counter name="first counter"/>
        </div>
    )
}

// const App = () => {
//     return <div className="container">
//         <HelloWorld/>
//     </div>
// }

class HelloClass extends React.Component{
    componentDidMount(){
        //methods in react 
        console.log("A helloclass component just mounted with propes", this .props)
    }
    componentWillUnmount(){
        console.log("this is the component about to be unmounted")
    }
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

