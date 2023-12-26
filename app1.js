import './App.css';

const products = [
  {
  id: 1,
  title: 'PC Portable Gamer HP VICTUS',
  price: '7490 DH',
  thumbnail : 'IMG/HP16D0195NF.png'
  },
  {
  id: 2,
  title: 'PC Portable Gamer HP VICTUS',
  price: '2190 DH',
  thumbnail : 'IMG/HP14424U3EA.jpeg'
  },
  {
  id: 3,
  title: 'Pc Portable Chromebook Acer',
  price: '3640 DH',
  thumbnail: 'IMG/NXATHEF002.jpeg'
  },
  {
  id: 4,
  title: 'PC Portable - HUAWEI',
  price: '1270 DH',
  thumbnail: 'IMG/HUA6901443442959.jpeg'
  },
  ];
  


function Product(props) {
  return (

    <div className='products'>
      {
      props.elems.map((e,index)=>{
      return (
      <div className='oneproduct' key={index}>
        <img src={e.thumbnail} alt=""/>
        <p>{e.title}</p>
        <p>{e.price}</p>
        <button>ajouter au panier</button>

      </div>      
      )
    })
      }
    </div>
  );

}

function App() {
  return (
    <div className="App">
      <Product elems={products}/>
      
    </div>
  );
}

export default App;