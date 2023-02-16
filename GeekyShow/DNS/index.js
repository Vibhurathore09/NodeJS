import dns from 'dns';
dns.resolve('geekyshows.com','NS' , (error , records)=>{
    if(error) throw error;
    console.log(records);
    // console.log(family);
})