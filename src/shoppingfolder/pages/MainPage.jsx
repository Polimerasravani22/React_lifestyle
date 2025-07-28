import React,{ useState} from 'react'
import Header from '../component/Header'
import Banner from '../component/Banner'   
import Collection from '../component/Collection'
import Footer from '../component/Footer' 

import{Gents,Ladies} from '../data'
import WomenFashion from '../component/WomenFashion'
/*Why ../data is coming back from Mainpage and another . for data.js */
const MainPage = () => {
  const [gentsFashion,setGentsFashion] = useState(Gents);
  const [ladiesFashion,setLadiesFashion] = useState(Ladies);
  console.log(Gents)
  return (
    <div>
      <Header/>
      <Banner/>
      <Collection gentsFashion={gentsFashion} />  
      <WomenFashion ladiesFashion={ladiesFashion}/>
      <Footer />

  </div>
  )
}

export default MainPage