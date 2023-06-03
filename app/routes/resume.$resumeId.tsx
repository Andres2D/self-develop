import type { V2_MetaFunction } from "@remix-run/node";
import Resume from "~/components/resume/resume";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Resume" },
    { name: "description", content: "Create your resume" },
  ];
};

const ResumePage = () => {
  return (
    <Resume />
  )
};

export default ResumePage;
