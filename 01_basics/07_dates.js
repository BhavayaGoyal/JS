  let myDate = new Date()
//   console.log("toString Function: "+ myDate.toString());
//   console.log("toDateString Function: "+myDate.toDateString());
//   console.log("toLocaleDateString Function: "+myDate.toLocaleDateString());
//   console.log("toISOString Function: "+myDate.toISOString());
//   console.log("toJSON Function: "+myDate.toJSON())
//   console.log("tolocaleString Function: "+myDate.toLocaleString());
//   console.log(typeof myDate) 

  let myCreatedate = new Date(2025, 0,14)
//   console.log(myCreatedate.toDateString());

  let myCreatedate1 = new Date(2025,5,3, 0,14)
    // console.log(myCreatedate1.toLocaleString());

    let myCreatedate2 = new Date("2025-02-13")
    //console.log(myCreatedate2.toLocaleString());

    let myCreatedate3 = new Date("1-02-2025")
    // console.log(myCreatedate3.toLocaleString());

    let myTime = Date.now()
    // console.log(myTime);
    // console.log(myCreatedate.getTime());
    // console.log(Math.floor(Date.now()/1000))

    let newDate = new Date()
    // console.log(newDate.getMonth()+1);
    newDate.toLocaleString('default',{
        weekday:"long",
    })
    console.log(newDate.toLocaleString());

    
    
    