import { useState } from "react";

function ModuleItem({ expanded }) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  return <div className="flex flex-col">
      <div className="flex py-2 px-1">
        <div className="px-2">Icon</div>
        <div className="px-2">module Name</div>
      </div>
      <div>
          {(expanded) ? (<p>Expanded</p>) : null}
      </div>
  </div>;
}
const modules = [
    {icon: 'icon', name: 'Chapter One'}
]

export default function CourseModule() {
  const [allExpanded, setAllExpanded] = useState(false);
  return <>
    {
        modules.map((module, index) => <ModuleItem key={index} expanded={index === 0 || allExpanded}/>)
    }
  </>;
}
