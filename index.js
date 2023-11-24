const reactContentRoot = document.getElementById("root");

/*
const myFirstElement = React.createElement('ul', null, 
[
    React.createElement('li', null, 'item1'),
    React.createElement('li', null, 'item2'),
    React.createElement('li', null, 'item3')
])
*/

//JSX
/*
const myItem ='Item4'
const myJSXElement = (
    <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3 {myItem}</li>
        <li>{myItem.toUpperCase()}</li>
    </ul>
)
*/
//Rendering a function
const App = () => {
    const myItem ='Item4'
    
    return (
        <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3 {myItem}</li>
        <li>{myItem.toUpperCase()}</li>
    </ul>  
    )
}

ReactDOM.render(App(), reactContentRoot);