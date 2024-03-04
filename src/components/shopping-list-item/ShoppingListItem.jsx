import { formatPrice } from '../../services/FormatPrice';
import { 
  DescriptionContainer, 
  TextDescriptionContainer, 
  ItemContainer, 
  ItemImage, 
  ItemImageContainer, 
  ItemText, 
} from './ShoppingListItem.style';
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
          <ItemText>Description: {data.description}</ItemText>
          <ItemText>Price: {formatPrice(data.price)}</ItemText>
          <ItemText>Rate: {data.rating.rate}</ItemText>
        </TextDescriptionContainer>
      </DescriptionContainer>
      <ItemsHandler data={data} buttonText='Add to cart' />
    </ItemContainer>
  )
}
