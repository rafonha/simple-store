import styled from "styled-components/native";

export const AddToCartContainer = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 20px;
`;

export const HandleQntContainer = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 10px;
`;

export const ItemsCount = styled.Text`
    border: 1px solid black;
    padding: 5px;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export const PlusMinusButton = styled.TouchableOpacity`
    color: #3291a8;
    border: 1px solid #3291a8;
    padding: 10px;
`;

export const PlusMinusButtonText = styled.Text`
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
    font-weight: 700;
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