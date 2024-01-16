import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../Component/Layout'

const Order = () => {
  const cartItem = useSelector((state)=> state.Cart)
 console.log(cartItem?.order)
  return (
    <Layout>
 
      {cartItem?.order?.length > 0  ?
        (<>
          <div className=" h-full pt-10">
            {
              cartItem?.order?.map((item) => {
                // order.cartItems.map()
                return (
                  <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
               
                    
                          <div className="rounded-lg md:w-2/3">
                            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" >
                              <img src={item.images?.[0]} alt="product-image" className="w-full rounded-lg sm:w-40" />
                              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div className="mt-5 sm:mt-0">
                                  <h2 className="text-lg font-bold text-gray-900" >{item.title}</h2>
                                  <p className="mt-1 text-xs text-gray-700 max-w-5xl" >{item.description}</p>
                                 
                                  <p className="mt-1 text-xs text-gray-700" >{item.price}</p>
                                  <h3 className="mt-1 text-xs text-gray-700" >{item.date}</h3>
                               
                                </div>
                              </div>
                            </div>
                          </div>
                        
                    
                  </div>
                )
              })
            }
          </div>
        </>)
        :
        (
          <h2 className=' text-center text-2xl text-black bold py-2'>No Order</h2>
        )

      }
    </Layout>
  )
}

export default Order
