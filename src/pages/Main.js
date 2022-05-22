import { Content, Button } from "../components";

const Main = ({ dispatch, loading, error, url }) => {
  return (
    <div>
      <Button dispatch={dispatch} />
      <Content loading={loading} error={error} url={url} />
    </div>
  );
};

export default Main;
