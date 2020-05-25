import React from "react";

interface ValueCountProps {
  count: number;
}

export default (props: ValueCountProps) => {
  return <p>{props.count}</p>;
};
