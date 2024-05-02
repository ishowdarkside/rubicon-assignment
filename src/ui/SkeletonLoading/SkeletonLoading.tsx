import SkeletonItem from "./SkeletonItem";

export default function SkeletonLoading(): JSX.Element {
  const arr = Array.from({ length: 6 });

  return (
    <>
      {arr.map((e, i) => (
        <SkeletonItem key={i} />
      ))}
    </>
  );
}
