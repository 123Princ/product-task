import React from 'react'
import data from "../Datajson/AllProductData.json"
import PrimaryButton from '../Component/PrimaryButton'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/CartSlice'
const Products = () => {
     console.log(data,"data")
     const dispatch = useDispatch()
     const cartItem = useSelector((state)=> state.Cart)

     console.log(cartItem?.carts,"ooooo")
  const Addtocart =(item)=>{
   dispatch(addToCart(item))
  }
  return (
    <section className="text-gray-600 body-font">

            <div className="container  px-5 py-8 md:py-16 mx-auto">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" >Our Latest Collection</h1>
                    <div class="h-1 w-20 bg-pink-600 rounded"></div>
                </div>

                <div className="flex flex-wrap -m-4">
                {data?.products
                        .map((item,index) => (
                            <div className="p-4 md:w-1/4  drop-shadow-xlg " >
                                <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"  >
                                    <div className="flex justify-center cursor-pointer" >
                                        <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src={item?.images?.[0]} alt="blog" />
                                    </div>
                                    <div className="p-5 border-t-2">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" >E-Bharat</h2>
                                        <h1 className="title-font text-lg h-10 font-medium text-gray-900 mb-3" >{item?.title}</h1>
                                        {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                                        <p className="leading-relaxed mb-3" >₹ {item?.price}</p>
                                        <div className=" flex justify-center w-full">
                                            <PrimaryButton type="button"    disabled={cartItem?.carts?.some(cart => cart.id === item.id)}
 btnText="Add To Cart" className={`focus:outline-none text-white  ${cartItem?.carts?.some(cart => cart.id === item.id)?" bg-gray-400":"bg-yellow-600"} hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2`} onClick={()=>Addtocart(item)} />

                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
</div>
            </div>
        </section >
  )
}

export default Products
