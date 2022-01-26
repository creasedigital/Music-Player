import { createContext, useState, useEffect } from "react";


export const MusicContext = createContext();
//Data was fetched from last.fm API

const MusicContextProvider = (props) => {
  
  const BASE_URL = "http://ws.audioscrobbler.com/2.0";
  const API_Key = "0512725adcd9204c97e5a32fc501e14b";

  const [method, setMethod] = useState('');



  return(
    <MusicContext.Provider value={}>
      {props.children}
    </MusicContext.Provider>
  )



}

export default MusicContextProvider;