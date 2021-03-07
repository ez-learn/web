import CourseModule from "../../src/components/courses/CourseModule";
import Header from "../../src/components/Header/index";
import Player from "../../src/components/Player";
export default function CoursePlayer() {
  return (
    <>
      <Header />
      <div className={"flex flex-col md:flex-row"}>
        <div className={"w-full md:w-4/6"}>
            <Player/>
        </div>
        <div className={"w-full md:w-2/6"}>
            <CourseModule/>
        </div>
      </div>
    </>
  );
}
