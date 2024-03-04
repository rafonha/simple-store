import { 
  DescriptionContainer, 
  TextDescriptionContainer, 
  ItemContainer, 
  ItemImage, 
  ItemImageContainer, 
  ItemTitle, 
  ItemPrice, 
  ItemQuantity, 
  ItemTotal, 
} from './ShoppingCartItem.style';
import ItemsHandler from '../items-handler/ItemsHandler';
import { formatPrice } from '../../services/FormatPrice';

export default function ShoppingListItem({ data }) {

  const totalItem = data.price * data.quantity;

  return (
    <ItemContainer>
      <DescriptionContainer>
        <ItemImageContainer>
          <ItemImage src={data.image} alt={data.description} />
        </ItemImageContainer>
        <TextDescriptionContainer>
          <ItemTitle>{data.title}</ItemTitle>
          <ItemPrice>Unit price: {formatPrice(data.price)}</ItemPrice>
          <ItemQuantity>Quantity: {data.quantity}</ItemQuantity>
          <ItemTotal>Total: {formatPrice(totalItem)}</ItemTotal>
        </TextDescriptionContainer>
      </DescriptionContainer>
      <ItemsHandler data={data} buttonText='Update quantity' />
    </ItemContainer>
  )
}
