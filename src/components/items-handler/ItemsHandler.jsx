import React, { useContext, useEffect, useState } from 'react'
import { Alert } from 'react-native';
import { AppContext } from '../../contexts/context';
import { 
  AddToCartButton, 
  AddToCartContainer, 
  AddToCartText, 
  ItemsCountInput, 
  MinusButton, 
  PlusButton,
  DeleteButtonContainer,
  DeleteButton,
  DeleteButtonText
} from './ItemsHandler.style';
import { useRouter } from "expo-router";


export default function ItemsHandler({ data, buttonText }) {
    const [itemsCount, setItemsCount] = useState(1);
    const { addItemToCart, removeItemFromCart } = useContext(AppContext);
    const router = useRouter();

    useEffect(() => {
      handleQuantity()
    }, [])

    const handleQuantity = () => {
      if(buttonText === 'Update quantity'){
        return data.quantity !== undefined ? data.quantity.toString() : itemsCount.toString();
      } else {
        return itemsCount.toString();
      }
    }
  
    const increaseItem = () => {
        if (itemsCount <= 9){
            setItemsCount(prev => prev + 1)
        }
    };
  
    const decreaseItem = () => {
        if (itemsCount > 1){
            setItemsCount(prev => prev - 1)
        }
    };
  
    const addItem = () => {
      successAlert();
      addItemToCart(data.id, data.title, data.image, data.price, itemsCount);
    }

    const successAlert = () =>
    Alert.alert('Success', 'Item added to shopping cart', [
      {
        text: 'Go to cart',
        onPress: () => router.push("/shopping-cart"),
        style: 'cancel',
      },
      {text: 'OK'},
    ]);

    const removeItem = () => {
      deleteAlert();
      removeItemFromCart(data.id);
    }

    const deleteAlert = () => {
      Alert.alert('Success', 'Item deleted', [
        {text: 'OK'},
      ]);
    }

  return (
    <>
      {buttonText !== 'Update quantity' &&
      <AddToCartContainer>
          <MinusButton title='-' onPress={decreaseItem} />
          <ItemsCountInput keyboardType = 'numeric' value={handleQuantity()} />
          <PlusButton title='+' onPress={increaseItem} />
          <AddToCartButton onPress={addItem}>
              <AddToCartText>{buttonText}</AddToCartText>
          </AddToCartButton>
      </AddToCartContainer>
      }
      {buttonText === 'Update quantity' && 
        <DeleteButtonContainer>
          <DeleteButton onPress={removeItem}>
            <DeleteButtonText>Delete product</DeleteButtonText>
          </DeleteButton>
        </DeleteButtonContainer>
      }
    </>
  )
}