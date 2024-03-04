import { View } from 'react-native'
import ShoppingCartList from '../components/shopping-cart-list/ShoppingCartList'
import Header from '../components/header/Header'

export default function ShoppingCartPage() {
  return (
    <View>
        <Header />
        <ShoppingCartList />
    </View>
  )
}
