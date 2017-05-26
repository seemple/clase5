import React, { Component } from 'react';
import { Thumbnail,Col,Button } from 'react-bootstrap';

const ThumbnailComp = ({name,charge}) => (
	<Col xs={6} md={3}>
      <Thumbnail src="http://placehold.it/242x200" alt="242x200">
        <h3>{name}</h3>
        <p>{charge}</p>
        <p>
          <Button bsStyle="primary">Send E-mail</Button>&nbsp;
          <Button bsStyle="default">Buy Him a Beer!</Button>
        </p>
      </Thumbnail>
    </Col>
);


export default ThumbnailComp;