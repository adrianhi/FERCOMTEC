import { useState } from "react";

export const useProjectFilter = (projects) => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  
  const groups = [
    { label: "All", value: null },
    ...[...new Set(projects.map(({ group }) => group))].map((group) => ({
      label: group,
      value: group,
    })),
  ];

  const filteredProjects = selectedGroup
    ? projects.filter(({ group }) => group === selectedGroup)
    : projects;

  const handleGroupChange = (value) => {
    setSelectedGroup(value);
  };

  return {
    selectedGroup,
    groups,
    filteredProjects,
    handleGroupChange,
  };
};
