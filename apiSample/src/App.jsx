
const api_url="https://api.adviceslip.com/advice";

 function App() {

    async function handleClick(){
        const response=await fetch(api_url);
        // console.log(response);
        const value= await response.json();
        const advice=value.slip.advice;
        console.log(advice);
        return 
    }
  return (
    <>
    <div>Paragraph</div>
    <button onClick={handleClick}>Generate Api</button>
    </>
  )
}
export default App;