import { useContext } from 'react'
import { ScrollView } from 'react-native'
import { AppContext } from '../../contexts/context'
import ShoppingCartItem from '../shopping-cart-item/ShoppingCartItem';
import { ButtonText, NoItemContainer, NoItemText, StoreButton } from './ShoppingCartList.style';
import { Link } from 'expo-router';

export default function ShoppingCartList() {
  const { cartItems } = useContext(AppContext);

  const renderCartItems = cartItems.map(item => {
    return <ShoppingCartItem data={item} key={item.id} />
  })

  return (
    <ScrollView>
      {cartItems.length != 0 ? renderCartItems : 
      <NoItemContainer>
        <NoItemText>No items to show, add some items to shopping cart.</NoItemText>
        <Link href={"/"} asChild>
          <StoreButton>
              <ButtonText>Add items</ButtonText>
          </StoreButton>
        </Link>
      </NoItemContainer>}
    </ScrollView>
  )
}
