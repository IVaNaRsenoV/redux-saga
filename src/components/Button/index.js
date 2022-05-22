const fetchDog = () => {
  return { type: "FETCHED_DOG" };
};

export const Button = ({ dispatch }) => {
  return <button onClick={() => dispatch(fetchDog())}>Show Dog</button>;
};
