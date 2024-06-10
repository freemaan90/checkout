export interface Props {
  searchParams: SearchParams;
}
export interface SearchParams {
  of: string;
}

export interface ClientProfileData {
  clientProfileData: ClientProfileDataClass;
}

export interface ClientProfileDataClass {
  email:                    string;
  firstName:                string;
  lastName:                 string;
  document:                 number;
  documentType:             string;
  phone:                    number;
  corporateName:            null;
  tradeName:                null;
  corporateDocument:        null;
  stateInscription:         null;
  corporatePhone:           null;
  isCorporate:              boolean;
  profileCompleteOnLoading: boolean;
  profileErrorOnLoading:    boolean;
  customerClass:            null;
}


export default async function Home({searchParams}: Props) {

  const getOrderForm = async(orderFormId:string)=>{
    const baseURL = `https://jumboargentinaqaio.myvtex.com/api/checkout/pub/orderForm/${orderFormId}`
    const orderForm = await fetch(baseURL).then(resp => resp.json())
    return orderForm
  }

  const of = Object.values(searchParams).filter((p,i) => {
    return Object.keys(searchParams)[i] === 'of' && p
  })[0]

  const { clientProfileData}:ClientProfileData = await getOrderForm(of)
  
  return (
    <ul>
      {
        Object.values(clientProfileData).map((value,i) => (
          <li key={i}>{Object.keys(clientProfileData)[i]} : {value}</li>
        ))
      }
    </ul>
  );
}
