import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const IconStudent = ({ className }) => (
  <svg
    version="1.1"
    viewBox="0 0 512 512"
    width="30"
    className={classnames(className)}
  >
    <path d="m482 364.841v-207.227l20.248-7.561c5.864-2.191 9.752-7.793 9.752-14.053s-3.888-11.862-9.752-14.052l-241-90c-3.384-1.264-7.111-1.264-10.495 0l-241 90c-5.865 2.19-9.753 7.792-9.753 14.052s3.888 11.862 9.752 14.052l99.868 37.295c-23.643 66.711-17.678 101.803-18.62 113.653 0 4.977 2.469 9.631 6.59 12.421 4.122 2.791 9.358 3.354 13.98 1.506.349-.139 35.215-13.927 69.43-13.927 31.651 0 65.312 26.461 65.629 26.713 5.479 4.382 13.263 4.382 18.741 0 9.288-7.43 39.184-26.713 65.63-26.713 34.026 0 69.092 13.793 69.429 13.927 4.621 1.848 9.859 1.284 13.98-1.506 4.122-2.79 6.591-7.444 6.591-12.421-.871-10.95 4.899-47.292-18.621-113.653l49.621-18.53v196.024c-7.712 4.167-14.439 11.642-19.63 22.024-6.687 13.375-10.37 30.825-10.37 49.135v30c0 8.284 6.716 15 15 15h60c8.284 0 15-6.716 15-15v-30c0-18.31-3.683-35.76-10.37-49.135-5.191-10.382-11.918-17.857-19.63-22.024zm-226-302.829 198.124 73.988c-20.439 7.633-178.344 66.602-198.124 73.988-19.78-7.386-177.685-66.355-198.124-73.988zm134.877 218.211c-15.383-4.374-37.484-9.223-59.877-9.223-30.683 0-60.373 16.817-75 26.56-14.627-9.743-44.318-26.56-75-26.56-22.392 0-44.494 4.849-59.877 9.223.863-30.496 6.279-53.209 16.603-82.38l113.027 42.209c3.383 1.264 7.111 1.264 10.495 0l113.027-42.209c10.323 29.171 15.738 51.885 16.602 82.38zm91.123 170.777h-30v-15c0-13.544 2.626-26.563 7.203-35.718 3.834-7.668 7.277-9.282 7.797-9.282s3.963 1.614 7.797 9.282c4.577 9.155 7.203 22.174 7.203 35.718z" />
  </svg>
);

IconStudent.propTypes = {
  className: PropTypes.string,
};

IconStudent.defaultProps = {
  className: undefined,
};

export default IconStudent;