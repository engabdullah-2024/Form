function Form({close}){
    return<div className="bg-black h-screen absolute w-full top-0  bg-opacity-50">

  
    
    <div className="flex justify-center pt-20">

<form className="bg-white w-[400px] p-3 h-[400px]">
<i  onClick={close}   class="fa-solid fa-x  mr-[300px] text-3xl "></i>


<br/>
   <input className="w-[350px] my-3 h-[40px] border-2 border-black "       type="text" placeholder="Enter Title"></input>
   <br/>
   <textarea className="border-2 border-black"    rows={8} cols={46} />
   <br/>
   <button className="bg-black text-white px-[150px] my-5 py-2 text-3xl rounded">Save</button>
</form>
    </div>
    </div>
}

export default Form