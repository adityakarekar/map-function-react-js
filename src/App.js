import logo from './logo.svg';
import './App.css';
import './Adi.css';

function App() {
  
  const allowedState=
  [
  {Mycar: "BMW",Owner:"abc"},
  {Mycar: "Tesla",Owner:"Elon"},
  {Mycar: "Tata",Owner:"Ratan Tata"},
  ]
  
  return (
    <div>
    <h1> Select Tag (Dropdown button) </h1>

    <select>

    {allowedState.map((i,index)=>(
    <option key={i.id}>{i.Mycar}</option>  
    ))}
    </select>


    <h1> ol Tag (ordered list) </h1>

    <ol>

    {allowedState.map((i,index)=>(
    <li key={i.id}>{i.Mycar}</li>  
    ))}
    </ol>




    <h1> ul Tag (unordered list) </h1>

<ul>

 {allowedState.map((i,index)=>(
<li key={i.id}>{i.Mycar}</li>  
))}
</ul>

<table className="border">

     <tr> 
      <td> Sr No</td> 
       <td>Name</td> 
       <td> Owner Name</td> 
        
     </tr>

     
     {allowedState.map((i,index)=>(
     <tr>
       <td key={i.id}>{index+1}</td>
       <td key={i.id}>{i.Mycar}</td>
       <td key={i.id}>{i.Owner}</td>
       
       </tr>  
))}
   



</table>



    </div>
  );
}

export default App;
