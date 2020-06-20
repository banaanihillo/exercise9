import React from "react";
import {Modal, Segment} from "semantic-ui-react";
import AddEntryForm from "./AddEntryForm";
import {EntryTemplateProps} from "../types"

interface Props {
    modalOpen: boolean;
    onClose: () => void;
    submitNewEntry: (values: EntryTemplateProps) => void;
    error?: string;
}

const AddThingModal = ({ modalOpen, onClose, submitNewEntry, error }: Props) => (
    <Modal open = {modalOpen} onClose = {onClose} centered = {false} closeIcon>
        <Modal.Header> Add a new thing </Modal.Header>
        <Modal.Content>
            {error && <Segment inverted color = "red"> {`Error: ${error}`} </Segment>}
            <AddEntryForm handleEntrySubmission = {submitNewEntry} onCancel = {onClose} />
        </Modal.Content>
    </Modal>
);

export default AddThingModal;
