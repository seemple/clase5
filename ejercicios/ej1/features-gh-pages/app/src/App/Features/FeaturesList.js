import React from "react";
import FeatureItem from "./FeatureItem";

const FeaturesList = ({ items }) => (
  <div class="row text-center">
    {items.map(item => <FeatureItem {...item} />)}
  </div>
);

export default FeaturesList;
