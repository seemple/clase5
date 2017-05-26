import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import ThumbnailComp from "./Thumbnail";

const ThumbnailList = ({items}) => (
  <Row>
      {items.map((item, i) => <ThumbnailComp name={item.name} charge={item.charge} />)}
  </Row>
);


export default ThumbnailList;