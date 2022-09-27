import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { BillingDetails, OurOrder, PaymentMethod } from '../components/checkout'
import { useMobxStores } from '../data/stores'

const Checkout: NextPage = () => {
    const { cartStore } = useMobxStores()
    const router = useRouter()

    const placeOrder: Function = () => {
        cartStore.placeOrder()
        router.push("/thank-you")
    }

    return <>
        <Head>
            <title>Checkout - Leo's Guitar Shop</title>
        </Head>
        <div className='container'>
            <div className='row my-5 py-5'>
                <div className='col'>
                    <h2 className='title'>
                        Checkout
                    </h2>
                </div>
            </div>
            {cartStore.guitars.length <= 0 ?
                <div className='row my-3'>
                    <div className='col'>
                        <h2 className='description'>
                            Your cart is empty.
                        </h2>
                    </div>
                </div>
                :
                <>
                    <div className='row my-5'>
                        <div className='col-sm-6'>
                            <BillingDetails />
                        </div>
                        <div className='col-sm-6'>
                            <OurOrder />
                            <PaymentMethod />
                        </div>
                    </div>
                    <div className='row my-5'>
                        <div className='col d-flex align-items-center justify-content-center'>
                            <button type='button' className='btn btn-success btn-lg' onClick={() => placeOrder()}>Place Order</button>
                        </div>
                    </div>
                </>
            }
        </div>
    </>
}

export default Checkout