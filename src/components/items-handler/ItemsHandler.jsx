import React, { useContext, useEffect, useState } from 'react'
import { Alert } from 'react-native';
import { AppContext } from '../../contexts/context';
import { 
  AddToCartButton, 
  AddToCartContainer, 
  AddToCartText, 
  DeleteButtonContainer,
  DeleteButton,
  DeleteButtonText,
  PlusMinusButton,
  PlusMinusButtonText,
  HandleQntContainer,
  ItemsCount
} from './ItemsHandler.style';
import { useRouter } from "expo-router";


export default function ItemsHandler({ data, buttonText }) {
    const [itemsCount, setItemsCount] = useState(1);
    const { addItemToCart, removeItemFromCart } = useContext(AppContext);
    const router = useRouter();
  
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
        <HandleQntContainer>
          <PlusMinusButton onPress={decreaseItem}>
            <PlusMinusButtonText>-</PlusMinusButtonText>
          </PlusMinusButton>
          <ItemsCount>{itemsCount.toString()}</ItemsCount>
          <PlusMinusButton onPress={increaseItem}>
            <PlusMinusButtonText>+</PlusMinusButtonText>
          </PlusMinusButton>
        </HandleQntContainer>
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