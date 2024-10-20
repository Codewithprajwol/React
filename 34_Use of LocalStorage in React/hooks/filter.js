import React, { useState } from 'react'
import { useLocalStorage } from './useLocalStorage';

export  function useFilter(dataList,callback) {
  const [query,setQuery]=useLocalStorage('query','');
  // console.log(query)
  // let test=JSON.parse(localStorage.getItem('query'))
  // // console.log(test)
  // // test[0].toUpperCase()+test.substring(1)
 
  const filteredData=(dataList.filter((data)=>callback(data).toLowerCase().includes(query)))
  return [filteredData,setQuery];

 
}
