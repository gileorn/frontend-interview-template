import { IconsType } from "~/ui/Icons/Icons";

type Props = {
  loading: boolean;
  isOpen: boolean;
  error: boolean;
};

export const getIconType = ({ loading, isOpen, error }: Props): IconsType => {
  if (loading) {
    return "loader";
  }

  if (error) {
    return "alert";
  }

  if (isOpen) {
    return "chevronDown";
  }

  return "chevronRight";
};
