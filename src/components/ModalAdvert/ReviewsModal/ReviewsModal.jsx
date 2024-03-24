import { RenderStars } from './RenderStars';
import {
  ListWrapp,
  NameLeter,
  NameWrapp,
  StyledComment,
  StyledList,
  StyledName,
} from './ReviewsModal.styled';

export const ReviewsModal = ({ reviews }) => {
  return (
    <ListWrapp>
      <StyledList>
        {reviews.map((review) => (
          <li key={review.reviewer_name}>
            <NameWrapp>
              <NameLeter>{review.reviewer_name.charAt(0)}</NameLeter>
              <div>
                <StyledName>{review.reviewer_name}</StyledName>
                <div>
                  <RenderStars rating={review.reviewer_rating} />
                </div>
              </div>
            </NameWrapp>
            <StyledComment>{review.comment}</StyledComment>
          </li>
        ))}
      </StyledList>
    </ListWrapp>
  );
};
