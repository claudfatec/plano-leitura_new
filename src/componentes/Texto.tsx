// @flow 
import { Grid } from '@mui/material';
import { Calendario } from './Calendario';
import ChamaApiTeste from './ChamaApiTeste';
import { Textocorpo } from './Textocorpo';
type Props = {
    
};
export const Texto = (props: Props) => {
    return (
        <div>
            <Grid container height={'100%'}>
                <Grid item xs={12} md={3}><Calendario /></Grid>
                <Grid item xs={12} md={9}><Textocorpo /></Grid>
                <Grid item xs={12} md={9}><ChamaApiTeste /></Grid>

            </Grid>
        </div>
    );
};