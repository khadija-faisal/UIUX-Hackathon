import Image from "next/image";

function CartPage() {
  return (
     <main className="h-full flex flex-col justify-center items-center">
        <div className="w-screen flex flex-col gap-5 justify-center items-center h-[410px] bg-[url('/images/shoplis.svg')] bg-cover bg-center">
        <h2 className=" text-text text-5xl font-bold">Our Shop</h2>
        <div className=" flex gap-2 font-lg ">
          <span className=" text-text">Home</span>
          <Image
            src={"/icons/carerighlt.svg"}
            alt="Careright Arrow"
            width={12}
            height={12}
          />
          <span className="text-primary1">Shop</span>
        </div>
      </div>
      <div className=" p-4 text-lg font-bold flex items-center justify-between w-[90%]">
                      <span className="w-[40%]" >Product</span>
                    <ul className=" 2xl:w-[60%] w-[70%] lg:p-4 sm:pl-10 hidden mob:flex item-center  justify-between">
                        <li >Price</li>
                        <li >Quantity</li>
                        <li >Total</li>
                        <li> Remove</li>
                    </ul>
                   </div>
     <div className=" w-[90%]  ">
        <div className=" cart items"></div>

         <div className=" item1 p-4 flex gap-10 items-center justify-evenly">
            <div className=" flex flex-col  gap-3 part1">
                
                <div className="flex gap-2 ">
                <Image
                src={'/images/shop1.svg'}
                alt="Product 1"
                width={93}
                height={97}
                 />
                <div className=" flex flex-col gap-3">
                    <span className=" text-[#333333] text-base font-bold">Burger</span>
                    <Image 
                     src={'/images/star.svg'}
                     alt="Rating"
                     width={116}
                     height={20}
                    />
                </div>
                </div>
            </div>

            <div className=" text-[#333333] text-base flex-col flex p-3 justify-center items-center part2">
           
                $35.00
               
            </div>
            <div className=" flex justify-center flex-col items-center part4 ">
            
                
                <Image
                src={'/images/counter.svg'}
                alt="Counter"
                width={110}
                height={41}
                />
               
            </div>
            <div className="font-inter font-bold text-base text-[#333333]">
            $221.00
            </div>
            <div className=" flex justify-center items-center">
            <Image
                src={'/icons/cross.svg'}
                alt="Counter"
                width={20}
                height={20}
                />  
            </div>

         </div>
         <div className=" item1 p-4 flex gap-10 items-center justify-evenly">
            <div className=" flex gap-2 part1">
                <Image
                src={'/images/shop2.svg'}
                alt="Product 1"
                width={93}
                height={97}
                 />
                <div className=" flex flex-col gap-3">
                    <span className=" text-[#333333] text-base font-bold">Burger</span>
                    <Image 
                     src={'/images/star.svg'}
                     alt="Rating"
                     width={116}
                     height={20}
                    />
                </div>
            </div>

            <div className=" text-[#333333] text-base flex p-3 justify-center items-center part2">
                $35.00
            </div>
            <div className=" flex justify-center items-center part4 ">
                <Image
                src={'/images/counter.svg'}
                alt="Counter"
                width={110}
                height={41}
                />
            </div>
            <div className="font-inter font-bold text-base text-[#333333]">
            $221.00
            </div>
            <div className=" flex justify-center items-center">
            <Image
                src={'/icons/cross.svg'}
                alt="Counter"
                width={20}
                height={20}
                />  
            </div>

         </div>
         <div className=" item1 p-4 flex gap-10 items-center justify-evenly">
            <div className=" flex gap-2 part1">
                <Image
                src={'/images/shop3.svg'}
                alt="Product 1"
                width={93}
                height={97}
                 />
                <div className=" flex flex-col gap-3">
                    <span className=" text-[#333333] text-base font-bold">Burger</span>
                    <Image 
                     src={'/images/star.svg'}
                     alt="Rating"
                     width={116}
                     height={20}
                    />
                </div>
            </div>

            <div className=" text-[#333333] text-base flex p-3 justify-center items-center part2">
                $35.00
            </div>
            <div className=" flex justify-center items-center part4 ">
                <Image
                src={'/images/counter.svg'}
                alt="Counter"
                width={110}
                height={41}
                />
            </div>
            <div className="font-inter font-bold text-base text-[#333333]">
            $221.00
            </div>
            <div className=" flex justify-center items-center">
            <Image
                src={'/icons/cross.svg'}
                alt="Counter"
                width={20}
                height={20}
                />  
            </div>

         </div>
         <div className=" item1 p-4 flex gap-10 items-center justify-evenly">
            <div className=" flex gap-2 part1">
                <Image
                src={'/images/shop1.svg'}
                alt="Product 1"
                width={93}
                height={97}
                 />
                <div className=" flex flex-col gap-3">
                    <span className=" text-[#333333] text-base font-bold">Burger</span>
                    <Image 
                     src={'/images/star.svg'}
                     alt="Rating"
                     width={116}
                     height={20}
                    />
                </div>
            </div>

            <div className=" text-[#333333] text-base flex p-3 justify-center items-center part2">
                $35.00
            </div>
            <div className=" flex justify-center items-center part4 ">
                <Image
                src={'/images/counter.svg'}
                alt="Counter"
                width={110}
                height={41}
                />
            </div>
            <div className="font-inter font-bold text-base text-[#333333]">
            $221.00
            </div>
            <div className=" flex justify-center items-center">
            <Image
                src={'/icons/cross.svg'}
                alt="Counter"
                width={20}
                height={20}
                />  
            </div>

         </div>
         <div className=" item1 p-4 flex gap-10 items-center justify-evenly">
            <div className=" flex gap-2 part1">
                <Image
                src={'/images/shop4.svg'}
                alt="Product 1"
                width={93}
                height={97}
                 />
                <div className=" flex flex-col gap-3">
                    <span className=" text-[#333333] text-base font-bold">Burger</span>
                    <Image 
                     src={'/images/star.svg'}
                     alt="Rating"
                     width={116}
                     height={20}
                    />
                </div>
            </div>

            <div className=" text-[#333333] text-base flex p-3 justify-center items-center part2">
                $35.00
            </div>
            <div className=" flex justify-center items-center part4 ">
                <Image
                src={'/images/counter.svg'}
                alt="Counter"
                width={110}
                height={41}
                />
            </div>
            <div className="font-inter font-bold text-base text-[#333333]">
            $221.00
            </div>
            <div className=" flex justify-center items-center">
            <Image
                src={'/icons/cross.svg'}
                alt="Counter"
                width={20}
                height={20}
                />  
            </div>

         </div>
     </div>
    
     
     </main>
  )
}

export default CartPage;