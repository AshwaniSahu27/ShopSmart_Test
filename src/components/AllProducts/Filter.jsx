import React from 'react'

function Filter() {
  return (
    <div className="w-[30%] inter2">

        <div className=''>
            <h1></h1>
            <div className="border-[1px] ">
                <ul>
                    <li className='flex gap-2 items-center Dosis text-xl text-gray-800'>
                        <input type="checkbox" name="Fruits & Vegetables" id="Fruits" />
                        <div className='text-gray-400 text-[1.2vw]'><i class="fa-solid fa-apple-whole"></i></div>
                        <label htmlFor="Fruits" className='text-[1.3vw]'> Fruits & Vegetables</label>
                    </li>
                    <li className='flex gap-2 items-center Dosis text-xl text-gray-600'>
                        <input type="checkbox" name=" Meats & Seafood" id="Meats" />
                        <div className='text-gray-400 text-[1.2vw]'><i class="fa-solid fa-drumstick-bite"></i></div>
                        <label htmlFor="Meats"> Meats & Seafood</label>
                    </li>

                    <li className='flex gap-2 items-center Dosis text-xl text-gray-600'>
                        <input type="checkbox" name=" Breakfast & Dairy" id="Dairy" />
                        <div className='text-gray-400 text-[1.2vw]'> <i class="fa-solid fa-cookie-bite"></i></div>
              
                        <label htmlFor="Dairy"> Breakfast & Dairy</label>
                    </li>
                    <li className='flex gap-2 items-center Dosis text-xl text-gray-600'>
                        <input type="checkbox" name=" Beverages" id=" Beverages" />
                        <div className='text-gray-400 text-[1.2vw]'><i class="fa-solid fa-martini-glass-citrus"></i></div>
                        <label htmlFor=" Beverages"> Beverages</label>
                    </li>
                    <li className='flex gap-2 items-center Dosis text-xl text-gray-600'>
                        <input type="checkbox" name=" Frozen Foods" id="Frozen" />
                        <div className='text-gray-400 text-[1.2vw]'><i class="fa-solid fa-icicles"></i></div>
                        <label htmlFor="Frozen"> Frozen Foods</label>
                    </li>

                    <li className='flex gap-2 items-center Dosis text-xl text-gray-600'>
                        <input type="checkbox" name=" Biscuits & Snacks" id="Snacks" />
                        <div className='text-gray-400 text-[1.2vw]'><i class="fa-solid fa-cookie-bite"></i></div>
                        <label htmlFor="Snacks"> Biscuits & Snacks</label>
                    </li>

                    <li className='flex gap-2 items-center Dosis text-xl text-gray-600'>
                        <input type="checkbox" name=" Grocery & Staples" id="Grocery" />
                        <div className='text-gray-400 text-[1.2vw] '><i class="fa-solid fa-bag-shopping" ></i></div>
                        <label htmlFor="Grocery">  Grocery & Staples</label>
                    </li>


                </ul>
            </div>

        </div>

        <div>

        </div>


        <div>

        </div>


        <div>

        </div>


        <div>

        </div>

    </div>
  )
}

export default Filter