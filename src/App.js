import './App.css';
import Card from './components/Card';
import data from "./components/Data";


function App(){
  const cards = data.map(items=>{
    return (
      <Card 
       key={items.id} // always needed in code becuse of js 
       item={items}
      />
    )
  })

  
  return (
  <>
    <div className='card-list'>{cards}</div>
    
    

  </>
  )
  
}


export default App;
