const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
   
export default async function getData(offset,limit=9){
    const raw = JSON.stringify({
        "limit": limit,
        "offset": offset
    });
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body:raw,
        };

    try{
       const res =await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
       const data = await res.json();
       return data.jdList;
    }catch(error){
        throw new Error(error.toString());
    }
}