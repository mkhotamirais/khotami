import { SnackbarProvider, enqueueSnackbar } from "notistack";
import Todo2Add from "./Todo2Add";
import Todo2Items from "./Todo2Items";
import { TodoContext } from "./Todo2Provider";
import { useContext, useState } from "react";
import { Todo2ModalDelAll } from "./Todo2ModalDel";

const Todo2 = () => {
  const { todos, dispatch, checkedAll, setCheckedAll, isEdit, setIsEdit } = useContext(TodoContext);
  const [openModalDelAll, setOpenModalDelAll] = useState(false);

  const checkedLength = todos.filter((d) => d.done).length;

  const deleteAllChecked = () => {
    dispatch({ type: "deletedChecked" });
    if (checkedLength < todos.length) {
      enqueueSnackbar(`delete ${checkedLength} data success`, { variant: "success" });
      setOpenModalDelAll(false);
    } else if (checkedLength === todos.length) {
      enqueueSnackbar(`delete All data success`, { variant: "success" });
    }
    setCheckedAll(false);
  };

  const checkedAllData = () => {
    setCheckedAll((prev) => !prev);
    dispatch({ type: "changedAll", checkedAll });
  };

  return (
    <div className="border rounded p-3">
      <Todo2Add />
      <Todo2ModalDelAll
        onClose={() => setOpenModalDelAll(false)}
        openModalDel={openModalDelAll}
        deleteAllChecked={deleteAllChecked}
      />
      {todos?.length > 0 ? (
        <>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center my-2 mb-3 text-sm">
              <input type="checkbox" checked={checkedLength === todos.length} onChange={checkedAllData} />
              <span>Checked All data</span>
            </div>
            {checkedLength > 0 && (
              <button
                // onClick={deleteAllChecked}
                type="button"
                onClick={() => setOpenModalDelAll(true)}
                className="delete border rounded p-2 leading-none bg-red-500 text-white hover:opacity-50 text-xs sm:text-sm"
              >
                Delete All Checked
              </button>
            )}
          </div>
          <div className="flex flex-col gap-1">
            {todos
              .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
              .map((item) => (
                <Todo2Items key={item.id} item={item} isEdit={isEdit} setIsEdit={setIsEdit} />
              ))}
          </div>
        </>
      ) : (
        <div className="text-center italic">Data kosong</div>
      )}
      <SnackbarProvider />
    </div>
  );
};

export default Todo2;
