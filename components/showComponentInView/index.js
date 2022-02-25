import useInView from "react-cool-inview";
import dynamic from "next/dynamic";
// const Comments = dynamic(() => import("../components/Comments"));

export default function ShowComponentInView({ component }) {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  });

  return (
    <>
      {/* bind the observe to this ref so we can watch this element entering/exiting the viewport */}
      {/* when this comes into view, inView will be true */}
      <div ref={observe}>
        {/* comments will load when inView is true */}
        {inView && component}
      </div>
    </>
  );
}
