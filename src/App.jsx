

import './App.css'
const FruitsList=()=>{
  const fruits=['apple','banana','cherry','pears','pineapple','passion','mangoes','watermelon','tomatoes','onions','carrots'];
  //render in the ui 
  //list the items
  return<ul>{fruits.map((fruit,index)=>{
    //get fruit name
    //index
    console.log(`Fruit name: ${fruit},Index: ${index}`)
  return<li key={`${fruit}-${index}`}>{fruit}</li>})}</ul>
}
const App=()=>{
  return(
  <>
  <FruitsList/>
  
  </>)
}
export default App