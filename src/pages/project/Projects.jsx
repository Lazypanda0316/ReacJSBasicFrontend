import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClearError } from "../../redux/features/authSlice/authSlice";
import { getProducts } from "../../redux/actionSlice/authAction/authAction";

const Projects = () => {

  const {isLoading,error,products} = useSelector((state)=>state.auth)
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])

  useEffect(()=>{
    if(error){
      dispatch(setClearError())
    }
  },[dispatch,error])

  

  if(isLoading){
    return <h1>Loading....</h1>
  }

return(
  <div>
    {products?.map((item)=>(
      <div key={item.id}>
        <h1>{item.name}</h1>
        <p>{item.descriptions}</p>
        <p>{item.price}</p>
        <img src={item.image}alt={item.name}/>
      </div>
    )
    )}
  </div>
)
}

 

export default Projects;
