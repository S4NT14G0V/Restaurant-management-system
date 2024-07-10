import React ,{useEffect,useState}from 'react'
import MesaItem from "./MesaItem"
import '../css/mesas.css'
import {apiUrls} from "../pages/ApiUrls"

export default function Mesas() {

  const [mesas, setMesas] = useState([]);

  useEffect(() => {
    fetchMesas();
  }, []);

  const fetchMesas = async () => {
    try {
      const response = await fetch(apiUrls.table.all); 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setMesas(data);
    } catch (error) {
      console.error('Error fetching mesas:', error);
    }
  };

  return (
    <div className="mesas-menu">
      <MesaItem capacity={5} id={1} price="123" stateItem={0} />
      <MesaItem capacity={5} id={1} price="123" stateItem={0} />
      <MesaItem capacity={5} id={1} price="123" stateItem={1} />
      <MesaItem capacity={5} id={1} price="123" stateItem={2} />
      <MesaItem capacity={5} id={1} price="123" stateItem={0} />
      <MesaItem capacity={5} id={1} price="123" stateItem={1} />
      <MesaItem capacity={5} id={1} price="123" stateItem={2} />
      <MesaItem capacity={5} id={1} price="123" stateItem={1} />
      <MesaItem capacity={5} id={1} price="123" stateItem={2} />
      
    </div>
  );
}
