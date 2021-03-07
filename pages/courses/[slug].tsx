import Header from "../../src/components/Header";
import CourseCover from "../../src/components/courses/CourseCover";
import Tab from "../../src/components/Tab";
import { name } from "next/dist/telemetry/ci-info";

export default function Course() {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <main>
        <section>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-4/5">
              <CourseCover />
              <Tab
                buttons={[
                  { key: "tab1", name: "Table Of Content" },
                  { key: "tab2", name: "Description" },
                  { key: "tab3", name: "Related Courses" },
                ]}
                items={[
                  { key: "tab1", node: <div>Table of contents goes here</div> },
                  { key: "tab2", node: <div>Description goes here</div> },
                  { key: "tab3", node: <div>Related Courses goes here</div> },
                ]}
              />
            </div>
            <div>author profile</div>
          </div>
        </section>
      </main>
    </>
  );
}
