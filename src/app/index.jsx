import { View } from 'react-native'
import Header from '../components/header/Header'
import ShoppingList from '../components/shopping-list/ShoppingList'

export default function HomePage() {
  return (
    <View>
        <Header />
        <ShoppingList />
    </View>
  )
}
