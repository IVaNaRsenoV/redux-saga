import { fetchDog } from "../../redux/actionCreators";

export const Button = ({ dispatch }) => {
  return <button onClick={() => dispatch(fetchDog())}>Show Dog</button>;
};
