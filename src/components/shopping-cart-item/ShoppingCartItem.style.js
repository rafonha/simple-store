import styled from 'styled-components/native';

export const ItemContainer = styled.View`
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: white; 
`;

export const DescriptionContainer = styled.View`
    flex-direction: row;
`;

export const ItemImageContainer = styled.View`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 30%;
`;

export const ItemImage = styled.Image`
    max-width: 80px;
    height: 80px;
`;

export const TextDescriptionContainer = styled.View`
    width: 100%;
    max-width: 70%;
`;

export const ItemText = styled.Text`
    padding: 5px;
`;