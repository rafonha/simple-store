import styled from 'styled-components/native';
import { Link } from 'expo-router'

export const HeaderContainer = styled.View`
    background-color: white;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: gray;
`;

export const HeaderButton = styled.TouchableOpacity`
    background-color: #3291a8;
    width: 40%;
    padding: 10px;
    margin: 10px;
    align-items: center;
`;

export const ButtonText = styled.Text`
    color: white;
    font-weight: 700;
`;

export const ButtonIcon = styled.Image``;