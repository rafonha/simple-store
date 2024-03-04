import { formatPrice } from '../../services/FormatPrice';
import { 
  DescriptionContainer, 
  TextDescriptionContainer, 
  ItemContainer, 
  ItemImage, 
  ItemImageContainer, 
  ItemTitle,
  ItemPrice,
  ItemDescription, 
} from './ShoppingListItem.style';
import ItemsHandler from '../items-handler/ItemsHandler';
import { StarRatingDisplay } from 'react-native-star-rating-widget';


export default function ShoppingListItem({ data }) {
  return (
    <ItemContainer>
      <DescriptionContainer>
        <ItemImageContainer>
          <ItemImage src={data.image} />
        </ItemImageContainer>
        <TextDescriptionContainer>
          <ItemTitle>{data.title}</ItemTitle>
          <StarRatingDisplay rating={data.rating.rate} starSize={20} color={'#3291a8'} />
          <ItemPrice>{formatPrice(data.price)}</ItemPrice>
          <ItemDescription numberOfLines={2} seeMoreStyle={{color: '#3291a8'}} seeLessStyle={{color: '#3291a8'}}>{data.description}</ItemDescription>
        </TextDescriptionContainer>
      </DescriptionContainer>
      <ItemsHandler data={data} buttonText='Add to cart' />
    </ItemContainer>
  )
}
