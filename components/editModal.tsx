import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import SingleTask from "../pages/task/[id]"




const EditModal = ({id}:{id:string | undefined}) =>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button colorScheme='blue' onClick={onOpen}>Edit</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay>
            <ModalContent>
              <ModalHeader>Create New Task</ModalHeader>
              <ModalCloseButton />
  
              <ModalBody>
                <SingleTask id={id}/>
              </ModalBody>
  
              <ModalFooter>
                <Button colorScheme="red" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </ModalOverlay>
        </Modal>
      </>
    )
}

export default EditModal