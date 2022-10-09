import { useState, useCallback, useMemo } from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";

import classes from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

export default function Tree({ list, onSelect = (v) => v }) {
  const [selectedId, setSelectedId] = useState("");
  const [openedList, setOpenedList] = useState([]);

  const handleSelectId = useCallback(
    (id) => {
      setSelectedId((str) => {
        if (str !== id) {
          onSelect(id);
        }
        return id;
      });
      setOpenedList((arr) => {
        const selected = arr.find((item) => item === id);
        return selected ? arr : [...arr, id];
      });
    },
    [onSelect]
  );

  const handleOpenFolder = useCallback((id, event) => {
    event.stopPropagation();
    setOpenedList(([...arr]) => {
      const selected = arr.find((item) => item === id);
      return selected ? arr.filter((item) => item !== id) : [...arr, id];
    });
  }, []);

  const createList = useCallback(
    (list) =>
      list.map(({ title, icon, selectedIcon, id, children }) => {
        const opened = openedList.find((item) => item === id);
        const selected = id === selectedId;

        const folderIcon =
          icon && selectedIcon ? (
            !!children && opened ? (
              selectedIcon
            ) : (
              icon
            )
          ) : !!children && opened ? (
            <FolderOpenOutlinedIcon />
          ) : (
            <FolderOutlinedIcon />
          );

        return (
          <li key={id}>
            <div
              className={cx("title", { selected })}
              onClick={() => handleSelectId(id)}
            >
              <Arrow
                show={!!children}
                open={!!opened}
                onOpen={(e) => handleOpenFolder(id, e)}
              />
              <Icon>{folderIcon}</Icon>
              <span>{title}</span>
            </div>
            {!!opened && !!children && <ul>{createList(children)}</ul>}
          </li>
        );
      }),
    [handleOpenFolder, handleSelectId, openedList, selectedId]
  );

  const ChildList = useMemo(() => createList(list), [createList, list]);
  return (
    <div className={cx("tree")}>
      <ul>{ChildList}</ul>
    </div>
  );
}

const Icon = ({ children, className }) => (
  <div className={cx("icon", className)}>{children}</div>
);

const Arrow = ({ show = false, open, onOpen }) => {
  console.log("open >>>", open);
  return (
    <Icon className={cx({ "arrow-open": open })}>
      {show && <KeyboardArrowRightIcon onClick={onOpen} />}
    </Icon>
  );
};
