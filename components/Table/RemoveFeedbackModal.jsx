import React, { useState, useRef } from 'react';
import { mutate } from 'swr';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  IconButton
} from '@chakra-ui/react';

import Trash from '@/icons/Trash';
import { deleteFeedback } from '@/lib/db';
import { useAuth } from '@/lib/auth';

const RemoveFeedbackModal = ({ feedbackId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = useRef();
  const auth = useAuth();

  const onClose = () => setIsOpen(false);
  const handleRemove = () => {
    deleteFeedback(feedbackId);
    mutate(
      [`/api/feedback`, auth.user.token],
      async (data) => {
        return {
          feedback: data.feedback.filter(
            (feedback) => feedback.id !== feedbackId
          )
        };
      },
      false
    );
    onClose();
  };

  return (
    <>
      <IconButton
        onClick={() => setIsOpen(true)}
        aria-label="Delete feedback"
        icon={<Trash boxSize={6} />}
        variant="ghost"
      />

      <AlertDialog
        motionPreset="slideInBottom"
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Feedback
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleRemove} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default RemoveFeedbackModal;
