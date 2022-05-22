export const Content = ({ loading, error, url }) => {
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error, try again</p>
      ) : (
        <p>
          <img src={url} />
        </p>
      )}
    </>
  );
};
