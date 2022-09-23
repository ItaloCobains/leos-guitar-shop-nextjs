import React from 'react'

import { observer } from 'mobx-react'

import { useMobxStores } from '../../data/stores'
import useSWR from 'swr'
import { fetcher } from '../../infrastructure'
import { IGuitar } from '../../models'
import { CartItem } from './cart-item'
import { getImageSize } from 'next/dist/server/image-optimizer'

export interface ICartDetails {

}

const CartDetailsComponent: React.FunctionComponent<ICartDetails> = () => {
    const { cartStore } = useMobxStores();
    const { data } = useSWR('/api/catalog', fetcher)
    if (!data) return <>Loading...</>

    const guitarCatalog: IGuitar[] = data
    return <div className='mb-5'>
        <h2>Your cart</h2>
        {cartStore.guitars.length <= 0 ?
            <h3>There are no guitars in your cart.</h3> :
            cartStore.guitars.map(g => {
                const guitar: IGuitar = guitarCatalog.filter(gg => gg.id === g.guitarId)[0]

                return <CartItem 
                    id={g.guitarId} 
                    model={guitar.model} 
                    manufacturer={guitar.manufacturer} 
                    mainImage={guitar.mainImage || 'https://cdn.pixabay.com/photo/2017/01/31/23/08/classic-2028011_960_720.png'} 
                    price={guitar.price}
                    quantity={g.quantity} />
            })
        }
    </div>
}

export const CartDetails = observer(CartDetailsComponent)