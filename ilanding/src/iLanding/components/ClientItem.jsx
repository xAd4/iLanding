/* eslint-disable react/prop-types */
export const ClientItem = ({ logo, name }) => {
  return (
    <>
      <div className="swiper-slide">
        <img src={logo} className="img-fluid" alt={name} />
      </div>
    </>
  );
};
