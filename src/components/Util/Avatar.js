import React from 'react';
import PropTypes from './PropTypes';

import classNames from 'classnames';

//import userImage from 'assets/img/users/100_4.jpg';

const Avatar = ({
  rounded,
  circle,
  src,
  size,
  tag: Tag,
  className,
  style,
  ...restProps
}) => {
  const classes = classNames({ 'rounded-circle': circle, rounded }, className);
  return (
    <Tag
      src={src}
      style={{ width: size, height: size, ...style }}
      className={classes}
      {...restProps}
    />
  );
};

Avatar.propTypes = {
  tag: PropTypes.component,
  rounded: PropTypes.bool,
  circle: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  src: PropTypes.string,
  style: PropTypes.object,
};

Avatar.defaultProps = {
  tag: 'img',
  rounded: true,
  circle: true,
  size: 80,
  src: "https://source.unsplash.com/random/80x80",
  style: {},
};

export default Avatar;