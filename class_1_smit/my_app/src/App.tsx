import { useState } from "react";
import supabase from "./dbconfig/config";

export default function Chatapp() {

const [data,setData] = useState<any[]>([])

  const post = async ()=> {
   const {error} = await supabase.from("chat") .insert([
        {
          title: "hello world",
          description: "hello world etccccc",
          status: "pending",
        }
      ]);
       console.log(error);
  }

  const get = async ()=> {
    const {data,error} = await supabase.from("chat").select("*")
    console.log(data);
  }

  const del = async (id:number)=> {
    const {error} = await supabase.from("chat").delete().eq("id",id)
    console.log(error);
    get()
  }


  return<>
  <button onClick={get}>Get</button>
  <button onClick={post}>Post</button>
  
 { data.map((item)=><div key={item.id}>
    <h1>{item.title}</h1>
    <h1>{item.description}</h1>
    <h1>{item.id}</h1>
    <h1>{item.status}</h1>
    <button onClick={()=>del(item.id)}>Delete</button>
  </div>)}  
 
 
  </>

}