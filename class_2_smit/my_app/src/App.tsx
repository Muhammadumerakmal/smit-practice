import { useState } from "react";
import { supabase } from "./dbfunction/func";

export default function App() {
  
  const [space, setSpace] = useState<any>([]);
  const [spaceModal, setSpaceModal] = useState(false);
  const [spaceObj, setSpaceObj] = useState<any>({});


  const GetSpace = async () =>{
    const {data,error} = await supabase.from("space").select("*").then((res)=>{
      setSpace(res.data || []);
    })
    if(error){
      console.log(error);
    }
  }

return <>
    






</>
}