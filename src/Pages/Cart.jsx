import React, { useState } from 'react'
import Layout from '../Component/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { Transition } from '@headlessui/react';
import OrderModel from '../Component/OrderModel';
import { deleteFromCart } from '../Redux/CartSlice';


const Cart = () => {
    const cartItem = useSelector((state)=> state.Cart)
 const [isOpen,setIsOpen]=useState(false)
  const dispatch =useDispatch()
 const subtotal = cartItem?.carts?.reduce((acc, item) => acc + Number(item?.price), 0);
 let shipping = 100; // Default shipping cost
    if (subtotal > 300) {
        shipping = 0; // Change shipping cost if subtotal is above 300
    }

    // Calculate total
    const total = subtotal + shipping;

  return (
    <Layout >
         
            <div className="bg-gray-100 pt-5" >
                <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 ">
                    <div className="flex-1 ">
                        {cartItem?.carts?.map((item) => (
                            <div key={item.id} className="w-full mb-4">
                                <div className="rounded-lg border drop-shadow-xl max-w-full flex flex-col h-full bg-white p-6 relative">
                                    <div className="absolute top-2 right-2"  onClick={()=>dispatch(deleteFromCart(item?.id))}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-wrap">
                                        <img src={item?.images?.[0]} alt="product-image" className="w-full rounded-lg mb-4 sm:w-40 sm:mx-auto" />
                                        <div className="text-center sm:text-left">
                                            <h2 className="text-lg font-bold text-gray-900 ">{item?.title}</h2>
                                            <h2 className="text-sm mt-2 text-gray-900">{item?.description}</h2>
                                            <p className="mt-1 text-xs font-semibold font-bold mt-3 text-gray-700">₹ {item?.price}</p>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        ))}


                        { cartItem?.carts?.length === 0 && (
                            <div className="flex justify-center items-center h-screen">
                                <p className="text-gray-700 text-xl">Your cart is empty!</p>
                            </div>
                        ) 
                        }
                    </div>


                    {cartItem?.carts?.length > 0 && <div className="mt-6 mb-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3" 
                    >
                        <div className="mb-2 flex justify-between">
                            <p className="text-gray-700" >Subtotal</p>
                            <p className="text-gray-700" >₹ {subtotal}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-700" >Shipping</p>
                            <p className="text-gray-700">₹ {shipping}</p>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between mb-3">
                            <p className="text-lg font-bold" >Total</p>
                            <div className>
                                <p className="mb-1 text-lg font-bold" >₹ {total}</p>
                            </div>
                        </div>
                        {/* <Modal  /> */}
                        <button
                            type="button"
                            onClick={()=>setIsOpen(true)}
                            className="w-full  bg-violet-600 py-2 text-center rounded-lg text-white font-bold "
                        >
                            Buy Now
                        </button>
                    </div>
                    }
                </div>
            </div>
       
            <Transition show={isOpen}  >

<OrderModel setIsOpen={setIsOpen} isOpen={isOpen} productitem={cartItem?.carts}/>
</Transition>
        </Layout>
  )
}

export default Cart
