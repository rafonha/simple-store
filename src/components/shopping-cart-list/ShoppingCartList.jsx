import { useContext } from 'react'
import { AppContext } from '../../contexts/context'
import ShoppingCartItem from '../shopping-cart-item/ShoppingCartItem';
import { ButtonText, NoItemContainer, NoItemText, ShoppingCartListContainer, StoreButton } from './ShoppingCartList.style';
import { Link } from 'expo-router';

export default function ShoppingCartList() {
  const { cartItems } = useContext(AppContext);

  const renderCartItems = cartItems.map(item => {
    return <ShoppingCartItem data={item} key={item.id} />
  })

  return (
    <ShoppingCartListContainer>
      {cartItems.length != 0 ? renderCartItems : 
      <NoItemContainer>
        <NoItemText>No items to show, add some items to shopping cart.</NoItemText>
        <Link href={"/"} asChild>
          <StoreButton>
              <ButtonText>Add items</ButtonText>
          </StoreButton>
        </Link>
      </NoItemContainer>}
    </ShoppingCartListContainer>
  )
}
