import './styles.scss';
import {Modal, Tabs} from "antd";
import {modalTabs} from "./Tabs/Tabs";

const SettingsModal = ({ isModalOpen, setIsModalOpen }) => {
    const cancelHandler = () => setIsModalOpen(false);

    return (
        <Modal
            title="Settings"
            open={isModalOpen}
            okButtonProps={{ style: { display: 'none' } }}
            cancelButtonProps={{ style: { display: 'none' } }}
            onCancel={cancelHandler}
            className="modal"
            centered
        >
            <Tabs
                defaultActiveKey="1"
                tabPosition={'left'}
                style={{ height: 220 }}
                items={modalTabs}
                className="tabs-wrapper"
            />
        </Modal>
    )
}

export default SettingsModal;