import { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import ShoppingListItem from '../shopping-list-item/ShoppingListItem'

export default function ShoppingList() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => {
        if (!res.ok) {
            throw new Error("API was not fetched properly, try again.")
        }
        return res.json();
    })
    .then(json => setData(json))
    .catch(error => console.error(error))
  }, [])

  const renderItems = data.map(item => {
    return <ShoppingListItem data={item} key={item.id} />
  })

  return (
    <ScrollView>
      {renderItems}
    </ScrollView>
  )
}