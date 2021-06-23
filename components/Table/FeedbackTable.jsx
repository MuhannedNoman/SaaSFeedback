import React from 'react';
import { Box, Code, Switch } from '@chakra-ui/react';

import { Table, Tr, Th, Td } from './TableCells';
import RemoveFeedbackModal from './RemoveFeedbackModal';

const FeedbackTable = ({ allFeedback }) => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Feedback</Th>
          <Th>Route</Th>
          <Th>Visible</Th>
          <Th>{''}</Th>
        </Tr>
      </thead>
      <tbody>
        {allFeedback.map((feedback) => (
          <Box as="tr" key={feedback.id}>
            <Td fontWeight="medium">{feedback.name}</Td>
            <Td>{feedback.text}</Td>
            <Td>
              <Code>{'/feedback.route'}</Code>
            </Td>
            <Td>
              <Switch defaultChecked={feedback.status === 'active'} />
            </Td>
            <Td>
              <RemoveFeedbackModal feedbackId={feedback.id} />
            </Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};

export default FeedbackTable;
