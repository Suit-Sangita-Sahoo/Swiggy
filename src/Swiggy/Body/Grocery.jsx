import "./Item.css"
const Grocery = ({ name, src }) => {
  return (
    <div>
       
    <div className="grocery-item">
        
        <div> 
      <img src={src} alt={name} width="100" />
      <p>{name}</p>
      </div>
    </div>
    </div>
  );
};

export default Grocery;
