import React from 'react'
import { Link } from 'expo-router'
import { 
    HeaderContainer,
    HeaderButton,
    ButtonText 
} from './Header.style'

export default function Header() {
  return (
    <HeaderContainer>
        <Link href={"/"} asChild>
            <HeaderButton>
                <ButtonText>E-store</ButtonText>
            </HeaderButton>
        </Link>
        <Link href={"/shopping-cart"} asChild>
            <HeaderButton>
                <ButtonText>Shopping Cart</ButtonText>
            </HeaderButton>
        </Link>
    </HeaderContainer>
  )
}