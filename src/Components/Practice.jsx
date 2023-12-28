import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Stack,
  Center,
  Input,
  Select,
  Radio,
  RadioGroup,
  Grid,
  GridItem,
  Card,
  CardHeader,
  CardBody,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Td,
  Flex,
} from "@chakra-ui/react";
import { CiEdit } from "react-icons/ci";
import { IoTrashBin } from "react-icons/io5";

const Practice = () => {
  const [values, setValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [radioValue, setRadioValue] = useState(1);
  const [click, setClicked] = useState(false);

  useEffect(() => {}, [click]);

  const handleClick = () => {
    if (values) {
      const available = JSON.parse(localStorage.getItem("items")) || [];
      var id;
      available.length !== 0
        ? available.findLast((item) => (id = item.id))
        : (id = 0);
      console.log(available.findLast((item) => (id = item.id)));

      var listItem = {
        id: id + 1,
        item: values,
        priority: selectValue,
        status: radioValue,
      };
      available.push(listItem);

      localStorage.setItem("items", JSON.stringify(available));
      setClicked(!click);
    } else {
      alert("Enter value!");
    }
  };
  const find = (id) => {
    const available = JSON.parse(localStorage.getItem("items")) || [];
    available.forEach((item) => {
      // console.log(item.id);
      if (item.id === id) {
        setValue(item.item);
        setSelectValue(item.priority);
      }
    });
  };

  const renderPriority = (priority) => {
    // console.log(priority);
    switch (priority) {
      case "1":
        return "Low";
      case "2":
        return "Medium";
      case "3":
        return "High";
      default:
        return "None";
    }
  };

  return (
    <>
      <FormControl>
        <Grid p={8} templateColumns="repeat(3, 1fr)" gap={2}>
          <GridItem>
            <FormLabel>Item:</FormLabel>
            <Input
              value={values}
              variant="flushed"
              w={"100%"}
              focusBorderColor="blue"
              onChange={(e) => setValue(e.target.value)}
              placeholder="Input Text"
              label="Hello"
            />
          </GridItem>
          <GridItem>
            <FormLabel>Priority</FormLabel>
            <Select
              value={selectValue}
              placeholder="Select option"
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <option value="1">Low</option>
              <option value="2">Medium</option>
              <option value="3">High</option>
            </Select>
          </GridItem>

          <GridItem>
            <FormLabel>Status</FormLabel>
            <RadioGroup>
              <Stack direction="row">
                <Radio onChange={() => setRadioValue("Enabled")} value="1">
                  Enabled
                </Radio>
                <Radio onChange={() => setRadioValue("Disabled")} value="2">
                  Disabled
                </Radio>
              </Stack>
            </RadioGroup>
          </GridItem>
        </Grid>
        <Center>
          <Button w={100} colorScheme="teal" onClick={handleClick}>
            Send
          </Button>
        </Center>
      </FormControl>
      <Center>
        <Card w="90%">
          <Center>
            {" "}
            <CardHeader fontSize="lg">To do Items</CardHeader>
          </Center>

          <CardBody>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>No.</Th>
                    <Th>Task</Th>
                    <Th>Status</Th>
                    <Th>Priority</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {localStorage.getItem("items") ? (
                    JSON.parse(localStorage.getItem("items")).map((items) => (
                      <Tr key={items.id}>
                        <Td>{items.id}</Td>
                        <Td>{items.item}</Td>
                        <Td>{items.status}</Td>

                        <Td>{renderPriority(items.priority)}</Td>
                        <Td>
                          <Flex gap={2}>
                            <Button onClick={() => find(items.id)}>
                              <CiEdit />
                            </Button>
                            <IoTrashBin />
                          </Flex>
                        </Td>
                      </Tr>
                    ))
                  ) : (
                    <Center>Nothing to show</Center>
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          </CardBody>
        </Card>
      </Center>
    </>
  );
};

export default Practice;
