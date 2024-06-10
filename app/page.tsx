interface Props{
  params:URLSearchParams
}

export default function Home(props:Props) {
  console.log(props)
  const getOrderForm = () =>{

  }
  return (
    <div>
      <ul>
        {
          Object.values(props).map((p,i) =>(<li key={i}>{p.params}</li>))
        }
      </ul>
    </div>
  );
}
