import React from "react";
import * as Mui from "@mui/material";
import * as I from "@mui/icons-material";
import { makeStyles } from "@mui/material";

const App = () => {
	return (
		<>
			<Mui.CssBaseline />
			<Mui.AppBar position="relative">
				<Mui.Toolbar>
					<I.PhotoCamera />
					<Mui.Typography variant="h6" ml={4}>
						Photo Album
					</Mui.Typography>
				</Mui.Toolbar>
			</Mui.AppBar>
			<main>
				<Mui.Container maxWidth="sm">
					<Mui.Typography variant="h2" align="center" color="textPrimary" gutterBottom pt={2}>
						Photo Album
					</Mui.Typography>
					<Mui.Typography variant="h5" align="center" color="textSecondary" paragraph>
						Hello Everyone
					</Mui.Typography>
					<div>
						<Mui.Grid container spacing={2} justify="center">
							<Mui.Grid item>
								<Mui.Button variant="contained" color="primary">
									See my photos
								</Mui.Button>
							</Mui.Grid>
							<Mui.Grid item>
								<Mui.Button variant="outline" color="primary">
									Scondary Action
								</Mui.Button>
							</Mui.Grid>
						</Mui.Grid>
					</div>
				</Mui.Container>
				<Mui.Container maxWidth="md">
					<Mui.Grid container spacing={4} mt={4}>
						<Mui.Grid item>
							<Mui.Card>
								<Mui.CardMedia image="https://source.unsplash.com/random" title="Image Title" />
								<Mui.CardContent>
									<Mui.Typography gutterBottom variant="h5">
										Heading
									</Mui.Typography>
									<Mui.Typography>This is a media card.</Mui.Typography>
								</Mui.CardContent>
								<Mui.CardActions>
									<Mui.Button size="small" color="primary">
										View
									</Mui.Button>
									<Mui.Button size="small" color="primary">
										Edit
									</Mui.Button>
								</Mui.CardActions>
							</Mui.Card>
						</Mui.Grid>
					</Mui.Grid>
				</Mui.Container>
			</main>
		</>
	);
};

export default App;
