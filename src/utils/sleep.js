const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
  /*Use like so*/
export default async function timeSensativeAction(){ //must be async func
    //do something here
    await sleep(3000) //wait 3 seconds
    //continue on...
}