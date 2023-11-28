import { Tr, Td, Flex } from "@chakra-ui/react";
import { CiEdit } from "react-icons/ci";
import { IoTrashBin } from "react-icons/io5";
const Items = ({ number, value }) => {
  return (
    <Tr>
      <Td>{number}</Td>
      <Td>{value}</Td>
      <Td>{value}</Td>
      <Td>{value}</Td>
      <Td>
        <Flex gap={2}>
          <CiEdit />
          <IoTrashBin />
        </Flex>
      </Td>
    </Tr>
  );
};

export default Items;
