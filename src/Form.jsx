function Form({close}){
    return<div className=" h-screen absolute w-full top-0 bg-opacity-5 bg-black  ">

  
    
    <div className="flex justify-center sm:pt-20 pt-10 mt-20">

<form className="bg-blue-500 sm:w-[400px]sm:p-3 sm:h-[400px] w-[300px] h-[350px] rounded mr-20">
<i  onClick={close}   class="fa-solid fa-x  mr-[350px] text-3xl  "></i>
<h1 className="text-3xl font-bold">Fill This Form</h1>


<br/>
   <input className="sm:w-[350px]sm:my-3 sm:h-[40px] border-2 border-black  w-[250px] h-[30px]"       type="text" placeholder="Enter Title"></input>
   <br/>
   <textarea className="border-2 border-black mt-6"    rows={4} cols={40} />
   <br/>
   <button className="bg-black text-white sm:px-[150px] sm:my-5 sm:py-2 text-3xl rounded px-[120px] my-3 py-1">Save</button>
</form>
    </div>
    </div>
}

export default Form