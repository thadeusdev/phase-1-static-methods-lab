class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.toLowerCase().replace(/[^A-Za-z0-9-']+/g, "");
  }
  static titleize(string){
    return string.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()); 
    
  }
}