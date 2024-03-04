import { formatPrice } from '../../services/FormatPrice';
import { 
  DescriptionContainer, 
  TextDescriptionContainer, 
  ItemContainer, 
  ItemImage, 
  ItemImageContainer, 
  ItemText, 
} from './ShoppingCartItem.style';
import ItemsHandler from '../items-handler/ItemsHandler';

export default function ShoppingListItem({ data }) {
  return (
    <ItemContainer>
      <DescriptionContainer>
        <ItemImageContainer>
          <ItemImage src={data.image} />
        </ItemImageContainer>
        <TextDescriptionContainer>
          <ItemText>Title: {data.title}</ItemText>
          <ItemText>Price: {data.price}</ItemText>
          <ItemText>Quantity: {data.quantity}</ItemText>
        </TextDescriptionContainer>
      </DescriptionContainer>
      <ItemsHandler data={data} buttonText='Update quantity' />
    </ItemContainer>
  )
}
