

import './App.css'

// const Card=({title})=>{
//   return(<>
//   <div className='card'>{title}</div></>)
// }
function renderStatus(status){
  if(status==='online'){
    return<p>🟢 Online</p>
  }
  if(status==='offline'){
    return <p>🔴 Offline</p>;
  }
  //return default value
  return <p>⚪ Unknown</p>;
}
function App() {
  return (
    <>
<div>
  {renderStatus('online')}
  {renderStatus('offline')}
  {renderStatus('busy')}

</div>
    </>
  )
}

export default App
