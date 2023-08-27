import { Stories } from "./components/stories/stories";
import { useGetStories } from "./hooks/useGetStories";
import { CenteredMessage } from "./components/centeredMessage/centeredMessage";

export default function App() {
  const { topStories, isLoading, isError, fetchData } = useGetStories();

  return (
    <>
      {isLoading || isError ? (
        <CenteredMessage
          isError={isError}
          text={isLoading ? "loading..." : "error, something went wrong"}
        />
      ) : (
        <Stories topStories={topStories} fetchData={fetchData} />
      )}
    </>
  );
}
