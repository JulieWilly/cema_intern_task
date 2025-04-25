import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="w-1/4 flex">
      <div className=" w-full bg-secondary p-4">
        <nav>
          <ul className=" flex flex-col gap-4">
            <li>
              {" "}
              <NavLink
                to={"/dashboard"}
                className="text-white text-lg font-semibold mb-4"
              >
            Dashboard
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to={"/register-client"}
                className="text-white text-lg font-semibold mb-4"
              >
                Register Client
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to={"/health-programs"}
                className="text-white text-lg font-semibold mb-4"
              >
                Health Programs
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideBar