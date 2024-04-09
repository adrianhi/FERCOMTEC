import { Dropdown } from "primereact/dropdown";

const ProjectDropdown = ({ groups, selectedGroup, onGroupChange }) => {
  return (
    <div>
      <Dropdown
        value={selectedGroup}
        options={groups}
        onChange={(e) => onGroupChange(e.value)}
        optionLabel="label"
        placeholder="Select a category"
      />
    </div>
  );
};

export default ProjectDropdown;
