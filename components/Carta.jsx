import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from '../styles/Prueba.module.scss'

import { Modal, Box } from '@mui/material'

const Carta = (props) => {

    const [open, setOpen] = useState(false)

    return (
        <div>
            <Card sx={{ maxWidth: 345 }} className={styles.mu}>
                <CardActionArea onClick={() => setOpen(true)}>
                    {/* <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    /> */}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.nombre}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <p>
                                {props.coor}
                            </p>
                            <p>
                                {props.tipo}
                            </p>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box className={styles.mo}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {props.id}
                    </Typography>
                </Box>
            </Modal>
        </div>

    )
}

export default Carta