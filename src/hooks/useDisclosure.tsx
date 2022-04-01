import { useCallback, useState } from 'react';

interface Props {
  isOpen?: boolean;
  onClose?: () => any;
  onOpen?: () => any;
}

export default function useDisclosure(props?: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(props?.isOpen ?? false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    props?.onOpen && props.onOpen();
  }, [props?.onOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    props?.onClose && props.onClose();
  }, [props?.onClose]);

  return {
    isOpen,
    onOpen: handleOpen,
    onClose: handleClose,
  };
}
