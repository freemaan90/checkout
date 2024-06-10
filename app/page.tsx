interface Props{
  params:URLSearchParams
}

export default function Home(props:Props) {
  console.log(props)
  const getOrderForm = () =>{

  }
  return (
    <div>
      {props.params.toString()}
    </div>
  );
}
