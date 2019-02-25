var filterData = (dataObj, text) => {
  if(text && (text = text.trim()) && text.length && dataObj && dataObj.length){
    text = text.toLowerCase();
    return dataObj.filter((str)=>{
      if(str.toLowerCase().indexOf(text) > -1){
        return str;
      }
    });
  }
  return [];
}

export default filterData;
