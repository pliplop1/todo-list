import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import ListForm from './ListForm';

export default function ListModal(props) {
    const [name, setName] = useState('');
    const [color, setColor] = useState('#3897FF');

    function handleSubmit() {
        const list = {
            name: name,
            color: color,
            task: [],
        };
        console.log(list);
    }

    return (
        <Modal
            title={props.modalTitle}
            open={props.isOpen}
            onCancel={props.handleCancel}
            footer={[
                <Button type='primary' onClick={handleSubmit}>
                    Créer une liste
                </Button>,
            ]}
        >
            <ListForm
                name={name}
                color={color}
                setName={setName}
                setColor={setColor}
            />
        </Modal>
    );
}
