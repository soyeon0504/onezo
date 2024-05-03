import React, { useState } from "react";
import {
  ReviewCancelBt,
  ReviewOrder,
  ReviewStar,
  ReviewStyle,
} from "../../styles/review/ReveiwStyle";

const ReviewModal = ({ store, onCloseModal }) => {
  // 별점 클릭 핸들러
  const [rating, setRating] = useState(0);
  const handleRatingClick = (index) => {
    setRating(index + 1);
  };

  return (
    <ReviewStyle>
      <ReviewCancelBt>
        <img src="/images/my/bt_cancel.svg" onClick={onCloseModal} />
      </ReviewCancelBt>
      <p>리뷰</p>
      <ReviewOrder>
        <img src="/images/my/chicken1.jpg" />
        <div>
          <h1>[{store}]</h1>
          <h2>핫황금올리브치킨™크리스피 외 2개</h2>
        </div>
      </ReviewOrder>
      <ReviewStar>
      {[1, 2, 3, 4, 5].map((_, index) => (
        <img
          key={index}
          src={index < rating ? '/images/my/star_full.png' : '/images/my/star_empty.png'}
          onClick={() => handleRatingClick(index)}
        />
      ))}
    </ReviewStar>
      <textarea placeholder="후기를 남겨주세요." />
      <div style={{ textAlign: "center" }}>
        <button>저장</button>
      </div>
    </ReviewStyle>
  );
};

export default ReviewModal;
