import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import { Table as ChakraTable, Tr, Th, Td } from './TableCells';
import { parseISO, format } from 'date-fns';

const Table = ({ sites }) => {
  return (
    <ChakraTable>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date Added</Th>
          <Th>{''}</Th>
        </Tr>
      </thead>
      <tbody>
        {sites?.map((site) => (
          <Box as="tr" key={site.url}>
            <Td fontWeight="medium">{site.name}</Td>
            <Td>{site.url}</Td>
            <Td>
              <Link>View Feedback</Link>
            </Td>
            <Td>{format(parseISO(site.createdAt), 'PPpp')}</Td>
          </Box>
        ))}
      </tbody>
    </ChakraTable>
  );
};

export default Table;
