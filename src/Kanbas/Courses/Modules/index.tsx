import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModulesControlButtons";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import userIsFaculty from "../../Account/useIsFaculty";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  //const { modules } = useSelector((state: any) => state.modulesReducer);
  const [modules, setModules] = useState<any[]>([]);
  const dispatch = useDispatch();
  const UserIsFaculty = userIsFaculty();

  const [number, setNumber] = useState("");
  const [refetch, setRefetch] = useState(false);

  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    setRefetch(!refetch);
    // dispatch(updateModule(module));
  };
  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    setRefetch(!refetch);
    //dispatch(deleteModule(moduleId));
  };
  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    setRefetch(!refetch);
    //dispatch(addModule(module));
  };
  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    const updatedData = modules.map((item: any) => ({ ...item, editing: false }));
    console.log("modules are", modules);
    //dispatch(setModules(modules));
    setModules(updatedData);
  };
  useEffect(() => {
    fetchModules();
  }, [refetch]);

  return (
    <div>
      <ModulesControls
        setModuleName={setModuleName}
        moduleName={moduleName}
        addModule={createModuleForCourse}
      />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .map((module: any) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                {module.editing && (
                  <input
                    className="form-control w-50 d-inline-block"
                    // onChange={(e) =>
                    //   // dispatch(
                    //   //   updateModule({ ...module, name: e.target.value })
                    //   // )
                    //   //saveModule({...module, name: e.target.value})
                    // }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveModule({ ...module, editing: false, name: (e.target as HTMLInputElement).value });
                      }
                    }}
                    defaultValue={module.name}
                  />
                )}
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => removeModule(moduleId)}
                  // editModule={() => {
                  //   saveModule({ ...module, editing: true })}}
                  module = {module}
                  setItems = {setModules}
                />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li className="wd-lesson list-group-item p-3 ps-1">
                      <span className="wd-title">
                        <BsGripVertical className="me-2 fs-3" />
                        {lesson.name}
                        <LessonControlButtons />
                      </span>
                      <ul className="wd-content">
                        <li className="wd-content-item list-group-item p-3 ps-1">
                          <BsGripVertical className="me-2 fs-3" />
                          Introduction to the course
                          <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item p-3 ps-1">
                          <BsGripVertical className="me-2 fs-3" />
                          Learn what is Web Development
                          <LessonControlButtons />
                        </li>
                      </ul>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
