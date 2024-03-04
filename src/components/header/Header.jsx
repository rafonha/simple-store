import React from 'react'
import { Link } from 'expo-router'
import { 
    HeaderContainer,
    HeaderButton,
    ButtonText 
} from './Header.style'
import { Feather } from '@expo/vector-icons';

export default function Header() {
  return (
    <HeaderContainer>
        <Link href={"/"} asChild>
            <HeaderButton>
                <Feather name="shopping-bag" size={24} color="#3291a8" />
                <ButtonText>E-store</ButtonText>
            </HeaderButton>
        </Link>
        <Link href={"/shopping-cart"} asChild>
            <HeaderButton>
                <Feather name="shopping-cart" size={24} color="#3291a8" />
                <ButtonText>Shopping Cart</ButtonText>
            </HeaderButton>
        </Link>
    </HeaderContainer>
  )
}