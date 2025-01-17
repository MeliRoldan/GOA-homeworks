import './main.css'

function Card(props) {
  return (
    <div key={props.key} className='card-div'>
        <h4>{props.name}</h4>
        <p>{props.price}</p>
        <img src={props.image} alt={props.name} width='100px' height='100px'/>
    </div>
  )
}

export default Card