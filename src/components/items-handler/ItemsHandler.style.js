import styled from "styled-components/native";

export const AddToCartContainer = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 20px;
`;

export const ItemsCountInput = styled.TextInput`
border: 1px solid black;
padding: 5px;
`;

export const PlusButton = styled.Button`
color: #3291a8;
`;

export const MinusButton = styled.Button`
color: #3291a8;
`;

export const AddToCartButton = styled.TouchableOpacity`
width: 150px;
background-color: #3291a8;
justify-content: center;
align-items: center;
`;

export const AddToCartText = styled.Text`
    color: white;
`;

export const DeleteButtonContainer = styled.View`
flex-direction: row;
justify-content: flex-end;
margin-top: 20px;
`;

export const DeleteButton = styled.TouchableOpacity`
width: 150px;
background-color: #eb4034;
justify-content: center;
align-items: center;
`;

export const DeleteButtonText = styled.Text`
color: white;
padding: 10px;
`;


export const AddedItemText = styled.Text``;