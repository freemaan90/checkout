export interface Props {
  searchParams: SearchParams;
}

export interface PropsClass {
  params: Params;
  searchParams: SearchParams;
}

export interface Params {
}

export interface SearchParams {
  of: string;
  auto: string;
}


export default function Home({searchParams}: Props) {
  // const entries = Object.entries(props)
  console.log(searchParams)


  return (
    <div>
      <ul>
        {
          Object.values(searchParams).map((p,i) => {
            console.log(`p: `,p)
            return Object.keys(searchParams)[i] === 'of' ? <div key={p}>{p}</div> : <div key={p}></div>
          })

        }
      </ul>
    </div>
  );
}
