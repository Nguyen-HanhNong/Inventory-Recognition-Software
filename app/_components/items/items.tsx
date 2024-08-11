'use client';

import {firestore} from '@/firebase';
import { Box, Button, Modal, Stack, TextField, Typography } from '@mui/material';
import {useState, useEffect} from 'react';
import { collection, deleteDoc, doc, getDoc, getDocs, query, setDoc } from 'firebase/firestore';

export default function ItemsPage() {
  const [inventory, setInventory] = useState<any[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [itemName, setItemName] = useState<string>('');

  const updateInventory = async () => {
    const snapshot = query(collection(firestore, 'inventory'));
    const docs = await getDocs(snapshot);

    const inventoryList = [];
    docs.forEach(doc => {
      inventoryList.push({
        name: doc.id,
        ...doc.data()
      });
    });

    setInventory(inventoryList);
  }

  const removeItem = async (item: any) => {
    const docRef = doc(collection(firestore, 'inventory'), item)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const { quantity } = docSnap.data();

      if (quantity > 1) {
        await setDoc(docRef, { quantity: quantity - 1 });
      }
      else {
        await deleteDoc(docRef);
      }
    }

    await updateInventory();
  }

  const addItem = async (itemName: string) => {
    const docRef = doc(collection(firestore, 'inventory'), itemName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      await setDoc(docRef, { quantity: quantity + 1 });
    }
    else {
      await setDoc(docRef, { quantity: 1 });
    }

    await updateInventory();
  }

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  useEffect(() => {
    updateInventory();
  }, []); 
  
  return (
    <Box width="100vw" height="100vh" display="flex" justifyContent="center" alignItems="center" gap={2} flexDirection="column">
      <Modal open={open} onClose={handleClose}>
        <Box
          position="absolute"
          top="50%"
          left="50%"
          width={400}
          bgcolor="white"
          border="2px solid #000"
          boxShadow={24}
          p={4}
          display="flex"
          flexDirection="column"
          gap={3}
          sx={{
            transform: 'translate(-50%, -50%)',
            outline: 'none'
          }}
        >
          <Typography variant='h6'>Add Item </Typography>
          <Stack width="100%" direction="row" gap={2} spacing={2}>
            <TextField
              variant='outlined'
              fullWidth value={itemName}
              onChange={(e) => {
                setItemName(e.target.value);
              }}
            >
            </TextField>
            <Button variant='outlined' onClick={() => {
              addItem(itemName)
              setItemName('');
              handleClose();
            }}>Add</Button>
          </Stack>
        </Box>
      </Modal>
      <Typography variant="h1">Inventory Image Recognition Software</Typography>
      <Button variant='contained' onClick={handleOpen}>Add New Item</Button>
      <Box border='1px solid #333'>
        <Box width="800px" height="100px" bgcolor="#ADD8E6" alignItems="center" justifyContent="center" display="flex">
          <Typography variant="h2" color="#333">Inventory Items</Typography>
        </Box>
      </Box>
      <Stack width="800px" height="300px" spacing={2} overflow="auto">
        {inventory.map((item, index) => (
          <Box key={index} display="flex" justifyContent="space-between" alignItems="center" border="1px solid #333" bgcolor="#f0f0f0" p={2} padding={5}>
            <Typography variant="h4">{item.name}</Typography>
            <Typography variant="h4">{item.quantity}</Typography>
            <Button variant="outlined" onClick={() => removeItem(item.name)}>Remove</Button>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
