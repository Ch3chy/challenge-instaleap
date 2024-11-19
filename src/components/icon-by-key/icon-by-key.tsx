import { House, Receipt, SignOut } from "@phosphor-icons/react/dist/ssr";
import { FC } from "react";
import { IconByKeyProps } from "./icon-by-key.types";

const IconByKey: FC<IconByKeyProps> = ({ icon, className }) => {
  const Component =
    icon === "house"
      ? House
      : icon === "receipt"
      ? Receipt
      : icon === "sign-out"
      ? SignOut
      : null;
  return Component ? (
    <Component weight="light" className={`${className || ""}`} />
  ) : null;
};

export default IconByKey;
