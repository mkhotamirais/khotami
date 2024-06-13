import { Modal, ModalBool } from "../../../../components/Components";

export function Todo1ModalDel({ onClose, item, modalId, deleteTodo }) {
  const submitDel = (e) => {
    e.preventDefault();
    deleteTodo(item);
  };
  return (
    <Modal onClose={onClose} itemId={item.id} modalId={modalId} closeBtn={true} confirmDel={true} submitDel={submitDel}>
      <div className="mb-2">Delete {item.text}, are you sure?</div>
    </Modal>
  );
}
Todo1ModalDel.propTypes;

export function Todo1ModalDelAll({ onClose, openModalDel, deleteAllChecked }) {
  const submitDel = (e) => {
    e.preventDefault();
    deleteAllChecked();
  };
  return (
    <ModalBool onClose={onClose} openModal={openModalDel} closeBtn={true} confirmDel={true} submitDel={submitDel}>
      <div className="mb-3">Delete All, are you sure?</div>
    </ModalBool>
  );
}
Todo1ModalDelAll.propTypes;
