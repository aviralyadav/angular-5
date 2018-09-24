var names = ["Andrew", "cars.com","aviral", "autotrader","cars.com","zanyy",  "Chris" ,"John"];
var old = names.slice();
var newArr = [];
while( (i = names.shift()) !== undefined ) {
  if(i === 'autotrader'){
  	newArr.unshift(i) ;
    
    if(i==='cars.com')
    {newArr.push(i);}
  } else if(i !== 'autotrader'){
  	if(i === 'cars.com')
    {
      newArr.push(i);
      
    }
    
  }
    //console.log(i);

}
for(var i = 0; i<old.length;i++){
  newArr.forEach(val=>{
  if(val === old[i]){
  	old.splice(i, 1);
  }
  })
}
old.sort((highest, lowest) => {
    if(highest.toLowerCase() < lowest.toLowerCase())
       return -1;
    if(highest.toLowerCase() > lowest.toLowerCase())
       return 1;
    return 0;
});
old.unshift(...newArr);
old.map(item=>{
console.log(item)
})
console.log(old);
