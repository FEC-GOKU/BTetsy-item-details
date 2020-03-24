import React, { useState } from 'react';
import {
  MessageModal, TitleText, CloseModal, MessageInput, MessageMeet, VendorName, VendorLocation, MessageSellerButton, MeetSection, VendorNameTitle, VendorNameAndLocation, VendorPhotoAndLocation, VendorIcon, SendMessage, VendorImage
} from './StyleSheet.js';


const Messages = ({
  vendorName, vendorFirstName, vendorLastName, vendorLocation, vendorPhoto,
}) => {
  const [toggle, setToggle] = useState(true);
  const [MessageToggle, setMessages] = useState(true);
  return (
    <MeetSection>
      <div>
        <MessageMeet>
          Meet
          {' '}
          <VendorName>
            {' '}
            {vendorName}
            {' '}
          </VendorName>
        </MessageMeet>
      </div>
      <div>
        <VendorPhotoAndLocation>
          <VendorIcon>
            <VendorImage src={vendorPhoto} alt=" " />
          </VendorIcon>
          <VendorNameAndLocation>
            <VendorNameTitle>
              <div />
              <VendorLocation>{vendorLocation}</VendorLocation>
            </VendorNameTitle>

          </VendorNameAndLocation>

        </VendorPhotoAndLocation>
      </div>

      <div />
      <div>
        <MessageModal toggle={toggle}>
          <CloseModal onClick={() => setToggle(!toggle)}> &times; </CloseModal>
          <TitleText>
            {' '}
message
            {' '}
            {' '}
            {vendorName}
          </TitleText>
          <div />
          <MessageInput placeholder="Write a Message" />
          <SendMessage> send </SendMessage>
        </MessageModal>
        <MessageSellerButton onClick={() => setToggle(!toggle)}> Message the Seller </MessageSellerButton>
      </div>
    </MeetSection>
  );
};

export default Messages;
