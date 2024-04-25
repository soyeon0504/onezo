import React from 'react'
import { ReviewOrder, ReviewStyle } from '../../styles/review/ReveiwStyle'
import { PayCancelBt } from '../../styles/pay/PayStyle'

const ReviewModal = ({store, onCloseModal}) => {
  return (
    <ReviewStyle>
        <PayCancelBt>
          <img src="/images/my/bt_cancel.svg" onClick={onCloseModal} />
        </PayCancelBt>
        <p>리뷰</p>
        <ReviewOrder>
          <img src="/images/my/chicken1.jpg" />
          <div>
            <h1>[{store}]</h1>
            <h2>핫황금올리브치킨™크리스피 외 2개</h2>
          </div>
        </ReviewOrder>
        <textarea placeholder="후기를 남겨주세요." />
        <div style={{textAlign:"center"}}>
          <button>저장</button>
        </div>
      </ReviewStyle>
  )
}

export default ReviewModal