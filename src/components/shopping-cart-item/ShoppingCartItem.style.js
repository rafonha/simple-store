import styled from 'styled-components/native';

export const ItemContainer = styled.View`
    padding: 10px;
    border: 1px solid lightgray;
    background-color: white; 
    margin-bottom: 5px;
`;

export const DescriptionContainer = styled.View`
    flex-direction: row;
`;

export const ItemImageContainer = styled.View`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 20%;
`;

export const ItemImage = styled.Image`
    max-width: 60px;
    height: 60px;
`;

export const TextDescriptionContainer = styled.View`
    width: 100%;
    max-width: 70%;
`;

export const ItemTitle = styled.Text`
    padding: 5px;
    font-size: 18px;
`;

export const ItemPrice = styled.Text`
    padding: 5px;
`;

export const ItemQuantity = styled.Text`
    padding: 5px;
`;

export const ItemTotal = styled.Text`
    padding: 5px;
    font-size: 17px;
`;