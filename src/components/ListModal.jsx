import React from 'react';
import { Modal } from 'antd';

export default function ListModal(props) {
    return (
        <Modal
            title={props.modalTitle}
            open={props.isOpen}
            onCancel={props.handleCancel}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    );
}
