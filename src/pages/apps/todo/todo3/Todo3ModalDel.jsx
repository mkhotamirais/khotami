import { Modal, ModalBool } from "../../../../components/Components";

export function Todo3ModalDel({ onClose, item, modalId, handleDelete }) {
  const onDel = (e) => {
    e.preventDefault();
    handleDelete(item);
  };
  return (
    <Modal onClose={onClose} itemId={item.id} modalId={modalId} submitDel={onDel} confirmDel={true} closeBtn={true}>
      <div className="mb-3">
        Delete <i>{item.text}</i>, are you sure?
      </div>
    </Modal>
  );
}
Todo3ModalDel.propTypes;

export function Todo3ModalDelAll({ onClose, openModalDel, deleteAllChecked }) {
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
Todo3ModalDelAll.propTypes;
