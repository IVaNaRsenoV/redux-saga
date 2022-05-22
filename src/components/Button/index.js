import { fetchDog } from "../../redux/actionCreators";

export const Button = ({ dispatch }) => {
  return <button onClick={() => fetchDog(dispatch)}>Show Dog</button>;
};
