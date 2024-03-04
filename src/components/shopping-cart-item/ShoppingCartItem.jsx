import { 
  DescriptionContainer, 
  TextDescriptionContainer, 
  ItemContainer, 
  ItemImage, 
  ItemImageContainer, 
  ItemText, 
} from './ShoppingCartItem.style';
import ItemsHandler from '../items-handler/ItemsHandler';
import { formatPrice } from '../../services/FormatPrice';

export default function ShoppingListItem({ data }) {

  const totalItem = data.price * data.quantity;

  return (
    <ItemContainer>
      <DescriptionContainer>
        <ItemImageContainer>
          <ItemImage src={data.image} />
        </ItemImageContainer>
        <TextDescriptionContainer>
          <ItemText>Title: {data.title}</ItemText>
          <ItemText>Price: {formatPrice(data.price)}</ItemText>
          <ItemText>Quantity: {data.quantity}</ItemText>
          <ItemText>Total: {formatPrice(totalItem)}</ItemText>
        </TextDescriptionContainer>
      </DescriptionContainer>
      <ItemsHandler data={data} buttonText='Update quantity' />
    </ItemContainer>
  )
}
