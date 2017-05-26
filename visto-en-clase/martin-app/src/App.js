import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import NavbarComp from './components/Navbar';
import JumbotronComp from './components/Jumbotron';
import ThumbnailList from './components/Thumbnails';
import Footer from './components/Footer';

const Section = ({ children }) => (
	  <div>{children}</div>
);

const data = [{ name: 'Iron Man', charge:"SuperHero" }, { name: 'Homero', charge:"Dad?" }, { name: 'Satchmo', charge: "Trumpet Player" },{ name: 'Jhon Doe', charge: "Foo Man" }];

const Container = () => (
	<Grid>
		<JumbotronComp className="jumbotron hero-spacer" />
		<hr/>
		<ThumbnailList items={data} />
		<Footer />
	</Grid>
);

const App = () => (
      <Section>
	  	<NavbarComp />
	  	<Container />
	  </Section>
);

export default App;
