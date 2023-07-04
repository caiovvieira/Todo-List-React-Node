import { Link as LinkRouterDom } from "react-router-dom"
import Button from '@mui/material/Button';
import Input from "@mui/material/Input";
import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function Auth(params) {


    return (



        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh' }}
        >
            <Card sx={{ minWidth: 500 }} >
                <CardContent sx={{ minWidth: 500 }}>
                    <h1>auth</h1>

                    <form>
                        <div>
                            <Input type="email" name="email" placeholder="Digite seu e-mail" />
                        </div>
                        <div>
                            <Input type="password" name="password" placeholder="Digite sua senha" />
                        </div>
                        <Button variant="contained" type="submit">Enviar</Button>
                    </form>

                    <Link component={LinkRouterDom} to="/newUser">
                        Cadastrar-se
                    </Link>
                </CardContent>


            </Card>
        </Grid>
    )
}

export default Auth